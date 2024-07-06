"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GET_ALL_JOBS } from "@/lib/query";
import { client } from "@/lib/apollo";
import { DELETE_JOB, DELETE_ROLE } from "@/lib/mutation";

const page = () => {
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState();
  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState(null);

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

  const openModal = (item) => {
    setShowModal(item);
  };
  const closeModal = () => {
    setShowModal(null);
  };

  const getJobs = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_JOBS,
        fetchPolicy: "no-cache",
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllJobs.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setJobs(data.getAllJobs.jobs);
      handleTotalPages(Math.ceil(data.getAllJobs.jobs.length / PAGE_COUNT));
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const deleteJob = async (id) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: DELETE_JOB,
        variables: { id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.deleteJob.code !== 200) {
        throw new Error(data.deleteJob.message);
      }

      toast.success("Job deleted successfully");
      getJobs();
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  let end = page.current * PAGE_COUNT;
  let start = end - PAGE_COUNT;

  const paginatedJobs = jobs.slice(start, end);
  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">All Jobs</span>
            <div className="ud-cen-s2">
              <h2>All Jobs</h2>
              <Link href="/add-job" className="db-tit-btn">
                Add New Job
              </Link>
              {loading ? (
                <Skeleton count={4} />
              ) : (
                <>
                  <table className="responsive-table bordered">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Permissions</th>
                        <th>Update</th>
                        <th>Delete</th>
                        <th>Preview</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedJobs?.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item?.title}</td>
                          <td>{item?.description}</td>
                          <td>{item?.tasks.join(", ")}</td>
                          <td>
                            <Link
                              href={`/update-job/${item._id}`}
                              className="db-list-edit"
                            >
                              Update
                            </Link>
                          </td>
                          <td className="relative">
                            <span
                              className="db-list-edit"
                              onClick={() => openModal(item)}
                            >
                              Delete
                            </span>
                            {showModal && showModal._id === item._id && (
                              <div className="font-manrope flex   items-center justify-center absolute right-0 top-0 z-10">
                                <div className="mx-auto box-border w-[180px] border bg-white p-2">
                                  <div className="flex items-center justify-between relative">
                                    <button
                                      onClick={closeModal}
                                      type="button"
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
                                        type="button"
                                        onClick={() => deleteJob(item._id)}
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
                          <td>
                            <Link
                              href={`/all-jobs/${item._id}`}
                              className="db-list-edit"
                            >
                              Preview
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
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
