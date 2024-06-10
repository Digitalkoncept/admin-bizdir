"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DateFormatter from "@/components/DateFormatter";

import { MutatingDots } from "react-loader-spinner";
import { client } from "@/lib/apollo";
import { GET_ALL_USERS } from "@/lib/query";
import { UPDATE_USER } from "@/lib/mutation";

const page = () => {
  const PAGE_COUNT = 5;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
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
    setPage((prevState) => ({
      ...prevState,
      totalPages: number,
    }));
  };

  const getUsers = async () => {
    // try {
    //   setLoading(true);
    //   const res = await fetch(process.env.BACKEND_URL + "/api/user/all", {
    //     headers: {
    //       authorization: "Bearer " + session.jwt,
    //     },
    //   });

    //   const data = await res.json();
    //   console.log(data);
    //   setUsers(data);

    //   handleTotalPages(Math.ceil(data.length / PAGE_COUNT));
    //   setLoading(false);
    // } catch (error) {
    //   console.error(error);
    // }

    try {
      const { data, errors } = await client.query({
        query: GET_ALL_USERS,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllUsers.code !== 200) {
        throw new Error("Something went wrong");
      }

      
      const usersList = data.getAllUsers.users;
      console.log(usersList)
      setUsers(usersList);

      handleTotalPages(Math.ceil(usersList.length / PAGE_COUNT));
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const disableUser = async (id, name) => {
    // try {
    //   const res = await fetch(process.env.BACKEND_URL + `/api/user/${id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //       authorization: "Bearer " + session.jwt,
    //     },
    //     body: JSON.stringify({ user_status: "Disabled" }),
    //   });

    //   if (res.status === 200) {
    //     const data = await res.json();
    //     getUsers();
    //     toast.success(name + ": Disabled Successfully!");
    //   } else {
    //     console.error("Failed to disable user");
    //     // Handle error
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_USER,
        variables: { id, data: { user_status: "Disabled" } },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.updateUser.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("User Disabled successfully");
      getUsers();
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const enableUser = async (id, name) => {
    // try {
    //   const res = await fetch(process.env.BACKEND_URL + `/api/user/${id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //       authorization: "Bearer " + session.jwt,
    //     },
    //     body: JSON.stringify({ user_status: "Active" }),
    //   });

    //   if (res.status === 200) {
    //     const data = await res.json();
    //     getUsers();
    //     toast.success(name + ": Enabled Successfully");
    //   } else {
    //     console.error("Failed to enable user");
    //     // Handle error
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_USER,
        variables: { id, data: { user_status: "Enabled" } },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.updateUser.code !== 200) {
        throw new Error("Something went wrong");
      }

      getUsers();
      toast.success("User Enabled successfully");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  let end = page.current * PAGE_COUNT;
  let start = end - PAGE_COUNT;

  const paginatedUser = users.slice(start, end);

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">All User Details</span>
            <div className="ud-cen-s2">
              <h2>All Users - {users.length}</h2>
              <div className="ad-int-sear">
                <input
                  type="text"
                  id="pg-sear"
                  placeholder="Search this page.."
                />
              </div>
              {loading ? (
                <Skeleton count={5} />
              ) : (
                <>
                  <table className="responsive-table bordered" id="pg-resu">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Plan type</th>
                        <th>Update Status</th>
                        <th>Preview</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedUser?.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>
                            <img src={item?.profile_image} alt="" />
                            {item.name}
                            <DateFormatter dateString={item.createdAt} />
                          </td>
                          <td>{item.email}</td>
                          <td>
                            <span className="db-list-rat">
                              {item?.subscription?.user_plan}
                            </span>
                          </td>
                          <td
                            className={`${
                              item.user_status === "Active" ||
                              item.user_status === "Inactive"
                                ? "!text-green-600"
                                : "!text-[#fd5b5b]"
                            }`}
                          >
                            {item.user_status}{" "}
                            {item.user_status === "Active" ||
                            item.user_status === "Inactive" ? (
                              <span
                                className="db-list-edit"
                                onClick={() => disableUser(item._id, item.name)}
                              >
                                Disable
                              </span>
                            ) : (
                              <>
                                <span
                                  className="db-list-edit"
                                  onClick={() =>
                                    enableUser(item._id, item.name)
                                  }
                                >
                                  Enable
                                </span>
                                <span className="w-12 h-12 bg-red-400 rounded-full"></span>
                              </>
                            )}
                          </td>
                          <td>
                            <Link
                              href={`/all-users/${item._id}`}
                              className="db-list-edit"
                            >
                              Preview
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                      {Array(page.totalPages)
                        .fill(0)
                        .map((_, idx) => {
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
