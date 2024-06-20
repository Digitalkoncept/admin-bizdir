"use client";
import { client } from "@/lib/apollo";
import { GET_ALL_CATEGORY_FOR_TABLE } from "@/lib/query";
import React, { useEffect, useState } from "react";

const page = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_CATEGORY_FOR_TABLE,
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
              <a href="admin-add-new-category.html" className="db-tit-btn">
                Add New Listing Category
              </a>
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
                            <img
                              src="../images/services/48466ser4.jpg"
                              alt=""
                            />
                          ) : (
                            "Image not available"
                          )}
                        </td>
                        <td>{cat.createdAt}</td>
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
                          <a
                            href="admin-category-edit.html?row=19"
                            className="db-list-edit"
                          >
                            Edit
                          </a>
                        </td>
                        {/* <td>
                          <a
                            href="admin-all-sub-category.html?cat=19"
                            className="db-list-edit"
                          >
                            View
                          </a>
                        </td> */}
                        <td>
                          <a
                            href="admin-category-delete.html?row=19"
                            className="db-list-edit"
                          >
                            Delete
                          </a>
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
