import React from 'react'

const page = () => {
  return (
  <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Standard user details</span>
        <div className="ud-cen-s2">
          <h2>Standard user - 16</h2>
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
                <td><img src="../images/user/1980us4.jpg" alt=""/>Abhinav <span>sonic@gmail.com</span><span>Join: 13, Mar 2021</span>
                </td>
                <td>USER334 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">13, May 2021</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=334&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=334&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/abhinav2" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=334" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><img src="../images/user/36078us5.jpg" alt=""/>abhinav <span>abhinavkumar@142010.gmail.com</span><span>Join: 13, Mar 2021</span>
                </td>
                <td>USER333 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">13, May 2021</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=333&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=333&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/abhinav1" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=333" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><img src="../images/user/1.jpg" alt=""/>Srikanth <span>srikanth.aeroz@gmail.com</span><span>Join: 15, Sep 2020</span>
                </td>
                <td>USER302 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">15, Nov 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=302&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=302&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/srikanth" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=302" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><img src="../images/user/1.jpg" alt=""/>admin <span>admin@demo.com</span><span>Join: 11, Sep 2020</span>
                </td>
                <td>USER297 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">11, Nov 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=297&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=297&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/admin" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=297" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><img src="../images/user/26250ecommerce.png" alt=""/>Banwari <span>banwarigarhwal1@gmail.com</span><span>Join: 26, Jul 2020</span>
                </td>
                <td>USER258 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">26, Sep 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=258&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=258&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/banwari" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=258" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td><img src="../images/user/1.jpg" alt=""/>aklsdjf <span>paul_anthonyr@hotmail.com</span><span>Join: 25, Jul 2020</span>
                </td>
                <td>USER257 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">25, Sep 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=257&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=257&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/aklsdjf" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=257" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td><img src="../images/user/1.jpg" alt=""/>Test Hector <span>fhfghfgrt@dnawr.com</span><span>Join: 21, Jul 2020</span>
                </td>
                <td>USER254 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">21, Sep 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=254&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=254&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/test-hector" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=254" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td><img src="../images/user/1.jpg" alt=""/>ahmad <span>ahmad@favista.com</span><span>Join: 26, Jun 2020</span>
                </td>
                <td>USER234 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">26, Aug 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=234&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=234&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ahmad" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=234" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td><img src="../images/user/1.jpg" alt=""/>Sarvar Djuraev <span>yunirgataullin@gmail.com</span><span>Join: 22, May 2020</span>
                </td>
                <td>USER196 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">22, Jul 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=196&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=196&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/sarvar-djuraev" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=196" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td><img src="../images/user/1.jpg" alt=""/>Bahroz <span>b7114@yahoo.com</span><span>Join: 16, May 2020</span>
                </td>
                <td>USER187 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">16, Jul 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=187&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=187&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/bahroz" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=187" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td><img src="../images/user/1.jpg" alt=""/>Fuad <span>fuadma@outlook.com</span><span>Join: 13, May 2020</span>
                </td>
                <td>USER186 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">13, Jul 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=186&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=186&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/fuad" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=186" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td><img src="../images/user/51118barranquilla.jpg" alt=""/>maria clara <span>maclavr@yahoo.com</span><span>Join: 29, Apr 2020</span>
                </td>
                <td>USER164 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">29, Jun 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=164&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=164&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/maria-clara" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=164" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td><img src="../images/user/1.jpg" alt=""/>ninjacoder1 <span>vtswork19@gmail.com</span><span>Join: 21, Mar 2020</span>
                </td>
                <td>USER129 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">21, May 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=129&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=129&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ninjacoder1" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=129" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td><img src="../images/user/1.jpg" alt=""/>Rhobos <span>admin@rhobositsolutions.com</span><span>Join: 27, Feb 2020</span>
                </td>
                <td>USER104 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">27, Apr 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=104&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=104&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/rhobos" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=104" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>15</td>
                <td><img src="../images/user/1.jpg" alt=""/>eee <span>eee@gmail.com</span><span>Join: 07, Feb 2020</span>
                </td>
                <td>USER085 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">07, Apr 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=85&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=85&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/eee" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=85" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>16</td>
                <td><img src="../images/user/1.jpg" alt=""/>AB <span>jali@jali.com</span><span>Join: 25, Jan 2020</span>
                </td>
                <td>USER071 </td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-ststus">25, Mar 2020</span></td>
                <td><span className="db-list-rat">$9</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=71&path=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=71&path=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ab" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=71" className="db-list-edit">More</a></td>
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
