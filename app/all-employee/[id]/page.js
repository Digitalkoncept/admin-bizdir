"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CldUploadWidget } from "next-cloudinary";

import { toast } from "react-toastify";
import { UPDATE_EMPLOYEE } from "@/lib/mutation";
import { client } from "@/lib/apollo";
import { GET_ALL_ROLES, GET_EMPLOYEE_BY_ID, GET_ALL_TASK } from "@/lib/query";

const page = ({ params }) => {
  const [roles, setRoles] = useState();
  const [task,setTask] = useState();
  const [loading, setLoading] = useState();
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
  });

  const getEmployee = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_EMPLOYEE_BY_ID,
        variables: { id: params.id },
        context: {
          headers: {
            Authorization: `Bearer ${session?.jwt}`,
          },
        },
      });

      console.log(data);

      if (errors || data.getEmployeeById.code !== 200) {
        throw new Error("Something went wrong");
      }

      const { name, email, role, image } = await data.getEmployeeById.employee;
      setFormData({ name, email, role, image });
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Unable to fetch employee:", error);
    }
  };

  const getRoles = async () => {

    try {
      const { data, errors } = await client.query({
        query: GET_ALL_ROLES,
        context: {
          headers: {
            Authorization: `Bearer ${session?.jwt}`,
          },
        },
      });

      if (errors || data.getAllRoles.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setRoles(data.getAllRoles.roles);
    } catch (error) {
      console.error("Unable to fetch role:", error);
    }
  };

  const getTasks = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_TASK,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllTasks.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setTask(data.getAllTasks.tasks);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    if (status === "authenticated") {
      getEmployee();
      getRoles();
      getTasks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
      const { password, ...withoutPassword } = formData;
      const { data, errors } = await client.mutate({
        mutation: UPDATE_EMPLOYEE,
        variables: {
          id: params.id,
          data: { ...withoutPassword, role: formData.role?.id },
        },
        context: {
          headers: {
            Authorization: `Bearer ${session?.jwt}`,
          },
        },
      });

      if (errors || data.updateEmployee.code !== 200) {
        throw new Error("Something went wrong");
      }

      const { name, email, role, image } = await data.updateEmployee.employee;
      setFormData({ name, email, role, image });
      console.log(data);
      setLoading(false);
      toast.success("Employee Updated Successfully!");
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
            <span className="udb-inst">Add new Employee</span>

            <div className="ud-cen-s2 ud-pro-edit">
              <form
                name="admin_sub_admin_form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <h2>Employee Details</h2>
                <table className="responsive-table bordered">
                  <tbody>
                    <tr>
                      <td>Employee Name</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="Name"
                            autoComplete="username"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Employee Email</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            value={formData.password || ""}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="Enter password"
                            autoComplete="current-password"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Profile picture</td>
                      <td>
                        <div className="form-group">
                          <label>Choose profile image</label>
                          <div className="fil-img-uplo">
                            <span className="dumfil">Upload a file</span>
                            <CldUploadWidget
                              signatureEndpoint="/api/sign-cloudinary-params"
                              uploadPreset="profile_image"
                              onSuccess={(result, { widget }) => {
                                setFormData((prevFormData) => ({
                                  ...prevFormData,
                                  image: result?.info?.secure_url,
                                }));
                                widget.close();
                              }}
                            >
                              {({ open }) => {
                                function handleOnClick() {
                                  open();
                                }
                                return (
                                  <button type="button" onClick={handleOnClick}>
                                    upload image
                                  </button>
                                );
                              }}
                            </CldUploadWidget>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Role</td>
                      <td>
                        <div className="form-group">
                          <div className="col-md-6 pl-0">
                            <select
                              onChange={handleChange}
                              value={formData.role || ""}
                              name="role"
                              id="category_id"
                              className="form-control"
                            >
                              <option value>Select Role</option>
                              {roles?.map((role) => (
                                <option key={role._id} value={role._id}>
                                  {role.role_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Assign Task</td>
                      <td>
                        <div className="form-group">
                          
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  type="submit"
                  name="sub_admin_submit"
                  className="db-pro-bot-btn"
                >
                  Update Employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
