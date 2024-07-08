"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import DateFormatter from "@/components/DateFormatter";
import { client } from "@/lib/apollo";
import { GET_ENQUIRY_BY_ID, GET_JOB_BY_ID } from "@/lib/query";

const page = ({ params }) => {
  const [loading, setLoading] = useState();
  const [enquiry,setEnquiry] = useState(null);
  const { data: session,status } = useSession();

  const getEnquiry = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ENQUIRY_BY_ID,
        fetchPolicy:'no-cache',
        variables: { id: params.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getEnquiry.code !== 200) {
        throw new Error("Something went wrong");
      }

      const {enquiry} = await data.getEnquiry;
      setEnquiry(enquiry);

    } catch (error) {
      console.error("something went wrong:", error);
    }
  };
  useEffect(() => {
    if(status=== 'authenticated'){
      getEnquiry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

console.log('enquiry by id =>',enquiry)
  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Enquiry Detail</span>
            <div className="ud-cen-s2 ud-sp">
              <h2>Enquiry details</h2>
              {/*<a href="admin-user-plan-change.html?row=*/}
              {/*"*/}
              {/*class="db-tit-btn db-tit-btn-1">Change plan</a>*/}
              <table className="responsive-table bordered">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{enquiry?.enquirer_name}</td>
                  </tr>
                  <tr>
                    <td>email</td>
                    <td>{enquiry?.enquirer_email}</td>
                  </tr>

                  <tr>
                    <td>Phone Number</td>
                    <td>
                      {enquiry?.enquirer_mobile}
                    </td>
                  </tr>

                  <tr>
                    <td>Message</td>
                    <td>{enquiry?.message}</td>
                  </tr>

                  <tr className="d-flex ">
                      <td colSpan="2">
                        <Link href={'/company-enquiry'}>
                        <button
                          type="button"
                          name="setting_submit"
                          className="db-pro-bot-btn w-[88px]"
                        >
                          Close
                        </button>
                        </Link>
                      </td>
                   
                    </tr>
                </tbody>
              </table>
              {/* <div className="ud-notes">
                <p>
                  <b>Notes about this listing:</b>
                  <span>
                    Click here to write short notes or conversation with this
                    user.(Ex: I spoke him to discuss about advantage of Premium
                    Plan on April 12th 2020.)
                  </span>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
