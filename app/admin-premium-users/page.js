import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Premium User Details</span>
        <div className="ud-cen-s2">
          <h2>Premium Users - 04</h2>
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
                <td>3</td>
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
                <td>4</td>
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
