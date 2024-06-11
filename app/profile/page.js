"use client";
import React, { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { GET_EMPLOYEE_BY_ID } from "@/lib/query";
import { client } from "@/lib/apollo";
import { UPDATE_EMPLOYEE } from "@/lib/mutation";

const page = () => {
  const { data: session, status, update } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    image: "",
  });
  const getProfile = async () => {
  

    try {
      const { data, errors } = await client.query({
        query: GET_EMPLOYEE_BY_ID,
        variables: { id: session?.user?.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getEmployeeById.code !== 200) {
        throw new Error("Something went wrong");
      }

      const { name, email, gender, _id, image } = data.getEmployeeById.employee;
      setFormData({ name, email, gender, _id, image });
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    try {
      console.log("session id ==>", session);
      console.log("formdata ==>", formData);

      const { password, _id,  ...withoutPasswordData } = formData;
      const { data, errors } = await client.mutate({
        mutation: UPDATE_EMPLOYEE,
        variables: {
          id: session.user?.id,
          data: withoutPasswordData,
        },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.updateEmployee.code !== 200) {
        toast.error(data.updateEmployee.message);
        throw new Error("Something went wrong");
      }

      toast.success(data.updateEmployee.message);
      update({ image: formData.image });
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Settings</span>
            <div className="ud-cen-s2 ud-pro-edit">
              <form
                name="setting_form"
                onSubmit={handleSubmit}
                id="setting_form"
                encType="multipart/form-data"
              >
                <h2>Update Profile</h2>
                <table className="responsive-table bordered">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            required="required"
                            name="name"
                            placeholder="Name"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Email :</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>New Password</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            name="password"
                            placeholder="Enter new password if you like to change"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Profile Picture</td>
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
                      <td>Gender</td>
                      <td>
                        <div className="form-group">
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="form-control"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <button
                          type="submit"
                          name="setting_submit"
                          className="db-pro-bot-btn"
                        >
                          Update Profile
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
