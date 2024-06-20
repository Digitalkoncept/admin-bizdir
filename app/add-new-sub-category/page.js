"use client";
import { client } from "@/lib/apollo";
import { GET_CATEGORIES_NAME } from "@/lib/query";
import React, { useEffect, useState,useRef } from "react";
import { MutatingDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import SubcategoryForm from "./SubcategoryForm";
import { toast } from "react-toastify";
import SubcategoryForm from "./SubcategoryForm";

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
  const [tagInput, setTagInput] = useState("");
  const tagInputRef = useRef(null);
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
  }, [])

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

  const handleInputChange = (id,e) => {
    const {name,value} = e.target;
    const newSubcategories = subcategory.map((cat) => {
      if(name === 'tag'){
        setTagInput(value);
        console.log(tagInput)
      }
     else if (cat.id === id){
        cat[name] = value;
      } 
      console.log(subcategory)
      return cat;
    });

    setSubcategory(newSubcategories);
  };
  const handleTagKeyPress = (id, e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      console.log("function is running")
      e.preventDefault()
      const newSubcategories = subcategory.map((cat) => {
        if (cat.id === id) {
          cat.tags.push(tagInput.trim());
        }
        return cat;
      });
      setSubcategory(newSubcategories);
      setTagInput("");
    }
   else if(e.key === "Backspace" && tagInput === "" ){
    e.preventDefault(); // Prevent default backspace action
    const newSubcategories = subcategory.map((cat) => {
      if (cat.id === id && cat.tags.length > 0) {
        cat.tags.pop(); // Remove the last tag
      }
      return cat;
    });
    setSubcategory(newSubcategories);
    }
  };

  const handleRemove = (catId, tagIndex) => {
    const newSubcategories = subcategory.map((cat) => {
      if (cat.id === catId) {
        cat.tags.splice(tagIndex, 1);
      }
      return cat;
    });
    setSubcategory(newSubcategories);
  };

  const addCategory = async (formData) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_CATEGORY,
        variables: { data: formData },
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
      });

      if (errors || data.createCategory.code !== 201) {
        throw new Error("Something went wrong");
      }

      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    for (let cat of category) {
      const { id, ...data } = cat;

      console.log(data);
      addCategory(data);
    }

    setTimeout(() => {
      setLoading(false)
    }, 2000)
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
                        onClick={handleAddSubcategory}
                      >
                        +
                      </span>
                      <span
                        className="add-list-rem-btn cate-rem-btn"
                        data-toggle="tooltip"
                        title="Click to remove last category"
                        onClick={handleRemoveSubcategory}
                        onClick={handleRemoveSubcategory}
                      >
                        -
                      </span>

                      <div className="form-group">
                        <div className="pl-0 mb-3">
                          <select
                            // onChange={handleChange}
                            // value={formData.role || ""}
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
                          {subcategory.map((cat) => (
                            <SubcategoryForm
                          {subcategory.map((cat) => (
                            <SubcategoryForm
                              key={cat.id}
                              data={cat}
                              tagInput={tagInput}
                              setTagInput={setTagInput}
                              tagInputRef={tagInputRef}
                              handleRemove={handleRemove}
                              handleTagKeyPress={handleTagKeyPress}
                              handleInputChange={handleInputChange}
                            />
                          ))}
                          ))}
                          <button
                            type="button"
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
