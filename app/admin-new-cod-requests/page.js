import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">New COD Requests</span>
        <div className="ud-cen-s2">
          <h2>COD Requests - 00</h2>
          <a href="admin-add-new-user.html" className="db-tit-btn">Add new user</a>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>User Name</th>
                <th>Plan type</th>
                <th>Phone</th>
                <th>Payment type</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Bill info</th>
                <th>More info</th>
                <th>Approve</th>
                <th>Reject</th>
                <th>Create Invoice</th>
                <th>Send Invoice</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
      <div className="ad-pgnat">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
