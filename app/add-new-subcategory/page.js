"use client";
import { client } from "@/lib/apollo";
import { GET_CATEGORIES_NAME } from "@/lib/query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

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
                        // onClick={handleAddSubcategory}
                      >
                        +
                      </span>
                      <span
                        className="add-list-rem-btn cate-rem-btn"
                        data-toggle="tooltip"
                        title="Click to remove last category"
                        // onClick={handleRemoveCategory}
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
                          method="post"
                          action="insert_category.html"
                          className="cre-dup-form cre-dup-form-show"
                          encType="multipart/form-data"
                          //   onSubmit={handleSubmit}
                        >
                          {/* {category.map((cat) => (
                            <CategoryForm
                              key={cat.id}
                              data={cat}
                              handleDataChange={handleDataChange}
                            />
                          ))} */}
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
                      <Link href="/all-sub-category" className="skip">
                          Go to All Sub Category &gt;&gt;
                        </Link>
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
