import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Pricing details</span>
        <div className="ud-cen-s2">
          <h2>Pricing Plans</h2>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Plan name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Free</td>
                <td><span className="db-list-rat">Free</span></td>
                <td><span className="db-list-appro">Active</span></td>
                <td><a href="admin-price-edit.html?row=1" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Standard</td>
                <td><span className="db-list-rat">$9</span></td>
                <td><span className="db-list-appro">Active</span></td>
                <td><a href="admin-price-edit.html?row=2" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Premium</td>
                <td><span className="db-list-rat">$19</span></td>
                <td><span className="db-list-appro">Active</span></td>
                <td><a href="admin-price-edit.html?row=3" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Premium Plus</td>
                <td><span className="db-list-rat">$20</span></td>
                <td><span className="db-list-appro">Active</span></td>
                <td><a href="admin-price-edit.html?row=4" className="db-list-edit">Edit</a></td>
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
