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

  const fetchEnquiries = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_ENQUIRY,
        fetchPolicy: "no-cache",
        variables : {enquiryType: "listing"}
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
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchEnquiries();
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

  const updateEnquiryStatus = async (id, status) => {
    try {
      console.log(session.jwt);
      const { data, errors } = await client.mutate({
        mutation: UPDATE_ENQUIRY_STATUS,
        variables: { id, status },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });
      console.log(data);
      if (errors || data.approveEnquiry.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Enquiry " + status + " and sent!");

      fetchEnquiries();
    } catch (error) {
      console.error("Error :", error);
    }
  };

  if (status === "loading") return <>Loading...</>;

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
                    <th>Listing</th>
                    <th>Delete</th>
                    <th>Send</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enquiry, idx) => {
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
                          {enquiry?.listing?.listing_name || ""}
                          {enquiry?.listing?.isClaimed === "unclaimed" &&
                            "(unclaimed)"}
                        </td>
                        <td>
                          <span
                            className="db-list-edit"
                            onClick={() => deleteEnquiry(enquiry._id)}
                          >
                            Delete
                          </span>
                        </td>
                        <td>
                          <>
                            {enquiry?.listing?.isClaimed === "unclaimed" ? (
                              <></>
                            ) : (
                              <>
                                {enquiry.approve_status === "pending" ? (
                                  <>
                                    <span
                                      className="db-list-edit"
                                      style={{
                                        // color: "green",
                                        // borderColor: "green",
                                        marginRight: "2px",
                                      }}
                                      onClick={() =>
                                        updateEnquiryStatus(
                                          enquiry._id,
                                          "approved"
                                        )
                                      }
                                    >
                                      Send
                                    </span>
                                    <span
                                      className="db-list-edit"
                                      // style={{ color: "red", borderColor: "red" }}
                                      onClick={() =>
                                        updateEnquiryStatus(
                                          enquiry._id,
                                          "rejected"
                                        )
                                      }
                                    >
                                      Reject
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <span
                                      title={`${enquiry.approve_status} by ${enquiry.approver?.role}`}
                                    >
                                      Enquiry {enquiry.approve_status}
                                    </span>
                                  </>
                                )}
                              </>
                            )}
                          </>
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
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
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
