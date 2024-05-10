'use client'
import React,{useState,useEffect} from 'react'
import { useSession } from 'next-auth/react';
import {toast } from 'react-toastify';
const page = ({params}) => {
  const [roles,setRoles] = useState();
  const [loading,setLoading] = useState();
  const {data:session} = useSession();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role_id:''
  });

  const getEmployee = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        process.env.BACKEND_URL + `/api/employee/${params.id}`,
        {
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );

      const data = await res.json();
      const {name,email,role_id} = await data;
      setFormData({name,email,role_id})
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const getRoles = async () => {
    try {
      const res = await fetch(
        process.env.BACKEND_URL + "/api/role",
        {
          headers: {
            authorization: "Bearer " + session?.jwt,
          },
        }
      );

      const data = await res.json();
      console.log(data);
      setRoles(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getEmployee(); 
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
    try {
      const res = await fetch(
        process.env.BACKEND_URL + `/api/employee/${params.id}`,
        {
          method:'PATCH',
          headers: {
            'Content-Type': 'application/json',
            authorization: "Bearer " + session?.jwt,
          },
          body: JSON.stringify(formData)
        }
      );
      const data = await res.json();
      if(res.status ===200){
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
        <span className="udb-inst">Add new Employee</span>

        <div className="ud-cen-s2 ud-pro-edit">
          <form name="admin_sub_admin_form" onSubmit={handleSubmit}   encType="multipart/form-data" >
          <h2>Employee Details</h2>
          
          <table className="responsive-table bordered">
            <tbody>
              <tr>
                <td>Employee Name</td>
                <td>
                  <div className="form-group">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required="required" className="form-control" placeholder="Name" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Employee Email</td>
                <td>
                  <div className="form-group">
                    <input type="text" name="email" value={formData.email} onChange={handleChange} required="required" className="form-control" placeholder="Email" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <div className="form-group">
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required="required" className="form-control" placeholder="Enter password" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Profile picture</td>
                <td>
                  <div className="form-group">
                    <input type="file" name="admin_photo" className="form-control" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Role</td>
                <td>
                <div className="form-group">
                  <div className='col-md-6 pl-0'>
                <select onChange={handleChange} value={formData.role_id} name="role_id" id="category_id" className="form-control">
                  <option value>Select Role</option>
                  {roles?.map(role =>(<option key={role._id} value={role._id}>{role.role_name}</option>))}
                  
                </select>
                </div>
                </div>

                </td>
              </tr>
              {/* <tr>
                <td>Credentials</td>
                <td>
                  <div className="ad-sub-cre">
                    <ul>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_user_options" id="sac1" defaultChecked />
                          <label htmlFor="sac1">User options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_listing_options" id="sac2" defaultChecked />
                          <label htmlFor="sac2">Listing options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_event_options" id="sac3" defaultChecked />
                          <label htmlFor="sac3">Event options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_blog_options" id="sac4" defaultChecked />
                          <label htmlFor="sac4">Blog post options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_product_options" id="sac24" defaultChecked />
                          <label htmlFor="sac24">Product options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_category_options" id="sac5" defaultChecked />
                          <label htmlFor="sac5">Listing Category options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_product_category_options" id="sac25" defaultChecked />
                          <label htmlFor="sac25">Product Category options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_enquiry_options" id="sac6" defaultChecked />
                          <label htmlFor="sac6">Enquiry &amp; get quote options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_review_options" id="sac7" defaultChecked />
                          <label htmlFor="sac7">Reviews options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_feedback_options" id="sac26" defaultChecked />
                          <label htmlFor="sac26">Feedback options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_notification_options" id="sac8" defaultChecked />
                          <label htmlFor="sac8">Send notification options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_ads_options" id="sac9" defaultChecked />
                          <label htmlFor="sac9">Ads options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_home_options" id="sac10" defaultChecked />
                          <label htmlFor="sac10">Home Page options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_country_options" id="sac11" defaultChecked />
                          <label htmlFor="sac11">Country options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_city_options" id="sac12" defaultChecked />
                          <label htmlFor="sac12">City options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_listing_filter_options" id="sac22" defaultChecked />
                          <label htmlFor="sac22">Listing Filter options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_invoice_options" id="sac13" defaultChecked />
                          <label htmlFor="sac13">Invoice options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_import_options" id="sac14" defaultChecked />
                          <label htmlFor="sac14">Import &amp; Export options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_sub_admin_options" id="sac15" defaultChecked />
                          <label htmlFor="sac15">Sub Admin options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_text_options" id="sac16" defaultChecked />
                          <label htmlFor="sac16">All Text Change options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_listing_price_options" id="sac17" defaultChecked />
                          <label htmlFor="sac17">Listing Price options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_payment_options" id="sac18" defaultChecked />
                          <label htmlFor="sac18">Admin Payment options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_setting_options" id="sac19" defaultChecked />
                          <label htmlFor="sac19">Setting options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_footer_options" id="sac20" defaultChecked />
                          <label htmlFor="sac20">Footer CMS options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_dummy_image_options" id="sac21" defaultChecked />
                          <label htmlFor="sac21">Dummy images options</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input type="checkbox" name="admin_mail_template_options" id="sac23" defaultChecked />
                          <label htmlFor="sac23">Mail Template options</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr> */}
            </tbody>
          </table>
                  <button type="submit" name="sub_admin_submit" className="db-pro-bot-btn">Add Employee</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
