"use client";
import { client } from "@/lib/apollo";
import { DELETE_ENQUIRY, UPDATE_ENQUIRY_STATUS } from "@/lib/mutation";
import { GET_ALL_ENQUIRY } from "@/lib/query";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [enquiries, setEnquiries] = useState([]);
  const { data: session, status } = useSession();
  // const searchParams = useSearchParams();

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

  const fetchEnquiries = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_ENQUIRY,
        fetchPolicy: "no-cache",
        variables: { enquiryType: "internal" },
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
      });

      if (errors || data.getAllEnquiry.code !== 200) {
        throw new Error("Something went wrong");
      }

      setEnquiries(data.getAllEnquiry.enquiries);
      console.log(data);
      handleTotalPages(
        Math.ceil(data.getAllEnquiry.enquiries.length / PAGE_COUNT)
      );
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const deleteEnquiry = async (id) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: DELETE_ENQUIRY,
        variables: { id },
        // context: {
        //   headers: {
        //     Authorization: `Bearer ${session.jwt}`,
        //   },
        // },
      });

      if (errors || data.deleteEnquiry.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Enquiry deleted successfully");

      console.log(data);
      fetchEnquiries();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (status === "loading") return <>Loading...</>;

  let end = page.current * PAGE_COUNT;
  let start = end - PAGE_COUNT;

  const paginatedEnquiry = enquiries.slice(start, end);
  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Listing Enquiry</span>
            <div className="ud-cen-s2">
              <h2>Enquiry Details</h2>
              <div className="ad-int-sear">
                <input
                  type="text"
                  id="pg-sear"
                  placeholder="Search this page.."
                />
              </div>
              <table
                className="responsive-table bordered tb-bold-dis"
                id="pg-resu"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedEnquiry.map((enquiry, idx) => {
                    const date = new Date(enquiry.createdAt);
                    return (
                      <tr
                        key={enquiry._id}
                        // style={{
                        //   background: !enquiry.user_id
                        //     ? "linear-gradient(to right, #ff00004d, white)"
                        //     : "",
                        //     borderRadius: "8px"
                        // }}
                      >
                        <td>{idx + 1}</td>
                        <td>
                          {enquiry.enquirer_name}
                          <span>
                            {date.toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                        </td>
                        <td>{enquiry.enquirer_email}</td>
                        <td>{enquiry.enquirer_mobile}</td>
                        <td>{enquiry.message}</td>
                        <td>
                          <span
                            className="db-list-edit"
                            onClick={() => deleteEnquiry(enquiry._id)}
                          >
                            Delete
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
