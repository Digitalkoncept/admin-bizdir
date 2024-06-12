"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Approve_Modal from "@/components/Admin/Approve_Modal";
import { client } from "@/lib/apollo";
import { GET_ALL_CLAIMS } from "@/lib/query";
import { APPROVE_CLAIM_STATUS, DELETE_CLAIM } from "@/lib/mutation";
import { CldImage } from "next-cloudinary";
import { toast } from "react-toastify";

const Table = ({ page, handleTotalPages }) => {
  const PAGE_COUNT = 5;

  const [claimData, setClaimData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState(null);
  const [message, setMessage] = useState("");
  const [approvalStatus, setApprovalStatus] = useState("pending");

  const openModal = (item) => {
    setShowModal(item);
  };
  const closeModal = () => {
    setShowModal(null);
  };
  const getClaimRequests = async () => {
    // try {
    //   setLoading(true);
    //   const res = await fetch(
    //     process.env.BACKEND_URL + "/api/listing/?type=pending",
    //     {
    //       headers: {
    //         authorization: "Bearer " + session.jwt,
    //       },
    //     }
    //   );

    //   const data = await res.json();

    //   setListingData(data);
    //   handleTotalPages(Math.ceil(data.length / PAGE_COUNT));

    //   setLoading(false);
    // } catch (error) {
    //   console.error(error);
    // }

    try {
      const { data, errors } = await client.query({
        query: GET_ALL_CLAIMS,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllClaims.code !== 200) {
        throw new Error("Something went wrong");
      }

      const claimsList = data.getAllClaims.claims;
      setClaimData(claimsList);
      handleTotalPages(Math.ceil(claimsList.length / PAGE_COUNT));
      setLoading(false);
      console.log(claimsList);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getClaimRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const handleApprove = async (e, id) => {
    e.preventDefault();
    setApprovalStatus("approved");
    setShowModal(false);
    // try {
    //   const res = await fetch(
    //     process.env.BACKEND_URL + "/api/listing/approve_status/" + id,
    //     {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + session.jwt,
    //       },
    //       body: JSON.stringify({ message, approvalStatus: "approved" }),
    //     }
    //   );
    //   getClaimRequests();
    //   setMessage("");
    //   setApprovalStatus("pending");
    // } catch (error) {
    //   console.error(error);
    // }
    try {
      const { data, errors } = await client.mutate({
        mutation: APPROVE_CLAIM_STATUS,
        variables: {
          claimId: id,
          claimMessage: message,
          claimStatus: "approved",
        },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.claimListing.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Listing got approved!!");
      await getClaimRequests();
      setMessage("");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleReject = async (e, id) => {
    e.preventDefault();
    setShowModal(false);
    setApprovalStatus("rejected");
    // try {
    //   const res = await fetch(
    //     process.env.BACKEND_URL + "/api/listing/approve_status/" + id,
    //     {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + session.jwt,
    //       },
    //       body: JSON.stringify({ message, approvalStatus: "rejected" }),
    //     }
    //   );
    //   getClaimRequests();
    //   setMessage("");
    //   setApprovalStatus("pending");
    // } catch (error) {
    //   console.error(error);
    // }

    try {
      const { data, errors } = await client.mutate({
        mutation: APPROVE_CLAIM_STATUS,
        variables: {
          claimId: id,
          claimMessage: message,
          claimStatus: "rejected",
        },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.claimListing.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Listing got rejected!!");
      await getClaimRequests();
      setMessage("");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClaimDelete = async (id) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: DELETE_CLAIM,
        variables: { id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.deleteClaim.code !== 200) {
        throw new Error("Something went wrong");
      }

      getClaimRequests()
      toast.success("Claim deleted successfully");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  if (loading) return <>Loading</>;

  let end = page.current * PAGE_COUNT;
  let start = end - PAGE_COUNT;

  const paginatedClaims = claimData.slice(start, end);

  return (
    <table className="responsive-table bordered" id="pg-resu">
      <thead>
        <tr>
          <th>No</th>
          <th>Listing Name</th>
          <th>Enquirer Name</th>
          <th>Enquirer Mobile</th>
          <th>Enquirer Email Id</th>
          <th>Verification Image</th>
          <th>Enquirer Message</th>
          <th>Enquiry Date</th>
          <th>Status</th>
          <th>Approve</th>
          <th>Delete</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {paginatedClaims.map((claim, idx) => {
          const claimDate = new Date(parseInt(claim.createdAt));
          const listingDate = new Date(parseInt(claim.listing_date));
          return (
            <tr key={claim._id}>
              <td>{idx + 1}</td>
              <td>
                {/* add the listing image and the listing creation date here */}
                <img src={claim?.listing_image} alt="default image" />
                {claim.listing_name}
                <span>
                  {listingDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </span>
              </td>
              <td>
                <span>{claim.name}</span>
              </td>
              <td>
                <span>{claim.phone_number}</span>
              </td>
              <td>
                <span>{claim.email}</span>
              </td>

              <td>
                <span>
                  {claim?.verification_image && (
                    <CldImage
                      width="36"
                      height="36"
                      src={claim?.verification_image}
                      alt="Description of my image"
                      className="rounded-[50%] w-[36px] h-[36px]"
                    />
                  )}
                </span>
              </td>
              <td>
                <span>{claim.description}</span>
              </td>
              <td>
                <span>
                  {claimDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </span>
              </td>
              <td>
                <span className="db-list-rat">{claim.claim_status}</span>
              </td>

              <td className="relative">
                {claim.approval}
                <button
                  onClick={() => openModal(claim)}
                  className="db-list-edit ml-2"
                  disabled={claim.status === "approved" ? "true" : false}
                >
                  Update
                </button>
                {showModal && showModal._id === claim._id && (
                  <div className="font-manrope flex   items-center justify-center absolute right-0 top-0 z-10">
                    <div className="mx-auto box-border w-[250px] border bg-white p-2">
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
                        <div className="my-2 flex flex-col justify-between space-y-2">
                          <div className="col-span-2">
                            <label
                              htmlFor="description"
                              className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                              Message
                            </label>
                            <textarea
                              id="description"
                              rows={4}
                              name="message"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   "
                              placeholder="write a description here"
                            />
                          </div>
                          <div className="flex">
                            {" "}
                            <button
                              onClick={(e) => handleApprove(e, claim._id)}
                              className="w-4/2 cursor-pointer rounded-[4px] bg-green-700 px-3 py-[6px] text-center font-base text-xs text-white"
                            >
                              Approve
                            </button>
                            <button
                              onClick={(e) => handleReject(e, claim._id)}
                              className="w-4/2 cursor-pointer rounded-[4px] bg-red-700 px-3 py-[6px] text-center font-base text-xs text-white"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {/* <button onClick={() =>openModal(claim)} className="db-list-edit" disabled={claim.status === 'approved'?'true':false}>update</button> */}
              </td>

              <td>
                <span
                  // href={`#!`}
                  onClick={() => handleClaimDelete(claim._id)}
                  className="db-list-edit"
                >
                  Delete
                </span>
              </td>
              <td>
                <Link
                  href={
                    process.env.NEXT_PUBLIC_FRONTEND_URL +
                    `all-listing/${claim._id}`
                  }
                  target="_blank"
                  className="db-list-edit"
                >
                  Preview
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
      {/* <Approve_Modal closeModal={closeModal} /> */}
    </table>
  );
};

export default Table;
