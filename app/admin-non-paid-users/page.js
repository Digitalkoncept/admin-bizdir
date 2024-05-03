import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All Non Paid User Details</span>
        <div className="ud-cen-s2">
          <h2>All Non Paid Users - 42</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <a href="admin-add-new-user.html" className="db-tit-btn">Add new user</a>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>User Name</th>
                <th>User ID</th>
                <th>Plan type</th>
                <th>Expiry on</th>
                <th>Amount</th>
                <th>User Type</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Preview</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img src="../images/user/83462us3.jpg" alt=""/>Vj<span>vj@gmail.com</span> <span>Join: 25, Mar 2021</span>
                </td>
                <td>USER335 </td>
                <td><span className="db-list-rat">Premium</span></td>
                <td><span className="db-list-ststus">25, Jun 2021</span></td>
                <td><span className="db-list-rat">$19</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=335&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=335&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/vj" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=335" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><img src="../images/user/1980us4.jpg" alt=""/>Abhinav<span>sonic@gmail.com</span> <span>Join: 13, Mar 2021</span>
                </td>
                <td>USER334 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">13, May 2021</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=334&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=334&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/abhinav2" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=334" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><img src="../images/user/36078us5.jpg" alt=""/>abhinav<span>abhinavkumar@142010.gmail.com</span> <span>Join: 13, Mar 2021</span>
                </td>
                <td>USER333 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">13, May 2021</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=333&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=333&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/abhinav1" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=333" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><img src="../images/user/72816us7.jpg" alt=""/>abhinav<span>abhinav@gmail.com</span> <span>Join: 12, Mar 2021</span>
                </td>
                <td>USER332 </td>
                <td><span className="db-list-rat">Premium</span></td>
                <td><span className="db-list-ststus">12, Jun 2021</span></td>
                <td><span className="db-list-rat">$19</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=332&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=332&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/abhinav" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=332" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><img src="../images/user/12606pexels-andrea-piacquadio-941693-(1).jpg" alt=""/>Loki<span>thedirectoryfinder@gmail.com</span> <span>Join: 07, Feb 2021</span>
                </td>
                <td>USER325 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">07, Jun 2021</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=325&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=325&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/loki" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=325" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td><img src="../images/user/1.jpg" alt=""/>besthaus<span>besthaus@gmail.com</span> <span>Join: 21, Sep 2020</span>
                </td>
                <td>USER310 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">21, Jan 2021</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=310&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=310&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/besthaus" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=310" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td><img src="../images/user/1.jpg" alt=""/>Srikanth<span>srikanth.aeroz@gmail.com</span> <span>Join: 15, Sep 2020</span>
                </td>
                <td>USER302 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">15, Nov 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=302&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=302&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/srikanth" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=302" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td><img src="../images/user/1.jpg" alt=""/>Amit Kumar<span>amitaggerwal21@gmail.com</span> <span>Join: 14, Sep 2020</span>
                </td>
                <td>USER300 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">14, Jan 2021</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=300&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=300&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/amit-kumar" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=300" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td><img src="../images/user/1.jpg" alt=""/>admin<span>admin@demo.com</span> <span>Join: 11, Sep 2020</span>
                </td>
                <td>USER297 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">11, Nov 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=297&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=297&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/admin" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=297" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td><img src="../images/user/1.jpg" alt=""/>UFUK GÜVENÇ<span>ufukguvenc06@gmail.com</span> <span>Join: 20, Aug 2020</span>
                </td>
                <td>USER288 </td>
                <td><span className="db-list-rat">Premium</span></td>
                <td><span className="db-list-ststus">20, Nov 2020</span></td>
                <td><span className="db-list-rat">$19</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=288&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=288&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ufuk-g--ven--" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=288" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td><img src="../images/user/1.jpg" alt=""/>mat<span>fleurma2000@yahoo.fr</span> <span>Join: 15, Aug 2020</span>
                </td>
                <td>USER282 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">15, Dec 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=282&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=282&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/mat" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=282" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td><img src="../images/user/26250ecommerce.png" alt=""/>Banwari<span>banwarigarhwal1@gmail.com</span> <span>Join: 26, Jul 2020</span>
                </td>
                <td>USER258 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">26, Sep 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=258&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=258&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/banwari" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=258" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td><img src="../images/user/1.jpg" alt=""/>aklsdjf<span>paul_anthonyr@hotmail.com</span> <span>Join: 25, Jul 2020</span>
                </td>
                <td>USER257 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">25, Sep 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=257&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=257&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/aklsdjf" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=257" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td><img src="../images/user/1.jpg" alt=""/>Test Hector<span>fhfghfgrt@dnawr.com</span> <span>Join: 21, Jul 2020</span>
                </td>
                <td>USER254 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">21, Sep 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=254&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=254&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/test-hector" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=254" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>15</td>
                <td><img src="../images/user/1.jpg" alt=""/>ahmad<span>ahmad@favista.com</span> <span>Join: 26, Jun 2020</span>
                </td>
                <td>USER234 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">26, Aug 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=234&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=234&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ahmad" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=234" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>16</td>
                <td><img src="../images/user/28929ggr.png" alt=""/>Adewale Festus<span>festus.adegunloye@gmail.com</span> <span>Join: 25, Jun 2020</span>
                </td>
                <td>USER231 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">25, Oct 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=231&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=231&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/adewale-festus" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=231" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>17</td>
                <td><img src="../images/user/1.jpg" alt=""/>test<span>bizbook@tewst.com</span> <span>Join: 16, Jun 2020</span>
                </td>
                <td>USER222 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">16, Oct 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=222&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=222&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/test" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=222" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>18</td>
                <td><img src="../images/user/1.jpg" alt=""/>john<span>daboussiilyes@gmail.com</span> <span>Join: 03, Jun 2020</span>
                </td>
                <td>USER216 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">03, Oct 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=216&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=216&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/john" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=216" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>19</td>
                <td><img src="../images/user/1.jpg" alt=""/>johnny<span>daboussiilyes@icloud.com</span> <span>Join: 31, May 2020</span>
                </td>
                <td>USER211 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">01, Oct 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=211&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=211&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/johnny" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=211" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>20</td>
                <td><img src="../images/user/1.jpg" alt=""/>Chis<span>nangsejc@yahoo.ca</span> <span>Join: 26, May 2020</span>
                </td>
                <td>USER208 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">26, Sep 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=208&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=208&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/chis" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=208" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>21</td>
                <td><img src="../images/user/1.jpg" alt=""/>clic<span>clicetannonce@yahoo.com</span> <span>Join: 01, Jun 2020</span>
                </td>
                <td>USER207 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">01, Oct 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=207&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=207&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/clic" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=207" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>22</td>
                <td><img src="../images/user/1.jpg" alt=""/>Ajey Reddy<span>ajeyreddy@gmail.com</span> <span>Join: 22, May 2020</span>
                </td>
                <td>USER199 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">22, Sep 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=199&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=199&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ajey-reddy" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=199" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>23</td>
                <td><img src="../images/user/1.jpg" alt=""/>Nagarjun<span>nagarjuna199317@gmail.com</span> <span>Join: 22, May 2020</span>
                </td>
                <td>USER197 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">22, Sep 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=197&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=197&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/nagarjun" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=197" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>24</td>
                <td><img src="../images/user/1.jpg" alt=""/>Sarvar Djuraev<span>yunirgataullin@gmail.com</span> <span>Join: 22, May 2020</span>
                </td>
                <td>USER196 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">22, Jul 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=196&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=196&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/sarvar-djuraev" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=196" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>25</td>
                <td><img src="../images/user/1.jpg" alt=""/>Bahroz<span>b7114@yahoo.com</span> <span>Join: 16, May 2020</span>
                </td>
                <td>USER187 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">16, Jul 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=187&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=187&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/bahroz" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=187" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>26</td>
                <td><img src="../images/user/1.jpg" alt=""/>Fuad<span>fuadma@outlook.com</span> <span>Join: 13, May 2020</span>
                </td>
                <td>USER186 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">13, Jul 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=186&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=186&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/fuad" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=186" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>27</td>
                <td><img src="../images/user/51118barranquilla.jpg" alt=""/>maria clara<span>maclavr@yahoo.com</span> <span>Join: 29, Apr 2020</span>
                </td>
                <td>USER164 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">29, Jun 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=164&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=164&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/maria-clara" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=164" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>28</td>
                <td><img src="../images/user/1.jpg" alt=""/>Will smith<span>vijayamudhavalli@gmail.com</span> <span>Join: 09, Apr 2020</span>
                </td>
                <td>USER144 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">09, Aug 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=144&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=144&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/will-smith" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=144" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>29</td>
                <td><img src="../images/user/1.jpg" alt=""/>Vijay<span>Vijay.bahuguna1996@gmail.com</span> <span>Join: 04, Apr 2020</span>
                </td>
                <td>USER136 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">04, Aug 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=136&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=136&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/vijay" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=136" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>30</td>
                <td><img src="../images/user/1.jpg" alt=""/>ninjacoder1<span>vtswork19@gmail.com</span> <span>Join: 21, Mar 2020</span>
                </td>
                <td>USER129 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">21, May 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=129&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=129&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ninjacoder1" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=129" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>31</td>
                <td><img src="../images/user/1.jpg" alt=""/>Rhobos<span>admin@rhobositsolutions.com</span> <span>Join: 27, Feb 2020</span>
                </td>
                <td>USER104 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">27, Apr 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=104&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=104&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/rhobos" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=104" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>32</td>
                <td><img src="../images/user/1.jpg" alt=""/>gan.test2019@gmail.com<span>gan.test2019@gmail.com</span> <span>Join: 22, Feb 2020</span>
                </td>
                <td>USER097 </td>
                <td><span className="db-list-rat">Premium</span></td>
                <td><span className="db-list-ststus">22, May 2020</span></td>
                <td><span className="db-list-rat">$19</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=97&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=97&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/gan.test2019@gmail.com" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=97" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>33</td>
                <td><img src="../images/user/1.jpg" alt=""/>eee<span>eee@gmail.com</span> <span>Join: 07, Feb 2020</span>
                </td>
                <td>USER085 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">07, Apr 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=85&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=85&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/eee" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=85" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>34</td>
                <td><img src="../images/user/1.jpg" alt=""/>ma inim<span>shanjbin@yahoo.com</span> <span>Join: 25, Jan 2020</span>
                </td>
                <td>USER072 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">25, May 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=72&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=72&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ma-inim" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=72" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>35</td>
                <td><img src="../images/user/1.jpg" alt=""/>AB<span>jali@jali.com</span> <span>Join: 25, Jan 2020</span>
                </td>
                <td>USER071 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">25, Mar 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=71&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=71&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ab" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=71" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>36</td>
                <td><img src="../images/user/1.jpg" alt=""/>Adem<span>adem.yilmaz66@hotmail.com</span> <span>Join: 21, Jan 2020</span>
                </td>
                <td>USER061 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">21, May 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=61&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=61&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/adem" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=61" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>37</td>
                <td><img src="../images/user/73864pexels-photo-372042.jpeg" alt=""/>Rebecca G Torres<span>rebecca@gmail.com</span> <span>Join: 07, Jan 2020</span>
                </td>
                <td>USER045 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">07, May 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=45&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=45&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/rebecca-g-torres" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=45" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>38</td>
                <td><img src="../images/user/33654pexels-photo-91227.jpeg" alt=""/>Claude D Dial<span>claude@business.com</span> <span>Join: 07, Jan 2020</span>
                </td>
                <td>USER044 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">07, May 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=44&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=44&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=44" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>39</td>
                <td><img src="../images/user/9546049785pexels-photo-1130625.jpeg" alt=""/>Leland K Cotter<span>cotter@business.com</span> <span>Join: 30, Aug 2020</span>
                </td>
                <td>USER043 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">30, Dec 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=43&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=43&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=43" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>40</td>
                <td><img src="../images/user/8766pexels-photo-774909.jpeg" alt=""/>Betty D Friedman<span>friedman@business.com</span> <span>Join: 07, Jan 2020</span>
                </td>
                <td>USER042 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">07, May 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=42&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=42&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/betty-d-friedman" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=42" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>41</td>
                <td><img src="../images/user/63520pexels-photo-1130626.jpeg" alt=""/>Rachel<span>rachel@business.com</span> <span>Join: 07, Jan 2020</span>
                </td>
                <td>USER041 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">07, May 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=41&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=41&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=41" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>42</td>
                <td><img src="../images/user/62736rn53themes.png" alt=""/>Rn53 Themes<span>rn53themes@gmail.com</span> <span>Join: 26, Mar 2021</span>
                </td>
                <td>USER037 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">26, Jul 2021</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=37&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=37&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=37" className="db-list-edit">More</a></td>
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
