"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { client } from "@/lib/apollo";
import { CREATE_ROLE } from "@/lib/mutation";
const page = () => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    role_name: "",
    description: "",
    permissions: [],
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
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
    // try {
    //   const res = await fetch(process.env.BACKEND_URL + "/api/role", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       authorization: "Bearer " + session?.jwt,
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await res.json();
    //   if (res.status === 201) {
    //     toast.success(data.message);
    //   } else {
    //     toast.error("something went wrong");
    //   }
    //   console.log(res);
    // } catch (error) {
    //   console.error(error);
    // }
    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_ROLE,
        variables: { data: formData },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.createRole.code !== 201) {
        throw new Error("Something went wrong");
      }

      toast.success("Role created successfully");
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
            <span className="udb-inst">Add new Role</span>

            <div className="ud-cen-s2 ud-pro-edit">
              <form
                name="admin_sub_admin_form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <h2>Create Role</h2>

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
                                  name="admin_user_options"
                                  checked={formData.permissions.includes(
                                    "All Employee"
                                  )}
                                  value="All Employee"
                                  onChange={handleChange}
                                  id="0"
                                />
                                <label htmlFor="0">All Employee </label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_user_options"
                                  checked={formData.permissions.includes(
                                    "Create Employee"
                                  )}
                                  value="Create Employee"
                                  onChange={handleChange}
                                  id="create-employee"
                                />
                                <label htmlFor="create-employee">
                                  Create Employee{" "}
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_listing_options"
                                  checked={formData.permissions.includes(
                                    "Roles"
                                  )}
                                  value="Roles"
                                  onChange={handleChange}
                                  id="1"
                                />
                                <label htmlFor="1">Employee Roles</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_listing_options"
                                  checked={formData.permissions.includes(
                                    "Create Roles"
                                  )}
                                  value="Roles"
                                  onChange={handleChange}
                                  id="create-roles"
                                />
                                <label htmlFor="create-roles">
                                  Create Roles
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_event_options"
                                  checked={formData.permissions.includes(
                                    "Users"
                                  )}
                                  value="Users"
                                  onChange={handleChange}
                                  id="2"
                                />
                                <label htmlFor="2">Users</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_blog_options"
                                  checked={formData.permissions.includes(
                                    "All Listings"
                                  )}
                                  value="All Listings"
                                  onChange={handleChange}
                                  id="3"
                                />
                                <label htmlFor="3">All Listings</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_blog_options"
                                  checked={formData.permissions.includes(
                                    "Create Listing"
                                  )}
                                  value="Create Listing"
                                  onChange={handleChange}
                                  id="Create Listing"
                                />
                                <label htmlFor="Create Listing">
                                  Create Listing
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_product_options"
                                  checked={formData.permissions.includes(
                                    "New Listing Request"
                                  )}
                                  value="New Listing Request"
                                  onChange={handleChange}
                                  id="4"
                                />
                                <label htmlFor="4">Listing Approval</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_product_options"
                                  checked={formData.permissions.includes(
                                    "Delete Listing"
                                  )}
                                  value="Delete Listing"
                                  onChange={handleChange}
                                  id="5"
                                />
                                <label htmlFor="5">Delete Listing</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_category_options"
                                  checked={formData.permissions.includes(
                                    "All Events"
                                  )}
                                  value="All Events"
                                  onChange={handleChange}
                                  id="6"
                                />
                                <label htmlFor="6">All Events</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_product_category_options"
                                  checked={formData.permissions.includes(
                                    "New Event Request"
                                  )}
                                  value="New Event Request"
                                  onChange={handleChange}
                                  id="7"
                                />
                                <label htmlFor="7">Event Approval</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_enquiry_options"
                                  checked={formData.permissions.includes(
                                    "All Products"
                                  )}
                                  value="All Products"
                                  onChange={handleChange}
                                  id="8"
                                />
                                <label htmlFor="8">All Products</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_review_options"
                                  checked={formData.permissions.includes(
                                    "New Product Request"
                                  )}
                                  value="New Product Request"
                                  onChange={handleChange}
                                  id="9"
                                />
                                <label htmlFor="9">Product Approval</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_feedback_options"
                                  checked={formData.permissions.includes(
                                    "All Payments"
                                  )}
                                  value="All Payments"
                                  onChange={handleChange}
                                  id="10"
                                />
                                <label htmlFor="10">All Payments</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_notification_options"
                                  checked={formData.permissions.includes(
                                    "All Coupons"
                                  )}
                                  value="All Coupons"
                                  onChange={handleChange}
                                  id="11"
                                />
                                <label htmlFor="11">All Coupons</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_ads_options"
                                  checked={formData.permissions.includes(
                                    "Add New Coupon"
                                  )}
                                  value="Add New Coupon"
                                  onChange={handleChange}
                                  id="12"
                                />
                                <label htmlFor="12">Add New Coupon</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_home_options"
                                  checked={formData.permissions.includes(
                                    "All Enquiry"
                                  )}
                                  value="All Enquiry"
                                  onChange={handleChange}
                                  id="13"
                                />
                                <label htmlFor="13">All Enquiry</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_country_options"
                                  checked={formData.permissions.includes(
                                    "All Reviews"
                                  )}
                                  value="All Reviews"
                                  onChange={handleChange}
                                  id="14"
                                />
                                <label htmlFor="14">All Reviews</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_city_options"
                                  checked={formData.permissions.includes(
                                    "All Feedbacks"
                                  )}
                                  value="All Feedbacks"
                                  onChange={handleChange}
                                  id="15"
                                />
                                <label htmlFor="15">All Feedbacks</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_listing_filter_options"
                                  checked={formData.permissions.includes(
                                    "All Notifications"
                                  )}
                                  value="All Notifications"
                                  onChange={handleChange}
                                  id="16"
                                />
                                <label htmlFor="16">All Notifications</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_invoice_options"
                                  checked={formData.permissions.includes(
                                    "Pricing Plans"
                                  )}
                                  value="Pricing Plans"
                                  onChange={handleChange}
                                  id="17"
                                />
                                <label htmlFor="17">Pricing Plans</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  name="admin_import_options"
                                  checked={formData.permissions.includes(
                                    "Setting"
                                  )}
                                  value="Setting"
                                  onChange={handleChange}
                                  id="18"
                                />
                                <label htmlFor="18">Setting</label>
                              </div>
                            </li>
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
                  Add Role
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
