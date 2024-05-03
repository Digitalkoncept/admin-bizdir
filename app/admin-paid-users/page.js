import React from 'react'

const page = () => {
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All Paid User Details</span>
        <div className="ud-cen-s2">
          <h2>All Paid Users - 01</h2>
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
                <td><img src="../images/user/74755pexels-photo-1130626.jpeg" alt=""/>Directory Finder<span>a@gmail.com</span> <span>Join: 07, Dec 2019</span>
                </td>
                <td>USER035 </td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-ststus">07, Apr 2020</span></td>
                <td><span className="db-list-rat">$20</span></td>
                <td>Service provider </td>
                <td><a href="admin-my-profile-edit.html?row=35&path=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=35&path=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=35" className="db-list-edit">More</a></td>
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
