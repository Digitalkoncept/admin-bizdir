"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GET_ALL_ROLES } from "@/lib/query";
import { client } from "@/lib/apollo";
import { DELETE_ROLE } from "@/lib/mutation";
const page = () => {
  const [roles, setRoles] = useState();
  const [loading, setLoading] = useState();
  const { data: session, status } = useSession();
  const PAGE_COUNT = 5;

  const [page, setPage] = useState({
    totalPages: 1,
    current: 1,
  });

  const handlePageNumber = (number) => {
    if (number >= 1 && number <= page.totalPages) {
      setPage((prevState) => ({
        ...prevState,
        current: number,
      }));
    }
  };

  const handleTotalPages = (number) => {
    setPage((prevState) => {
      const currentPage = Math.min(prevState.current, number);
      return {
        ...prevState,
        totalPages: number,
        current: currentPage,
      };
    });
  };

  const getRoles = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_ROLES,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllRoles.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setRoles(data.getAllRoles.roles);
      handleTotalPages(
        Math.ceil(data.getAllRoles.roles.length / PAGE_COUNT)
      );
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const deleteRole = async (id) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: DELETE_ROLE,
        variables: { id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.deleteRole.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Role created successfully");
      getRoles();
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  let end = page.current * PAGE_COUNT;
  let start = end - PAGE_COUNT;

  const paginatedRoles = roles.slice(start, end);

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">All Roles</span>
            <div className="ud-cen-s2">
              <h2>All Roles</h2>
              <Link href="/create-role" className="db-tit-btn">
                Add new Role
              </Link>
              {loading ? (
                <Skeleton count={4} />
              ) : (
                <table className="responsive-table bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Permissions</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedRoles?.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item?.role_name}</td>
                        <td>{item?.description}</td>
                        <td>{item?.permissions.join(", ")}</td>
                        <td>
                          <Link
                            href={`/all-roles/${item._id}`}
                            className="db-list-edit"
                          >
                            Update
                          </Link>
                        </td>
                        <td>
                          <Link
                            href="#!"
                            className="db-list-edit"
                            onClick={() => deleteRole(item._id)}
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          <div className="ad-pgnat">
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageNumber(page.current - 1)}
                >
                  Previous
                </a>
              </li>

              {Array.from({ length: page.totalPages }, (_, idx) => {
                const currentPage = idx + 1;
                return (
                  <li
                    className={`page-item ${
                      page.current === currentPage ? "active" : ""
                    }`}
                    key={idx}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => handlePageNumber(currentPage)}
                    >
                      {currentPage}
                    </a>
                  </li>
                );
              })}
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageNumber(page.current + 1)}
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
