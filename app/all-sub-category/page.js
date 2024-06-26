"use client";
import { client } from "@/lib/apollo";
import { DELETE_SUBCATEGORY } from "@/lib/mutation";
import { toast } from "react-toastify";
import { GET_ALL_CATEGORY_FOR_TABLE } from "@/lib/query";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(null);
  let counter = 0;

  const openModal = (item) => setShowModal(item);
  const closeModal = () => setShowModal(null);

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

  const deleteSubcategory = async (e, id) => {
    e.preventDefault();
    try {
      const { data, errors } = await client.mutate({
        mutation: DELETE_SUBCATEGORY,
        variables: { id },
        fetchPolicy: "no-cache",
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
      });

      if (errors || data.deleteSubcategory.code !== 200) {
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
            <span className="udb-inst">Listing Sub Categories</span>
            <div className="ud-cen-s2 hcat-cho">
              <h2>All Listing Sub Categories</h2>
              <div className="ad-int-sear">
                <input
                  type="text"
                  id="pg-sear"
                  placeholder="Search this page.."
                />
              </div>
              <Link href="/add-new-sub-category" className="db-tit-btn">
                Add new sub category
              </Link>
              <table className="responsive-table bordered" id="pg-resu">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Sub Category Name</th>
                    <th>Main Category Name</th>
                    <th>Created date</th>
                    {/* <th>Listing</th> */}
                    <th>Tags</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat) => {
                    return cat.subcategories.map((sub, idx) => {
                      counter += 1;
                      return (
                        <tr key={`${sub._id}-${idx}`}>
                          <td>{counter}</td>
                          <td>
                            <b className="db-list-rat">
                              {sub.subcategory_name}
                            </b>
                          </td>
                          <td>
                            <b className="db-list-rat">{cat.category_name}</b>
                          </td>
                          <td>
                            {new Date(sub.createdAt).toLocaleDateString()}
                          </td>
                          {/* <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td> */}
                          <td>{sub.tags?.join(",")}</td>
                          <td>
                            <Link
                              href={`/all-sub-category/${cat._id}-${sub._id}`}
                              className="db-list-edit"
                            >
                              Edit
                            </Link>
                          </td>
                          <td className="relative">
                            <span
                              className="db-list-edit"
                              onClick={() => openModal(sub)}
                            >
                              Delete
                            </span>
                            {showModal && showModal._id === sub._id && (
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
                                          deleteSubcategory(e, sub._id)
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
                    });
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
