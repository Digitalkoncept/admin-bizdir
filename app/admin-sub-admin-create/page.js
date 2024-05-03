import React from 'react'

const page = () => {
  return (
  <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Add new Sub Admin</span>
        <div className="ud-cen-s2 ud-pro-edit">
          <h2>Sub admin details</h2>
          <table className="responsive-table bordered">
            <form name="admin_sub_admin_form" action="insert_admin_sub_admin.html" method="post" encType="multipart/form-data" />
            <tbody>
              <tr>
                <td>Sub admin name</td>
                <td>
                  <div className="form-group">
                    <input type="text" name="admin_name" required="required" className="form-control" placeholder="Name" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>User name</td>
                <td>
                  <div className="form-group">
                    <input type="text" name="admin_email" required="required" className="form-control" placeholder="Enter user name" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <div className="form-group">
                    <input type="text" name="admin_password" required="required" className="form-control" placeholder="Enter password" />
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
              </tr>
              <tr>
                <td>
                  <button type="submit" name="sub_admin_submit" className="db-pro-bot-btn">Add User</button>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
