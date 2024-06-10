"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "react-toastify";
import { CREATE_EMPLOYEE } from "@/lib/mutation";
import { client } from "@/lib/apollo";
import { GET_ALL_ROLES } from "@/lib/query";
const page = () => {
  const [roles, setRoles] = useState();
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
  });

  const getRoles = async () => {
    // try {
    //   const res = await fetch(
    //     process.env.BACKEND_URL + "/api/role",
    //     {
    //       headers: {
    //         authorization: "Bearer " + session?.jwt,
    //       },
    //     }
    //   );

    //   const data = await res.json();
    //   console.log(data);
    //   setRoles(data);
    // } catch (error) {
    //   console.error(error);
    // }

    try {
      const { data, errors } = await client.query({
        query: GET_ALL_ROLES,
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getAllRoles.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setRoles(data.getAllRoles.roles);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    getRoles();
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
    // try {
    //   const res = await fetch(
    //     process.env.BACKEND_URL + "/api/auth/admin/register",
    //     {
    //       method:'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         authorization: "Bearer " + session?.jwt,
    //       },
    //       body: JSON.stringify(formData)
    //     }
    //   );
    //   const data = await res.json();
    //   if(res.status ===201){
    //     toast.success(data.message)
    //   } else {
    //     toast.error("something went wrong");
    //   }
    //   console.log(res);
    // } catch (error) {
    //   console.error(error);
    // }

    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_EMPLOYEE,
        variables: { data: formData },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.CREATE_EMPLOYEE.code !== 201) {
        throw new Error("Something went wrong");
      }

      toast.success("Employee created successfully");
      console.log(data);
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
                            value={formData.name}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="Name"
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
                            value={formData.email}
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
                            value={formData.password}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="Enter password"
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
                              value={formData.role}
                              name="role"
                              id="category_id"
                              className="form-control"
                            >
                              <option value>Select Category</option>
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
                  </tbody>
                </table>
                <button
                  type="submit"
                  name="sub_admin_submit"
                  className="db-pro-bot-btn"
                >
                  Add Employee
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
