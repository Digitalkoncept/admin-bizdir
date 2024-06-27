"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";
import Link from "next/link";
import { client } from "@/lib/apollo";
import { GET_ALL_LISTING } from "@/lib/query";
import { DELETE_LISTING, UPDATE_LISTING } from "@/lib/mutation";

const Table = ({ page, handleTotalPages }) => {
  const PAGE_COUNT = 5;

  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState(null);
  const openModal = (item) => {
    setShowModal(item);
  };
  const closeModal = () => {
    setShowModal(null);
  };

  const getListingData = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_LISTING,
        variables: { type: "approved" },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllListings.code !== 200) {
        throw new Error("Something went wrong");
      }

      setListingData(data.getAllListings.listings);
      handleTotalPages(
        Math.ceil(data.getAllListings.listings.length / PAGE_COUNT)
      );
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getListingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const deleteListing = async (id) => {

    try {
      const { data, errors } = await client.mutate({
        mutation: DELETE_LISTING,
        variables: { _id: id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.deleteListing.code !== 200) {
        throw new Error("Something went wrong");
      }
      getListingData();
      setLoading(false);
      toast.success("Listing deleted successfully");
      console.log(data);
    } catch (error) {
      toast.error("something went wrong");
      console.error("Error submitting form:", error);
    }
  };

  const disableListing = async (id) => {

    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_LISTING,
        variables: { id, data: { listing_status: "Disabled" } },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.updateListing.code !== 200) {
        throw new Error("Something went wrong");
      }

      getListingData();
      toast.success("listing disabled successfully");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const enableListing = async (id) => {
    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_LISTING,
        variables: { id, data: { listing_status: "Enabled" } },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.updateListing.code !== 200) {
        throw new Error("Something went wrong");
      }

      getListingData();
      toast.success("listing enabled successfully");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  let end = page.current * PAGE_COUNT;
  let start = end - PAGE_COUNT;

  const paginatedListing = listingData.slice(start, end);

  return (
    <>
      {loading ? (
        <Skeleton count={5} />
      ) : (
        <table className="responsive-table bordered" id="pg-resu">
          <thead>
            <tr>
              <th>No</th>
              <th>Listing Name</th>
              <th>Views</th>
              <th>Created by</th>
              <th>Approved by</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Disable/Enable</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {paginatedListing.map((listing, idx) => {
              const inputDate = new Date(listing.createdAt);
              return (
                <tr key={listing._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <img src={listing.listing_image} alt="default image" />
                    {listing.listing_name}{" "}
                    <span>
                      {inputDate.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </span>
                  </td>
                  <td>
                    <span className="db-list-rat">
                      {listing.ratings?.$numberDecimal}
                    </span>
                  </td>
                  <td>
                    <span className="db-list-rat">{listing.views}</span>
                  </td>
                  <td>
                    <span className="db-list-ststus">
                      {listing.createdBy?.name || listing.user_name}
                    </span>
                  </td>
                  <td>
                    <span className="db-list-ststus">
                      {listing?.approval_by?.role}
                    </span>
                  </td>
                  <td>
                    <Link
                      href={`/update-listing/${listing._id}`}
                      className="db-list-edit"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="relative">
                    <span
                      className="db-list-edit"
                      onClick={() => openModal(listing)}
                    >
                      Delete
                    </span>
                    {showModal && showModal._id === listing._id && (
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
                                onClick={() => deleteListing(listing._id)}
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
                  <td
                    className={`${
                      listing.listing_status === "Enabled"
                        ? "!text-green-600"
                        : "!text-[#fd5b5b]"
                    }`}
                  >
                    {listing.listing_status}{" "}
                    {listing.listing_status === "Enabled" ? (
                      <span
                        className="db-list-edit"
                        onClick={() => disableListing(listing._id)}
                      >
                        Disable
                      </span>
                    ) : (
                      <>
                        <span
                          className="db-list-edit"
                          onClick={() => enableListing(listing._id)}
                        >
                          Enable
                        </span>
                      </>
                    )}
                  </td>
                  <td>
                    <Link
                      href={`/admin-all-listings/${listing._id}`}
                      className="db-list-edit"
                    >
                      Preview
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
