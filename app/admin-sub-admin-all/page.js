import React from 'react'

const page = () => {
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Sub admins</span>
        <div className="ud-cen-s2">
          <h2>All Sub Admins</h2>
          <a href="admin-sub-admin-create.html" className="db-tit-btn">Add new Sub Admin</a>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>User</th>
                <th>User Name</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>View log</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img src="../images/user/6.jpg" alt=""/>bizbook                                    <span>08, Jan 2020</span></td>
                <td>bizbook</td>
                <td>**********</td>
                <td><a href="admin-sub-admin-edit.html?row=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-admin-delete.html?row=7" className="db-list-edit">Delete</a></td>
                <td><a href="admin-sub-admin-log.html?row=7" className="db-list-edit">View log</a></td>
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
