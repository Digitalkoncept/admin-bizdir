"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { client } from "@/lib/apollo";
import { GET_ROLE } from "@/lib/query";
import { UPDATE_ROLE } from "@/lib/mutation";
const page = ({ params }) => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState();

  const [formData, setFormData] = useState({
    role_name: "",
    description: "",
    permissions: [],
  });

  const getRole = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ROLE,
        variables: { id: params.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getRole.code !== 200) {
        throw new Error("Something went wrong");
      }

      const { role_name, description, permissions } = data.getRole.role;
      setFormData({ role_name, description, permissions });
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getRole();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if(name === 'selectAll'){
      if (checked) {
        // If "Select All" is checked, set all permissions
        setFormData({ permissions: permissions });
      } else {
        // If "Select All" is unchecked, clear all permissions
        setFormData({ permissions: [] });
      }
    }
   else if (type === "checkbox") {
      if (checked) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          permissions: [...prevFormData.permissions, value],
        }));
      } else {
        setFormData((prevFormData) => ({
          ...prevFormData,
          permissions: prevFormData.permissions.filter(
            (permission) => permission !== value
          ),
        }));
      }
    } else
      setFormData({
        ...formData,
        [name]: value,
      });
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formData);
      const { data, errors } = await client.mutate({
        mutation: UPDATE_ROLE,
        variables: { id: params.id, data: formData },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.updateRole.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Role updated successfully");
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  if (loading) return <>Loading</>;

  const permissions = [
    "view employee",
    "add employee",
    "update employee",
    "delete employee",
    "view roles",
    "add role",
    "update-role",
    "delete role",
    "view jobs",
    "add job",
    "update job",
    "delete job",
    "view assigned jobs",
    "assign new job",
    "view users",
    "disable user",
    "view listings",
    "add listing",
    "update listing",
    "disable listing",
    "view listing request",
    "approve listing",
    "reject listing",
    "view claim request",
    "approve claim",
    "reject claim",
    "view listing category",
    "add listing category",
    "update listing category",
    "delete listing category",
    "view listing sub category",
    "add listing sub category",
    "update listing sub category",
    "delete listing sub category",
    "view coupons",
    "add coupon",
    "update coupon",
    "delete coupon",
    "view payments",
    "view company enquiry",
    "view client enquiry",
    "view reviews",
    "view notifications",
  ];
  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Add new Role</span>

            <div className="ud-cen-s2 ud-pro-edit">
              <form
                name="admin_sub_admin_form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <h2>Update Role</h2>

                <table className="responsive-table bordered">
                  <tbody>
                    <tr>
                      <td>Role Name</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            name="role_name"
                            value={formData.role_name}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="Role Name"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>
                        <div className="form-group">
                          <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required="required"
                            className="form-control"
                            placeholder="description"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Credentials</td>
                      <td>
                        <div className="ad-sub-cre">
                          <ul>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="selectAll"
                                  checked={
                                    formData.permissions.length ===
                                    permissions.length
                                  }
                                  onChange={handleChange}
                                  id="selectAll"
                                />
                                <label htmlFor="selectAll">Select All</label>
                              </div>
                            </li>
                            {permissions.map((item, index) => (
                              <li key={index}>
                                <div className="chbox">
                                  <input
                                    type="checkbox"
                                    name="admin_user_options"
                                    checked={formData.permissions.includes(
                                      item
                                    )}
                                    value={item}
                                    onChange={handleChange}
                                    id={index}
                                  />
                                  <label htmlFor={index}>{item} </label>
                                </div>
                              </li>
                            ))}
                          </ul>
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
                  Update Role
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
