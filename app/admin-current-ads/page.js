import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Current running ads</span>
        <div className="ud-cen-s2">
          <h2>Current Ads</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Ad Position</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Payment cost</th>
                <th>Payment Date</th>
                <th>Send Invoice</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Home page Bottom</td>
                <td>11, Sep 2020</td>
                <td>23, Sep 2020</td>
                <td>$840</td>
                <td>11, Sep 2020</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-ads-edit.html?row=44&path=1" className="db-list-edit">Edit</a></td>
                <td><a href="admin-ads-delete.html?row=44&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>All listing page Top</td>
                <td>17, Jun 2020</td>
                <td>30, Jun 2022</td>
                <td>$37150</td>
                <td>17, Jun 2020</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-ads-edit.html?row=34&path=1" className="db-list-edit">Edit</a></td>
                <td><a href="admin-ads-delete.html?row=34&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Listing detail page Bottom</td>
                <td>03, Jun 2020</td>
                <td>23, Jul 2020</td>
                <td>$2000</td>
                <td>03, Jun 2020</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-ads-edit.html?row=31&path=1" className="db-list-edit">Edit</a></td>
                <td><a href="admin-ads-delete.html?row=31&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td>All listing page Bottom</td>
                <td>01, Jun 2020</td>
                <td>23, Mar 2023</td>
                <td>$20495</td>
                <td>01, Jun 2020</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-ads-edit.html?row=27&path=1" className="db-list-edit">Edit</a></td>
                <td><a href="admin-ads-delete.html?row=27&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Home page Bottom</td>
                <td>27, May 2020</td>
                <td>10, Jun 2020</td>
                <td>$964</td>
                <td>28, May 2020</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-ads-edit.html?row=25&path=1" className="db-list-edit">Edit</a></td>
                <td><a href="admin-ads-delete.html?row=25&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td>All listing page Left</td>
                <td>06, May 2020</td>
                <td>18, Jun 2020</td>
                <td>$2994</td>
                <td>06, May 2020</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-ads-edit.html?row=21&path=1" className="db-list-edit">Edit</a></td>
                <td><a href="admin-ads-delete.html?row=21&path=1" className="db-list-edit">Delete</a></td>
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
