"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Table = () => {
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  console.log(session);
  const getListingData = async () => {
    try {
      setLoading(true);
      console.log("inside getlisting", session.jwt);
      const res = await fetch(
        process.env.BACKEND_URL + "/api/listing",
        {
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );

      const data = await res.json();

      console.log(data);
      setListingData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getListingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const deleteListing = async (id) => {
    try {
      const res = await fetch(process.env.BACKEND_URL + "/api/listing/" + id, {
        headers: {
          authorization: "Bearer " + session.jwt,
        },
        method: "DELETE",
      });

      if (res.status === 204) {
        // Call getListingData to update the listing data
        getListingData();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const approveListing = async (id) => {
    try {
      const res = await fetch(
        process.env.BACKEND_URL + "/api/listing/approve/" + id,
        {
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );
      getListingData();
    } catch (error) {
      console.error(error);
    }
  };

  const rejectListing = async (id) => {
    try {
      const res = await fetch(
        process.env.BACKEND_URL + "/api/listing/reject/" + id,
        {
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );
      getListingData();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <>Loading</>;

  console.log(listingData);
  return (
    <table className="responsive-table bordered" id="pg-resu">
      <thead>
        <tr>
          <th>No</th>
          <th>Listing Name</th>
          <th>Rating</th>
          <th>Views</th>
          <th>Created by</th>
          {/*<th>Promote</th>*/}
          {/* <th>Approve</th> */}
          <th>Delete</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {listingData.map((listing, idx) => {
          const inputDate = new Date(listing.createdAt);
          return (
            <tr key={listing._id}>
              <td>{idx + 1}</td>
              <td>
                <img src="../images/listings/82551rn53.png" alt="" />
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
                  {listing.ratings.$numberDecimal}
                </span>
              </td>
              <td>
                <span className="db-list-rat">{listing.views}</span>
              </td>
              <td>
                <a
                  href="http://localhost/directory/bizbook/profile/rn53-themes"
                  className="db-list-ststus"
                  target="_blank"
                >
                  Rn53 Themes
                </a>
              </td>
              {/* <td>
                <Link
                  href=""
                  className="db-list-edit"
                  onClick={() => approveListing(listing._id)}
                >
                  Approve
                </Link>

                <Link
                  href=""
                  className="db-list-edit"
                  onClick={() => rejectListing(listing._id)}
                >
                  Reject
                </Link>
              </td> */}
              <td>
                <a
                  href="admin-delete-listings.html?code=LIST396"
                  className="db-list-edit"
                >
                  Delete
                </a>
              </td>
              <td>
                <a
                  href="http://localhost/directory/bizbook/listing/qwerqw"
                  className="db-list-edit"
                  target="_blank"
                >
                  Preview
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
