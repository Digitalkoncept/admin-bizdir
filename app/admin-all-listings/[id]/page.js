"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import DateFormatter from "@/components/DateFormatter";

const page = ({ params }) => {
  const [listing, setListing] = useState();
  const [loading, setLoading] = useState();
  const { data: session } = useSession();

  const getListing = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        process.env.BACKEND_URL + `/api/listing/${params.id}`,
        {
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );

      const data = await res.json();
      setListing(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);


  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Listing Full Details</span>
            <div className="ud-cen-s2 ud-sp">
              <h2>Listing details</h2>
              {/*<a href="admin-user-plan-change.html?row=*/}
              {/*"*/}
              {/*class="db-tit-btn db-tit-btn-1">Change plan</a>*/}
              <table className="responsive-table bordered">
                <tbody>
                  <tr>
                    <td>Listing Name</td>
                    <td>{listing?.listing_name}</td>
                  </tr>
                  <tr>
                    <td>Created By</td>
                    <td>{listing?.user_name}</td>
                  </tr>

                  <tr>
                    <td>Profile picture</td>
                    <td>
                      <img src={listing?.listing_image} alt="" />
                    </td>
                  </tr>

                  <tr>
                    <td>Listing Email</td>
                    <td>{listing?.email}</td>
                  </tr>

                  <tr>
                    <td>Listing Phone Number</td>
                    <td>{listing?.phone_number}</td>
                  </tr>

                  <tr>
                    <td>Status</td>
                    <td>{listing?.listing_status}</td>
                  </tr>

                  <tr>
                    <td>Description</td>
                    <td>{listing?.listing_detail}</td>
                  </tr>

                  <tr>
                    <td>Listing Category</td>
                    <td>
                      <span>{listing?.category}</span>
                      <small>{[listing?.subcategory]}</small>
                    </td>
                  </tr>
                  <tr>
                    <td>Created On</td>
                    <td>
                      <DateFormatter dateString={listing?.createdAt} />
                    </td>
                  </tr>

                  <tr>
                    <td>Address</td>
                    <td>{listing?.listing_address}</td>
                  </tr>

                  <tr>
                    <td>Verified</td>
                    <td>{listing?.approval}</td>
                  </tr>

                  <tr>
                    <td>Profile link</td>
                    <td>
                      <a href="http://localhost/directory/bizbook/profile/dany">
                        http://localhost/directory/bizbook/profile/dany
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>Service Location</td>
                    <td>{[listing?.service_location]}</td>
                  </tr>

                  <tr>
                    <td>Service Provided</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>Ratings</td>
                    <td>{listing?.ratings?.$numberDecimal} star</td>
                  </tr>
                  <tr>
                    <td>Total views</td>
                    <td>{listing?.views}</td>
                  </tr>
                  <tr>
                    <td>
                      <Link href="/all-users" className="db-pro-bot-btn">
                        close
                      </Link>
                    </td>
                    <td />
                  </tr>
                </tbody>
              </table>
              <div className="ud-notes">
                <p>
                  <b>Notes about this listing:</b>
                  <span>
                    Click here to write short notes or conversation with this
                    user.(Ex: I spoke him to discuss about advantage of Premium
                    Plan on April 12th 2020.)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
