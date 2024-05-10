'use client'
import React,{useState,useEffect} from 'react'
import { useSession } from 'next-auth/react';
import {toast } from 'react-toastify';
const page = () => {
  const [roles,setRoles] = useState();
  const {data:session} = useSession();
  const [formData, setFormData] = useState({
    role_name: '',
    description: '',
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
            permissions: prevFormData.permissions.filter((permission) => permission !== value),
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
      const res = await fetch(
        process.env.BACKEND_URL + "/api/role",
        {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: "Bearer " + session?.jwt,
          },
          body: JSON.stringify(formData)
        }
      );
      const data = await res.json();
      if(res.status ===201){
        toast.success(data.message)
      } else {
        toast.error("something went wrong");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
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
          <form name="admin_sub_admin_form" onSubmit={handleSubmit}   encType="multipart/form-data" >
          <h2>Create Role</h2>
          
          <table className="responsive-table bordered">
            <tbody>
              <tr>
                <td>Role Name</td>
                <td>
                  <div className="form-group">
                    <input type="text" name="role_name" value={formData.role_name} onChange={handleChange} required="required" className="form-control" placeholder="Role Name" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <div className="form-group">
                    <input type="text" name="description" value={formData.description} onChange={handleChange} required="required" className="form-control" placeholder="description" />
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
                          <input type="checkbox" name="admin_user_options" checked={formData.permissions.includes("All Employee")} value="All Employee" onChange={handleChange} id="sac1"  />
                          <label htmlFor="sac1">All Employee </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_listing_options"  checked={formData.permissions.includes("Employee Roles")} value="Employee Roles" onChange={handleChange}  id="sac2"  />
                          <label htmlFor="sac2">Employee Roles</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_event_options" checked={formData.permissions.includes("Users")} value="Users" onChange={handleChange} id="sac3"  />
                          <label htmlFor="sac3">Users</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_blog_options" checked={formData.permissions.includes("All Listings")} value="All Listings" onChange={handleChange} id="sac4"  />
                          <label htmlFor="sac4">All Listings</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_product_options" checked={formData.permissions.includes("New Listing Request")} value="New Listing Request" onChange={handleChange} id="sac24"  />
                          <label htmlFor="sac24">Listing Approval</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_category_options" checked={formData.permissions.includes("All Events")} value="All Events" onChange={handleChange} id="sac5"  />
                          <label htmlFor="sac5">All Events</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_product_category_options" checked={formData.permissions.includes("New Event Request")} value="New Event Request" onChange={handleChange} id="sac25"  />
                          <label htmlFor="sac25">Event Approval</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_enquiry_options" checked={formData.permissions.includes("All Products")} value="All Products" onChange={handleChange} id="sac6"  />
                          <label htmlFor="sac6">All Products</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_review_options" checked={formData.permissions.includes("New Product Request")} value="New Product Request" onChange={handleChange} id="sac7"  />
                          <label htmlFor="sac7">Product Approval</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_feedback_options" checked={formData.permissions.includes("All Payments")} value="All Payments" onChange={handleChange} id="sac26"  />
                          <label htmlFor="sac26">All Payments</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_notification_options" checked={formData.permissions.includes("All Coupons")} value="All Coupons" onChange={handleChange} id="sac8"  />
                          <label htmlFor="sac8">All Coupons</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_ads_options" checked={formData.permissions.includes("Add New Coupon")} value="Add New Coupon" onChange={handleChange} id="sac9"  />
                          <label htmlFor="sac9">Add New Coupon</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_home_options" checked={formData.permissions.includes("All Enquiry")} value="All Enquiry" onChange={handleChange} id="sac10"  />
                          <label htmlFor="sac10">All Enquiry</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_country_options" checked={formData.permissions.includes("All Reviews")} value="All Reviews" onChange={handleChange} id="sac11"  />
                          <label htmlFor="sac11">All Reviews</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_city_options" checked={formData.permissions.includes("All Feedbacks")} value="All Feedbacks" onChange={handleChange} id="sac12"  />
                          <label htmlFor="sac12">All Feedbacks</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_listing_filter_options" checked={formData.permissions.includes("All Notifications")} value="All Notifications" onChange={handleChange} id="sac22"  />
                          <label htmlFor="sac22">All Notifications</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_invoice_options" checked={formData.permissions.includes("Pricing Plans")} value="Pricing Plans" onChange={handleChange} id="sac13"  />
                          <label htmlFor="sac13">Pricing Plans</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_import_options" checked={formData.permissions.includes("Setting")} value="Setting" onChange={handleChange} id="sac14"  />
                          <label htmlFor="sac14">Setting</label>
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
                  <button type="submit" name="sub_admin_submit" className="db-pro-bot-btn">Add Role</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
