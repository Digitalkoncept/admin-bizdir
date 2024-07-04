"use client";
import { client } from "@/lib/apollo";
import { GET_CATEGORIES_NAME } from "@/lib/query";
import React, { useEffect, useState, useRef } from "react";
import { MutatingDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import SubcategoryForm from "./SubcategoryForm";
import { CREATE_SUB_CATEGORY, UPDATE_CATEGORY } from "@/lib/mutation";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subcategory, setSubcategory] = useState({
    id: 0,
    subcategory_name: "",
    tags: [],
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  const [tagInput, setTagInput] = useState("");
  const tagInputRef = useRef(null);

  // Getting the categories to select
  const getCategories = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_CATEGORIES_NAME,
      });

      if (errors || data.getAllCategories.code !== 200) {
        throw new Error("Something went wrong");
      }

      setCategories(data.getAllCategories.categories);
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleTagKeyPress = (e) => {
    console.log('tag input =>',tagInput.trim().length)
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();

      setSubcategory((prevSubcategory) => ({
        ...prevSubcategory,
        tags: [...(prevSubcategory.tags || []), tagInput.trim()],
      }));
      setTagInput("");
      tagInputRef.current.focus();
    } else if (e.key === "Backspace" && tagInput.trim().length === 0) {
      e.preventDefault();
      setSubcategory((prevSubcategory) => ({
        ...prevSubcategory,
        tags: (prevSubcategory.tags || []).slice(0, -1),
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "tag") {
      setTagInput(value);
      console.log("tag input =>",tagInput)
    } else {
      setSubcategory((prevSubcategory) => ({
        ...prevSubcategory,
        [name]: value,
      }));
    }
  };

  const handleRemove = (tagIndex) => {
    setSubcategory((prevSubcategory) => ({
      ...prevSubcategory,
      tags: (prevSubcategory.tags || []).filter(
        (_, index) => index !== tagIndex
      ),
    }));
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
      console.log(data);

      if (errors || data.createSubcategory.code !== 201) {
        throw new Error(data.createSubcategory.message);
      }
      return data.createSubcategory.subcategory._id;
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCategory && subcategory[0].subcategory_name) {
      toast.warn("Please fill the boxes before submitting!");
      return;
    }
    setLoading(true);

    console.log(subcategory);

    const { id, ...data } = subcategory;
    const subcategoryId = await createSubcategory(data);

    const res = await addSubToCategory([subcategoryId]);

    if (res) {
      toast.success("Created Successfully!");
      setSubcategory({
        id: 0,
        subcategory_name: "",
        tags: [],
      });
      setLoading(false);
      setSelectedCategory("");
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
                      <div className="form-group">
                        <div className="pl-0 mb-3">
                          <select
                            onChange={(e) =>
                              setSelectedCategory(e.target.value)
                            }
                            value={selectedCategory || ""}
                            name="category"
                            id="category_id"
                            className="form-control"
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
                          className="cre-dup-form cre-dup-form-show"
                          //   onSubmit={handleSubmit}
                        >
                          <SubcategoryForm
                            data={subcategory}
                            tagInput={tagInput}
                            setTagInput={setTagInput}
                            tagInputRef={tagInputRef}
                            handleRemove={handleRemove}
                            handleTagKeyPress={handleTagKeyPress}
                            handleInputChange={handleInputChange}
                          />

                          <button
                            type="button"
                            name="category_submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
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
