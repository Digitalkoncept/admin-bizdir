import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Footer</span>
        <div className="ud-cen-s2 ud-pro-edit ad-all-txt-chan">
          <h2>Footer CMS</h2>
          <form name="footer_form" id="footer_form" method="post" encType="multipart/form-data" action="update_footer.html">
            <table className="responsive-table bordered">
              <thead>
                <tr>
                  <th>Section</th>
                  <th>Text</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <input type="hidden" autoComplete="off" name="footer_id" defaultValue={1} id="footer_id" className="validate" />
                <input type="hidden" className="validate" id="header_logo_old" name="header_logo_old" defaultValue="28482bizbook-white.png" required="required" />
                <input type="hidden" className="validate" id="admin_photo_old" name="admin_photo_old" defaultValue="147437.jpg" required="required" />
                <input type="hidden" className="validate" id="home_page_banner_old" name="home_page_banner_old" defaultValue required="required" />
                <input type="hidden" className="validate" id="home_page_fav_icon_old" name="home_page_fav_icon_old" defaultValue required="required" />
                <tr>
                  <td>Support</td>
                  <td>Phone num:</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" className="form-control" name="footer_mobile" placeholder="Phone" defaultValue="+01 5426 24400" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Top category</td>
                  <td>Category 1:</td>
                  <td>
                    <div className="form-group">
                      <select name="top_category_1" className="form-control" id="top_category_1">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option selected value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                  <td>Category 2:</td>
                  <td>
                    <div className="form-group">
                      <select name="top_category_2" className="form-control" id="top_category_2">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option selected value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Category 3:</td>
                  <td>
                    <div className="form-group">
                      <select name="top_category_3" className="form-control" id="top_category_3">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option selected value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                  <td>Category 4:</td>
                  <td>
                    <div className="form-group">
                      <select name="top_category_4" className="form-control" id="top_category_4">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option selected value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Category 5:</td>
                  <td>
                    <div className="form-group">
                      <select name="top_category_5" className="form-control" id="top_category_5">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option selected value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                  <td>Category 6:</td>
                  <td>
                    <div className="form-group">
                      <select name="top_category_6" className="form-control" id="top_category_6">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option selected value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Category 7:</td>
                  <td>
                    <div className="form-group">
                      <select name="top_category_7" className="form-control" id="top_category_7">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option selected value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                  <td>Category 8:</td>
                  <td>
                    <div className="form-group">
                      <select name="top_category_8" className="form-control" id="top_category_8">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option selected value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Trending category</td>
                  <td>Category 1:</td>
                  <td>
                    <div className="form-group">
                      <select name="trend_category_1" className="form-control" id="trend_category_1">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option selected value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                  <td>Category 2:</td>
                  <td>
                    <div className="form-group">
                      <select name="trend_category_2" className="form-control" id="trend_category_2">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option selected value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Category 3:</td>
                  <td>
                    <div className="form-group">
                      <select name="trend_category_3" className="form-control" id="trend_category_3">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option selected value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                  <td>Category 4:</td>
                  <td>
                    <div className="form-group">
                      <select name="trend_category_4" className="form-control" id="trend_category_4">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option selected value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Category 5:</td>
                  <td>
                    <div className="form-group">
                      <select name="trend_category_5" className="form-control" id="trend_category_5">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option selected value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                  <td>Category 6:</td>
                  <td>
                    <div className="form-group">
                      <select name="trend_category_6" className="form-control" id="trend_category_6">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option selected value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Category 7:</td>
                  <td>
                    <div className="form-group">
                      <select name="trend_category_7" className="form-control" id="trend_category_7">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option selected value={7}>Education</option>
                        <option value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                  <td>Category 8:</td>
                  <td>
                    <div className="form-group">
                      <select name="trend_category_8" className="form-control" id="trend_category_8">
                        <option value={19}>Wedding halls</option>
                        <option value={18}>Hotel &amp; Food</option>
                        <option value={17}>Pet shop</option>
                        <option value={16}>Digital Products</option>
                        <option value={15}>Spa and Facial</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={7}>Education</option>
                        <option selected value={6}>Electricals</option>
                        <option value={5}>Automobiles</option>
                        <option value={3}>Transportation</option>
                        <option value={2}>Hospitals</option>
                        <option value={1}>Hotels And Resorts</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Get in touch</td>
                  <td>Address:</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" className="form-control" name="footer_address" defaultValue="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A." required="required" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Mobile app</td>
                  <td>Android:</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" name="mobile_app_andriod" defaultValue className="form-control" placeholder="Playstore download link" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Apple:</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" name="mobile_app_ios" defaultValue className="form-control" placeholder="App store download link" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Social media</td>
                  <td>Facebook:</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" name="footer_fb" defaultValue="https://www.facebook.com/Rn53themes-1956793534579530/" className="form-control" placeholder="Profile link" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Twitter:</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" className="form-control" name="footer_twitter" defaultValue="https://twitter.com/Google?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" placeholder="Profile link" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Linkedin:</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" className="form-control" name="footer_linked_in" defaultValue placeholder="Profile link" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Youtube:</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" className="form-control" name="footer_youtube" defaultValue placeholder="Profile link" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>WhatsApp:</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" name="footer_whatsapp" defaultValue className="form-control" placeholder="WhatsApp mobile number" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Help &amp; Support</td>
                  <td>Page name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" name="footer_page_name_1" placeholder="Page name" defaultValue="About us" />
                    </div>
                  </td>
                  <td>Page URL:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Page full url" name="footer_page_url_1" defaultValue="about.html" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Page name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" name="footer_page_name_2" placeholder="Page name" defaultValue="FAQ" />
                    </div>
                  </td>
                  <td>Page URL:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Page full url" name="footer_page_url_2" defaultValue="faq.html" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Page name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" name="footer_page_name_3" placeholder="Page name" defaultValue="Feedback" />
                    </div>
                  </td>
                  <td>Page URL:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Page full url" name="footer_page_url_3" defaultValue="feedback.html" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Page name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" name="footer_page_name_4" placeholder="Page name" defaultValue="Contact us" />
                    </div>
                  </td>
                  <td>Page URL:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Page full url" name="footer_page_url_4" defaultValue="contact-us.html" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Other countries</td>
                  <td>Country name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country name" name="footer_country_name_1" defaultValue="Australia" />
                    </div>
                  </td>
                  <td>Country url:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country page full url" name="footer_country_url_1" defaultValue="www.domainname.au" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Country name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country name" name="footer_country_name_2" defaultValue="UK" />
                    </div>
                  </td>
                  <td>Country url:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country page full url" name="footer_country_url_2" defaultValue="www.domainname.uk" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Country name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country name" name="footer_country_name_3" defaultValue="USA" />
                    </div>
                  </td>
                  <td>Country url:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country page full url" name="footer_country_url_3" defaultValue="www.domainname.usa" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Country name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country name" name="footer_country_name_4" defaultValue="India" />
                    </div>
                  </td>
                  <td>Country url:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country page full url" name="footer_country_url_4" defaultValue="www.domainname.in" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Country name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country name" name="footer_country_name_5" defaultValue="Germany" />
                    </div>
                  </td>
                  <td>Country url:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country page full url" name="footer_country_url_5" defaultValue="www.domainname.ge" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Country name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country name" name="footer_country_name_6" defaultValue="China" />
                    </div>
                  </td>
                  <td>Country url:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country page full url" name="footer_country_url_6" defaultValue="www.domainname.ch" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Country name:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country name" name="footer_country_name_7" defaultValue="france" />
                    </div>
                  </td>
                  <td>Country url:</td>
                  <td>
                    <div className="form-group">
                      <input className="form-control" placeholder="Country page full url" name="footer_country_url_7" defaultValue="www.domainname.fr" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Copyright</td>
                  <td>Copyright year</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" name="copyright_year" defaultValue="2017-2020" className="form-control" placeholder="2017-2020" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Copyright Website</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" name="copyright_website" defaultValue="Rn53 Themes" className="form-control" placeholder="RN53 Themes" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>Copyright Website Link</td>
                  <td colSpan={3}>
                    <div className="form-group">
                      <input type="text" name="copyright_website_link" defaultValue="http://rn53themes.net/" className="form-control" placeholder="i.e https://google.com" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit" name="footer_submit" className="db-pro-bot-btn">Save changes</button>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
