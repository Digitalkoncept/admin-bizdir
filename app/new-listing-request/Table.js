"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Approve_Modal from "@/components/Admin/Approve_Modal";

const Table = () => {
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  const [showModal,setShowModal] = useState(null);
  const [message,setMessage] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('pending');

  const openModal = (item) => {
    setShowModal(item);
  };
  const closeModal = () =>{
    setShowModal(null);
  }
  console.log(session);
  const getListingData = async () => {
    try {
      setLoading(true);
      console.log("inside getlisting", session.jwt);
      const res = await fetch(
        process.env.BACKEND_URL + "/api/listing/?pending_listing=true",
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

  

  

 
  const handleApprove = async (e, id) => {
    e.preventDefault();
    setApprovalStatus('approved');
    setShowModal(false);
    try {
      const res = await fetch(
        process.env.BACKEND_URL + "/api/listing/approve_status/" + id,
        {
          method:'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + session.jwt,
          },
          body: JSON.stringify({ message, approvalStatus: 'approved' }),
        }
      );
      console.log(res);
      getListingData(); // Assuming this function fetches the updated listing data
      setMessage(''); // Reset message
      setApprovalStatus('pending'); // Reset approval status
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleReject = async (e, id) => {
    e.preventDefault();
    setShowModal(false);
    setApprovalStatus('rejected');
    try {
      const res = await fetch(
        process.env.BACKEND_URL + "/api/listing/approve_status/" + id,
        {
          method:'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + session.jwt,
          },
          body: JSON.stringify({ message, approvalStatus: 'rejected' }),
        }
      );
      console.log(res);
      getListingData(); // Assuming this function fetches the updated listing data
      setMessage(''); // Reset message
      setApprovalStatus('pending'); // Reset approval status
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
          <th>Status</th>
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
                  {listing.user_name}
                </a>
              </td>
              <td>
              <td className="relative" >{listing.approval} 
               <button onClick={() =>openModal(listing)} className="db-list-edit ml-2" disabled={listing.status === 'approved'?'true':false}>update </button>
                  {showModal && showModal._id === listing._id && (

                      <div className="font-manrope flex   items-center justify-center absolute right-0 top-0 z-10">
                      <div className="mx-auto box-border w-[250px] border bg-white p-2">
                        <div className="flex items-center justify-between relative">
                        
                          <button onClick={closeModal} className="cursor-pointer border rounded-[4px] absolute right-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[15px] w-[15px] text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <form id="approvalForm" >
                        <div className="my-2 flex flex-col justify-between space-y-2">
                        <div className="col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Message</label>
                  <textarea id="description" rows={4} name="message" value={message} onChange={(e) => setMessage(e.target.value)}   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   " placeholder="write a description here"  />                    
                </div>
                          <button onClick={(e)=>handleApprove(e,listing._id)} className="w-4/2 cursor-pointer rounded-[4px] bg-green-700 px-3 py-[6px] text-center font-base text-xs text-white">Approve</button>
                          <button onClick={(e)=> handleReject(e,listing._id)} className="w-4/2 cursor-pointer rounded-[4px] bg-red-700 px-3 py-[6px] text-center font-base text-xs text-white">Reject</button>
                        </div>
                        </form>
                      </div>
                    </div>
                )}
                {/* <button onClick={() =>openModal(listing)} className="db-list-edit" disabled={listing.status === 'approved'?'true':false}>update</button> */}
                

              </td>
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
      {/* <Approve_Modal closeModal={closeModal} /> */}
    </table>
  );
};

export default Table;
