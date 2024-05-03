import React from 'react'

const page = () => {
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Coupons and deals</span>
        <div className="ud-cen-s2">
          <h2>All Coupons details</h2>
          <a href="admin-add-new-coupons.html" className="db-tit-btn">Add new Coupons</a>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Coupon Name</th>
                <th>Coupon Code</th>
                <th>Created by</th>
                <th>Expiry date</th>
                <th>Views</th>
                <th>Viewers list</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>New Coupon<span>30, Dec 2020</span></td>
                <td>50% off</td>
                <td><a href="http://localhost/directory/bizbook/profile/risly" className="db-list-ststus" target="_blank">Risly</a></td>
                <td>01, Jan 2021</td>
                <td><span className="db-list-rat">5</span></td>
                <td><a href="admin-coupons-viewers.html?row=1" className="db-list-edit">View</a></td>
                <td><a href="admin-edit-coupons.html?row=1" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-coupons.html?row=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Awesome Coupon<span>30, Dec 2020</span></td>
                <td>GET80</td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                <td>07, Feb 2021</td>
                <td><span className="db-list-rat">1</span></td>
                <td><a href="admin-coupons-viewers.html?row=2" className="db-list-edit">View</a></td>
                <td><a href="admin-edit-coupons.html?row=2" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-coupons.html?row=2" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Better Coupon<span>30, Dec 2020</span></td>
                <td>50% off</td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                <td>10, Jan 2021</td>
                <td><span className="db-list-rat">4</span></td>
                <td><a href="admin-coupons-viewers.html?row=5" className="db-list-edit">View</a></td>
                <td><a href="admin-edit-coupons.html?row=5" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-coupons.html?row=5" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Bizbook 50% Offer<span>10, Jan 2021</span></td>
                <td>BIZ50%</td>
                <td><a href="http://localhost/directory/bizbook/profile/" className="db-list-ststus" target="_blank" /></td>
                <td>23, Dec 2021</td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-coupons-viewers.html?row=6" className="db-list-edit">View</a></td>
                <td><a href="admin-edit-coupons.html?row=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-coupons.html?row=6" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Rn53 Themes Offers<span>10, Jan 2021</span></td>
                <td>RN53OFF30%</td>
                <td><a href="http://localhost/directory/bizbook/profile/" className="db-list-ststus" target="_blank" /></td>
                <td>25, Mar 2021</td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-coupons-viewers.html?row=7" className="db-list-edit">View</a></td>
                <td><a href="admin-edit-coupons.html?row=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-coupons.html?row=7" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Trends<span>11, Mar 2021</span></td>
                <td>05468</td>
                <td><a href="http://localhost/directory/bizbook/profile/" className="db-list-ststus" target="_blank" /></td>
                <td>26, Mar 2021</td>
                <td><span className="db-list-rat">1</span></td>
                <td><a href="admin-coupons-viewers.html?row=8" className="db-list-edit">View</a></td>
                <td><a href="admin-edit-coupons.html?row=8" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-coupons.html?row=8" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Reliance fresh <span>12, Mar 2021</span></td>
                <td>56003</td>
                <td><a href="http://localhost/directory/bizbook/profile/" className="db-list-ststus" target="_blank" /></td>
                <td>31, Mar 2021</td>
                <td><span className="db-list-rat">2</span></td>
                <td><a href="admin-coupons-viewers.html?row=9" className="db-list-edit">View</a></td>
                <td><a href="admin-edit-coupons.html?row=9" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-coupons.html?row=9" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Bizbook 50% Off<span>09, Apr 2021</span></td>
                <td>Biz50</td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td>16, Apr 2021</td>
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-coupons-viewers.html?row=10" className="db-list-edit">View</a></td>
                <td><a href="admin-edit-coupons.html?row=10" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-coupons.html?row=10" className="db-list-edit">Delete</a></td>
              </tr>
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
