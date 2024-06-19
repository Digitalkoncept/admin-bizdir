"use client";
import React, { useState } from "react";
import { MutatingDots } from "react-loader-spinner";

const page = () => {
    const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false);
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

                      {/* <div className="form-group">
                        <div className="col-md-6 pl-0">
                          <select
                            onChange={handleChange}
                            value={formData.role || ""}
                            name="role"
                            id="category_id"
                            className="form-control"
                          >
                            <option value>Select Role</option>
                            {roles?.map((role) => (
                              <option key={role._id} value={role._id}>
                                {role.role_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div> */}
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
