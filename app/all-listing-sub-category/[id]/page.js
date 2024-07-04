"use client";
import { client } from "@/lib/apollo";
import { GET_CATEGORIES_NAME, GET_CATEGORY } from "@/lib/query";
import React, { useEffect, useState, useRef } from "react";
import { MutatingDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import SubcategoryForm from "./SubcategoryForm";
import { UPDATE_SUB_CATEGORY } from "@/lib/mutation";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subcategory, setSubcategory] = useState({
    category: "",
    subcategory_name: "",
    tags: [],
  });

  const router = useRouter();

  const params = useParams();
  const splitIds = params.id.split("-");

  const [tagInput, setTagInput] = useState("");
  const tagInputRef = useRef(null);

  const getCategory = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_CATEGORY,
        variables: { id: splitIds[0] },
      });

      if (errors || data.getCategory.code !== 200) {
        throw new Error("Something went wrong");
      }
      const cat = await data.getCategory.category;
      const foundCategory = cat.subcategories.find(
        (val) => val._id === splitIds[1]
      );

      setSubcategory((prevState) => ({
        category: cat._id,
        subcategory_name: foundCategory.subcategory_name,
        tags: foundCategory.tags,
      }));
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Getting the categories to select
  const getAllCategories = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_CATEGORIES_NAME,
      });

      if (errors || data.getAllCategories.code !== 200) {
        throw new Error("Something went wrong");
      }

      setCategories(data.getAllCategories.categories);
      console.log("all categories", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    getCategory();
    getAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTagKeyPress = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();

      setSubcategory((prevSubcategory) => ({
        ...prevSubcategory,
        tags: [...(prevSubcategory.tags || []), tagInput.trim()],
      }));
      setTagInput("");
      tagInputRef.current.focus();
    } else if (e.key === "Backspace" && tagInput === "") {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!subcategory.subcategory_name) {
      toast.warn("Please fill the boxes before submitting!");
      return;
    }

    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_SUB_CATEGORY,
        variables: {
          subcategoryId: splitIds[1],
          newCategoryId: subcategory.category,
          subcategory_name: subcategory.subcategory_name,
          tags: subcategory.tags,
        },
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
      });
      console.log(data);

      if (errors || data.updateSubcategory.code !== 200) {
        throw new Error(data.updateSubcategory.message);
      }

      console.log(data);
      toast.success("Updated Successfully!");

      router.push(`/all-sub-category`);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  console.log(subcategory);
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
                      <h4>Update Subcategory</h4>
                      <div className="form-group">
                        <div className="pl-0 mb-3 border">
                          <select
                            onChange={(e) =>
                              setSubcategory({
                                ...subcategory,
                                category: e.target.value,
                              })
                            }
                            value={subcategory?.category}
                            name="category"
                            id="category_id"
                            className="form-control"
                          >
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
