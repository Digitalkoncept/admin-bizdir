"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {  GET_ALL_JOBS } from "@/lib/query";
import { client } from "@/lib/apollo";
import { DELETE_ROLE } from "@/lib/mutation";
const page = () => {
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState();
  const { data: session, status } = useSession();

  const getJobs = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_JOBS,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllJobs.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setJobs(data.getAllJobs.jobs);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    if (status === "authenticated") getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  console.log("all tasks fatched =>",jobs)
  const deleteRole = async (id) => {
 
    try {
      const { data, errors } = await client.mutate({
        mutation: DELETE_ROLE,
        variables: { id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.deleteRole.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Role created successfully");
      getRoles();
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">All Tasks</span>
            <div className="ud-cen-s2">
              <h2>All Tasks</h2>
              <Link href="/add-job" className="db-tit-btn">
                Add New Job
              </Link>
              {loading ? (
                <Skeleton count={4} />
              ) : (
                <table className="responsive-table bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Permissions</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs?.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item?.title}</td>
                        <td>{item?.description}</td>
                        <td>{item?.tasks.join(", ")}</td>
                        <td>
                          <Link
                            href={`/all-tasks/${item._id}`}
                            className="db-list-edit"
                          >
                            Update
                          </Link>
                        </td>
                        <td>
                          <Link
                            href="#!"
                            className="db-list-edit"
                            onClick={() => deleteRole(item._id)}
                          >
                            Delete
                          </Link>
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
