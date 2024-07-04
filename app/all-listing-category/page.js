"use client";
import { client } from "@/lib/apollo";
import { DELETE_CATEGORY } from "@/lib/mutation";
import { GET_ALL_CATEGORY_FOR_TABLE } from "@/lib/query";
import { CldImage } from "next-cloudinary";
import { toast } from "react-toastify";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(null);
  const openModal = (item) => {
    setShowModal(item);
  };
  const closeModal = () => {
    setShowModal(null);
  };

  const getCategories = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_CATEGORY_FOR_TABLE,
        fetchPolicy: "no-cache",
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
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

  // const filterCategories = (text) => {
  //   let collection = {
  //     categories: [],
  //     subcategories: [],
  //     tags: [],
  //   };

  //   for (let cat of categories) {
  //     if (cat.category_name) collection.categories.push(cat.category_name);

  //     if (cat.subcategories) {
  //       for (let sub of cat.subcategories) {
  //         if (sub.subcategory_name)
  //           collection.subcategories.push(sub.subcategory_name);

  //         if (sub.tags) {
  //           for (let tag of sub.tags) {
  //             collection.tags.push(tag);
  //           }
  //         }
  //       }
  //     }
  //   }

  //   for (let [key, value] of Object.entries(collection)) {

  //   }
  // };

  const deleteCategory = async (e, id) => {
    e.preventDefault();
    try {
      const { data, errors } = await client.mutate({
        mutation: DELETE_CATEGORY,
        variables: { id },
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
      });

      if (errors || data.deleteCategory.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Subcategory deleted successfully!");
      getCategories();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Listing Category</span>
            <div className="ud-cen-s2 hcat-cho">
              <h2>All Listing Category</h2>
              <div className="ad-int-sear">
                <input
                  type="text"
                  id="pg-sear"
                  placeholder="Search this page.."
                />
              </div>
              <Link href="/add-new-category" className="db-tit-btn">
                Add New Category
              </Link>
              <table className="responsive-table bordered" id="pg-resu">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Category Name</th>
                    <th>Category Image</th>
                    <th>Created date</th>
                    {/* <th>Listing</th> */}
                    <th>Sub Category</th>
                    <th>Edit</th>
                    {/* <th>View Sub Cate</th> */}
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat, idx) => {
                    return (
                      <tr key={cat._id}>
                        <td>{idx + 1}</td>
                        <td>
                          <b className="db-list-rat">{cat.category_name}</b>
                        </td>
                        <td>
                          {cat.image ? (
                            <CldImage
                              width="75"
                              height="75"
                              src={cat?.image}
                              alt="Description of my image"
                            />
                          ) : (
                            <img src="/cat-default.png" alt="" />
                          )}
                        </td>
                        <td>{new Date(cat.createdAt).toLocaleDateString()}</td>
                        {/* <td>
                          <span
                            className="db-list-ststus"
                            data-toggle="tooltip"
                            title="Total listings in this category"
                          >
                            4
                          </span>
                        </td> */}
                        <td>
                          <span className="db-list-ststus">
                            {cat?.subcategories?.length}
                          </span>
                        </td>
                        <td>
                          <Link
                            href={`/all-category/${cat._id}`}
                            className="db-list-edit"
                          >
                            Edit
                          </Link>
                        </td>
                        {/* <td>
                          <a
                            href="admin-all-sub-category.html?cat=19"
                            className="db-list-edit"
                          >
                            View
                          </a>
                        </td> */}
                        <td className="relative">
                          <span
                            onClick={() => openModal(cat)}
                            className="db-list-edit"
                          >
                            Delete
                          </span>
                          {showModal && showModal._id === cat._id && (
                            <div className="font-manrope flex   items-center justify-center absolute right-0 top-0 z-10">
                              <div className="mx-auto box-border w-[180px] border bg-white p-2">
                                <div className="flex items-center justify-between relative">
                                  <button
                                    onClick={closeModal}
                                    className="cursor-pointer border rounded-[4px] absolute right-0"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-[15px] w-[15px] text-[#64748B]"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                  </button>
                                </div>
                                <form id="approvalForm">
                                  <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-900 text-center "
                                  >
                                    you want to delete this listing
                                  </label>
                                  <div className="my-2 flex  justify-around ">
                                    <button
                                      onClick={closeModal}
                                      className="w-[50px] cursor-pointer rounded-[4px] bg-green-700 px-1 py-[6px] text-center font-base text-xs text-white"
                                    >
                                      close
                                    </button>
                                    <button
                                      onClick={(e) =>
                                        deleteCategory(e, cat._id)
                                      }
                                      className="w-[50px] cursor-pointer rounded-[4px] bg-red-700 px-1 py-[6px] text-center font-base text-xs text-white"
                                    >
                                      delete
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
