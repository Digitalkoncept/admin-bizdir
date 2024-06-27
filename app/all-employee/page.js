"use client";
import React, { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Link from "next/link";
import { client } from "@/lib/apollo";
import { GET_EMPLOYEES } from "@/lib/query";
import { DELETE_EMPLOYEE } from "@/lib/mutation";
const page = () => {
  const [employee, setEmployee] = useState();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(null);
  const openModal = (item) => {
    setShowModal(item);
  };
  const closeModal = () => {
    setShowModal(null);
  };
  const getEmployee = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_EMPLOYEES,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getEmployees.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setEmployee(data.getEmployees.employee);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getEmployee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const deleteEmployee = async (id) => {
  

    try {
      const { data, errors } = await client.mutate({
        mutation: DELETE_EMPLOYEE,
        variables: { id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.createRole.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Role created successfully");
      getEmployee();
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
            <span className="udb-inst">All Employee</span>
            <div className="ud-cen-s2">
              <h2>All Employee</h2>
              <Link href="/create-employee" className="db-tit-btn">
                Add new Employee
              </Link>
              {loading ? (
                <Skeleton count={5} />
              ) : (
                <table className="responsive-table bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>profile</th>
                      <th>Role</th>
                      <th>Password</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee?.map((item, index) => (
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
                          <span>08, Jan 2020</span>
                        </td>
                        <td>{item?.role?.role_name}</td>
                        <td>**********</td>
                        <td>
                          <Link
                            href={`/all-employee/${item._id}`}
                            className="db-list-edit"
                          >
                            Update
                          </Link>
                        </td>
                        <td className="relative">
                          <span
                            href="#!"
                            className="db-list-edit"
                            onClick={() => openModal(item)}
                          >
                            Delete
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
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                  >
                                    you want to delete {item.name}
                                  </label>
                                  <div className="my-2 flex  justify-around ">
                                    <button
                                      onClick={closeModal}
                                      className="w-[50px] cursor-pointer rounded-[4px] bg-green-700 px-1 py-[6px] text-center font-base text-xs text-white"
                                    >
                                      close
                                    </button>
                                    <button
                                      onClick={() => deleteEmployee(item._id)}
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
