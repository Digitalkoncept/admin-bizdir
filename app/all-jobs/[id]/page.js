"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import DateFormatter from "@/components/DateFormatter";
import { client } from "@/lib/apollo";
import { GET_JOB_BY_ID } from "@/lib/query";

const page = ({ params }) => {
  const [loading, setLoading] = useState();
  const [job,setJob] = useState();
  const { data: session,status } = useSession();

  const getJobById = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_JOB_BY_ID,
        variables: { id: params.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getJobById.code !== 200) {
        throw new Error("Something went wrong");
      }

      const jobdata = await data.getJobById.job;
      setJob(jobdata);

    } catch (error) {
      console.error("something went wrong:", error);
    }
  };
  useEffect(() => {
    if(status=== 'authenticated'){
      getJobById();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

console.log('job by id =>',job)
  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Job Full Details</span>
            <div className="ud-cen-s2 ud-sp">
              <h2>Job details</h2>
              {/*<a href="admin-user-plan-change.html?row=*/}
              {/*"*/}
              {/*class="db-tit-btn db-tit-btn-1">Change plan</a>*/}
              <table className="responsive-table bordered">
                <tbody>
                  <tr>
                    <td>Job Title</td>
                    <td>{job?.title}</td>
                  </tr>
                  <tr>
                    <td>Job Description</td>
                    <td>{job?.description}</td>
                  </tr>

                  <tr>
                    <td>Job Category</td>
                    <td>
                      {job?.job_category}
                    </td>
                  </tr>

                  <tr>
                    <td>Job subcategory</td>
                    <td>{job?.job_subcategory}</td>
                  </tr>

                  <tr>
                    <td>Job permissions</td>
                    <td>{
                      job?.tasks.map((item,index) => (
                        <span key={index} className="db-list-ststus mx-1 ">{item}</span>
                      ))
                      }</td>
                  </tr>

                  <tr>
                    <td>Job Assign To</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>Created By</td>
                    <td></td>
                  </tr>

                  <tr>
                    <td>Created On</td>
                    <td>
                      
                    </td>
                  </tr>
                  <tr className="d-flex ">
                      <td colSpan="2">
                        <Link href={'/all-jobs'}>
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
