"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CategoryForm from "./CategoryForm";
import { client } from "@/lib/apollo";
import {  UPDATE_CATEGORY } from "@/lib/mutation";
import { MutatingDots } from "react-loader-spinner";
import { GET_CATEGORY } from "@/lib/query";
import { useParams } from "next/navigation";

const page = () => {
  const [category, setCategory] = useState({});
  const params = useParams();

  const getCategory = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_CATEGORY,
        variables: { id: params.id },
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
      });

      if (errors || data.getCategory.code !== 200) {
        throw new Error("Something went wrong");
      }

      setCategory(data.getCategory.category);
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_CATEGORY,
        variables: { id: params.id, categoryName: category.category_name },
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
      });

      if (errors || data.updateCategory.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Category updated successfully!");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;

    if (value.length > 0) {
      setCategory({
        ...category,
        [name]: value,
      });
    }
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
                  <span className="udb-inst">Listing Category</span>
                  <div className="log log-1">
                    <div className="login">
                      <h4>Category</h4>

                      <form
                        name="category_form"
                        id="category_form"
                        method="post"
                        action="insert_category.html"
                        className="cre-dup-form cre-dup-form-show"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                      >
                        <CategoryForm
                          data={category}
                          handleDataChange={handleDataChange}
                        />
                        <button
                          type="submit"
                          name="category_submit"
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </form>

                      {/* <div className="col-md-12">
                        <a href="admin-all-category.html" className="skip">
                          Go to All Listing Category &gt;&gt;
                        </a>
                      </div> */}
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
