"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import CategoryForm from "./CategoryForm";
import { client } from "@/lib/apollo";
import { CREATE_CATEGORY } from "@/lib/mutation";

import { MutatingDots } from "react-loader-spinner";

const page = () => {
  const [category, setCategory] = useState([
    {
      id: 0,
      category_name: "",
      image: "",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleRemoveCategory = () => {
    if (category.length <= 1) {
      toast.warn("You cannot remove the last one!");
      return;
    }

    const newCategories = [...category];
    newCategories.pop();

    setCategory(newCategories);
  };

  const handleAddCategory = () => {
    if (category.length > 10) {
      toast.warn("Max Limit reached");
      return;
    }

    const newCategory = {
      id: (category[category.length - 1].id || 0) + 1,
      category_name: "",
      image: "",
    };

    setCategory([...category, newCategory]);
  };

  const handleDataChange = (id, target, value) => {
    const newCategories = category.map((cat) => {
      if (cat.id === id) cat[target] = value;
      return cat;
    });

    setCategory(newCategories);
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
                  <span className="udb-inst">New Listing Category</span>
                  <div className="log log-1">
                    <div className="login">
                      <h4>Add New Category</h4>
                      <span
                        className="add-list-add-btn cate-add-btn"
                        data-toggle="tooltip"
                        title="Click to make additional category"
                        onClick={handleAddCategory}
                      >
                        +
                      </span>
                      <span
                        className="add-list-rem-btn cate-rem-btn"
                        data-toggle="tooltip"
                        title="Click to remove last category"
                        onClick={handleRemoveCategory}
                      >
                        -
                      </span>

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
                          {category.map((cat) => (
                            <CategoryForm
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
