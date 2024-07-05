"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {  GET_ALL_EMP_ASSIGNED_JOB } from "@/lib/query";
import { client } from "@/lib/apollo";
import { DELETE_ROLE, REMOVE_EMP_JOB } from "@/lib/mutation";
import DateFormatter from "@/components/DateFormatter";
const page = () => {
  const [tasks, setTasks] = useState();
  const [jobid,setJobId] = useState();
  const [loading, setLoading] = useState();
  const { data: session, status } = useSession();
  const [showModal, setShowModal] = useState(null);
  const openModal = (item) => {
    setShowModal(item);
  };
  const closeModal = () => {
    setShowModal(null);
  };
console.log("job id is =>",jobid)
  const getEmpJobs = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_EMP_ASSIGNED_JOB,
        fetchPolicy:'no-cache',
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getJobAssignedEmployee.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setTasks(data.getJobAssignedEmployee.employees);
    } catch (error) {
      console.error("something went wrong:", error);
    }
  };
  useEffect(() => {
    if (status === "authenticated") getEmpJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  console.log("all tasks fatched =>",tasks)
  const removeJob = async (jobId,employeeId) => {
 
    try {
      const { data, errors } = await client.mutate({
        mutation: REMOVE_EMP_JOB,
        variables: { employeeId,jobId },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.removeJob.code !== 200) {
        throw new Error(data.removeJob.message);
      }

      toast.success("job removed successfully.");
      getEmpJobs();
    } catch (error) {
      console.error("something went wrong:", error.message);
    }
  };

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">All Assigned Jobs</span>
            <div className="ud-cen-s2">
              <h2>All Assigned Jobs</h2>
              <Link href="/create-role" className="db-tit-btn">
                Add new Role
              </Link>
              {loading ? (
                <Skeleton count={4} />
              ) : (
                <table className="responsive-table bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>profile</th>
                      <th>Title</th>
                      <th>Assigned By</th>
                      <th>Assigned On</th>
                      <th>Remove Job</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks?.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>
                          <CldImage
                            width="36"
                            height="36"
                            src={item.image}
                            alt="Description of my image"
                          />
                          {item.name}
                        </td>
                        <td>
                          {
                            item?.job.map((item,index) =>(
                            <Link href={`/all-jobs/${item.assigned_job._id}`}> <span>{index +1}. {item.assigned_job.title} <br/> </span>  </Link>
                            ))
                          }
                         </td>
                        <td>{
                          item?.job.map((item,index)=> (
                            <>{index +1}. {item.assignedBy.name} <br/></>
                          ))}</td>
                        <td>
                          {item?.job.map((item,index)=>(
                           <> <DateFormatter dateString={item.assignedOn} /> <br/></>
                          ))}
                        </td>
                        <td className="relative">
                    <span
                      className="db-list-edit"
                      onClick={() => openModal(item)}
                    >
                      Remove
                    </span>
                    {showModal && showModal._id === item._id && (
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
                              select job
                            </label>
                            <div className="form-group">
                        <div className="pl-0 mb-3">
                          <select
                            name="category"
                            id="category_id"
                            className="form-control"
                            onChange={(e) => setJobId(e.target.value)}
                            value={jobid}
                          >
                            <option value>Select Job</option>
                            {item?.job.map((cat) => (
                              <option key={cat.assigned_job._id} value={cat.assigned_job._id}>
                                {cat.assigned_job.title.slice(0,15)}...
                              </option>
                            ))}
                          </select>
                        </div>
                            </div>
                            <div className="my-2 flex  justify-around ">
                              <button
                                onClick={closeModal}
                                className="w-[50px] cursor-pointer rounded-[4px] bg-green-700 px-1 py-[6px] text-center font-base text-xs text-white"
                              >
                                close
                              </button>
                              <button
                               onClick={(e) => removeJob(jobid,item._id)}
                               type="button"
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
