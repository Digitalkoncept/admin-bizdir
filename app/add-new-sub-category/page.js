"use client";
import { client } from "@/lib/apollo";
import { GET_CATEGORIES_NAME } from "@/lib/query";
import React, { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import SubcategoryForm from "./SubcategoryForm";
import { CREATE_SUB_CATEGORY, UPDATE_CATEGORY } from "@/lib/mutation";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subcategory, setSubcategory] = useState([
    {
      id: 0,
      subcategory_name: "",
      tags: [],
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getCategories = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_CATEGORIES_NAME,
      });

      if (errors || data.getAllCategories.code !== 200) {
        throw new Error("Something went wrong");
      }

      setCategories(data.getAllCategories.categories);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleRemoveSubcategory = () => {
    if (subcategory.length <= 1) {
      toast.warn("You cannot remove the last one!");
      return;
    }

    const newSubcategories = [...subcategory];
    newSubcategories.pop();

    setSubcategory(newSubcategories);
  };

  const handleAddSubcategory = () => {
    if (subcategory.length > 10) {
      toast.warn("Max Limit reached");
      return;
    }

    const newSubcategory = {
      id: (subcategory[subcategory.length - 1].id || 0) + 1,
      subcategory_name: "",
      image: "",
    };

    setSubcategory([...subcategory, newSubcategory]);
  };

  const handleDataChange = (id, target, value) => {
    const newSubcategories = subcategory.map((cat) => {
      if (cat.id === id) cat[target] = value;
      return cat;
    });

    setSubcategory(newSubcategories);
  };

  const addSubToCategory = async (subcategoryIdArray) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_CATEGORY,
        variables: { id: selectedCategory, subcategories: subcategoryIdArray },
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
      });

      if (errors || data.updateCategory.code !== 200) {
        throw new Error(errors);
      }

      return data.updateCategory.success;
    } catch (error) {
      console.error("Error submitting form:", error);
      return false;
    }
  };

  const createSubcategory = async (formData) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_SUB_CATEGORY,
        variables: { data: formData },
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
      });

      if (errors || data.createSubcategory.code !== 201) {
        throw new Error(errors);
      }

      return data.createSubcategory.subcategory._id;
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!"") console.log(true)
    if (!selectedCategory && subcategory[0].subcategory_name){
      toast.warn("Please fill the boxes before submitting!")
      return;
    }

    setLoading(true);

    let arr = [];
    for (let cat of subcategory) {
      const { id, ...data } = cat;

      const subcategoryId = await createSubcategory(data);
      arr.push(subcategoryId);
    }

    const res = await addSubToCategory(arr);

    if (res) {
      toast.success("Created Successfully!");
      setLoading(false);
      return arr;
    } else toast.error("Some went wrong!");
  };

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <section className="login-reg">
            <div className="container">
              <div className="row">
                <div className="login-main add-list add-ncate">
                  <div className="log-bor">&nbsp;</div>
                  <span className="udb-inst">New Listing Subcategory</span>
                  <div className="log log-1">
                    <div className="login">
                      <h4>Add New Subcategory</h4>
                      <span
                        className="add-list-add-btn cate-add-btn"
                        data-toggle="tooltip"
                        title="Click to make additional category"
                        onClick={handleAddSubcategory}
                      >
                        +
                      </span>
                      <span
                        className="add-list-rem-btn cate-rem-btn"
                        data-toggle="tooltip"
                        title="Click to remove last category"
                        onClick={handleRemoveSubcategory}
                      >
                        -
                      </span>

                      <div className="form-group">
                        <div className="pl-0 mb-3">
                          <select
                            onChange={(e) =>
                              setSelectedCategory(e.target.value)
                            }
                            value={selectedCategory}
                            name="category"
                            id="category_id"
                            className="form-control"
                            // required
                          >
                            <option value>Select Category</option>
                            {categories?.map((cat) => (
                              <option key={cat._id} value={cat._id}>
                                {cat.category_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      {loading ? (
                        <div>
                          <MutatingDots />
                          <h2>Loading...</h2>
                        </div>
                      ) : (
                        <form
                          name="category_form"
                          id="category_form"
                          method="post"
                          action="insert_category.html"
                          className="cre-dup-form cre-dup-form-show"
                          encType="multipart/form-data"
                          onSubmit={handleSubmit}
                        >
                          {subcategory.map((cat) => (
                            <SubcategoryForm
                              key={cat.id}
                              data={cat}
                              handleDataChange={handleDataChange}
                            />
                          ))}
                          <button
                            type="submit"
                            name="category_submit"
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                        </form>
                      )}

                      <div className="col-md-12">
                        <a href="admin-all-category.html" className="skip">
                          Go to All Listing Category &gt;&gt;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default page;
