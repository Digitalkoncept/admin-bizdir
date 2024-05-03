import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All Payments</span>
        <div className="ud-cen-s2">
          <h2>All Payments</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>User</th>
                <th>Plan</th>
                <th>Payment Amount</th>
                <th>Payment Mode</th>
                <th>Payment Date</th>
                <th>Invoice</th>
                <th>Create Invoice</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img src="../images/user/475847.jpg" alt=""/>test<span>regedi5408@mado34.com</span><span>Join:22, Jul 2020</span>
                </td>
                <td>Standard Plan</td>
                <td>250 USD</td>
                <td>PayPal</td>
                <td>11, Sep 2020</td>
                <td><a href="../images/invoices/98981invoice-(2).pdf" download="test-Invoice-1599809444" className="db-invo-dwn">Download Invoice</a></td>
                <td><a href="#" className="db-list-rat"> N/A </a></td>
                <td><a href="admin-all-payment-delete.html?row=17&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><img src="../images/user/9546049785pexels-photo-1130625.jpeg" alt=""/>Leland K Cotter<span>cotter@business.com</span><span>Join:30, Aug 2020</span>
                </td>
                <td>Premium Plus Plan</td>
                <td>15 USD</td>
                <td>PayPal</td>
                <td>11, Feb 2020</td>
                <td>N/A</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-all-payment-delete.html?row=16&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><img src="../images/user/9546049785pexels-photo-1130625.jpeg" alt=""/>Leland K Cotter<span>cotter@business.com</span><span>Join:30, Aug 2020</span>
                </td>
                <td>Premium Plus Plan</td>
                <td>120 USD</td>
                <td>PayPal</td>
                <td>13, Jan 2020</td>
                <td><a href="../images/invoices/67445invoice-(7).pdf" download="Leland K Cotter-Invoice-1578938600" className="db-invo-dwn">Download Invoice</a></td>
                <td><a href="#" className="db-list-rat"> N/A </a></td>
                <td><a href="admin-all-payment-delete.html?row=15&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><img src="../images/user/9546049785pexels-photo-1130625.jpeg" alt=""/>Leland K Cotter<span>cotter@business.com</span><span>Join:30, Aug 2020</span>
                </td>
                <td>Premium Plus Plan</td>
                <td>150 USD</td>
                <td>PayPal</td>
                <td>13, Jan 2020</td>
                <td><a href="../images/invoices/68943invoice-(6).pdf" download="Leland K Cotter-Invoice-1578938531" className="db-invo-dwn">Download Invoice</a></td>
                <td><a href="#" className="db-list-rat"> N/A </a></td>
                <td><a href="admin-all-payment-delete.html?row=14&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><img src="../images/user/62736rn53themes.png" alt=""/>Rn53 Themes<span>rn53themes@gmail.com</span><span>Join:26, Mar 2021</span>
                </td>
                <td>Premium Plus Plan</td>
                <td>15 USD</td>
                <td>PayPal</td>
                <td>29, Dec 2019</td>
                <td>N/A</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-all-payment-delete.html?row=13&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td><img src="../images/user/62736rn53themes.png" alt=""/>Rn53 Themes<span>rn53themes@gmail.com</span><span>Join:26, Mar 2021</span>
                </td>
                <td>Premium Plus Plan</td>
                <td>120 USD</td>
                <td>PayPal</td>
                <td>28, Dec 2019</td>
                <td><a href="../images/invoices/25142invoice-(5).pdf" download="Rn53 Themes-Invoice-1577557641" className="db-invo-dwn">Download Invoice</a></td>
                <td><a href="#" className="db-list-rat"> N/A </a></td>
                <td><a href="admin-all-payment-delete.html?row=12&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td><img src="../images/user/62736rn53themes.png" alt=""/>Rn53 Themes<span>rn53themes@gmail.com</span><span>Join:26, Mar 2021</span>
                </td>
                <td>Premium Plus Plan</td>
                <td>50 USD</td>
                <td>PayPal</td>
                <td>28, Dec 2019</td>
                <td><a href="../images/invoices/60279invoice-(4).pdf" download="Rn53 Themes-Invoice-1577557007" className="db-invo-dwn">Download Invoice</a></td>
                <td><a href="#" className="db-list-rat"> N/A </a></td>
                <td><a href="admin-all-payment-delete.html?row=11&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td><img src="../images/user/62736rn53themes.png" alt=""/>Rn53 Themes<span>rn53themes@gmail.com</span><span>Join:26, Mar 2021</span>
                </td>
                <td>Premium Plus Plan</td>
                <td>150 USD</td>
                <td>PayPal</td>
                <td>28, Dec 2019</td>
                <td><a href="../images/invoices/66625invoice-(4).pdf" download="Rn53 Themes-Invoice-1577556969" className="db-invo-dwn">Download Invoice</a></td>
                <td><a href="#" className="db-list-rat"> N/A </a></td>
                <td><a href="admin-all-payment-delete.html?row=10&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td><img src="../images/user/74755pexels-photo-1130626.jpeg" alt=""/>Directory Finder<span>a@gmail.com</span><span>Join:07, Dec 2019</span>
                </td>
                <td>Premium Plus Plan</td>
                <td>1000 USD</td>
                <td>PayPal</td>
                <td>19, Dec 2019</td>
                <td><a href="../images/invoices/36358invoice-(3).pdf" download="Directory Finder-Invoice-1576776368" className="db-invo-dwn">Download Invoice</a></td>
                <td><a href="#" className="db-list-rat"> N/A </a></td>
                <td><a href="admin-all-payment-delete.html?row=9&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td><img src="../images/user/475847.jpg" alt=""/><span /><span>Join:01, Jan 1970</span>
                </td>
                <td>Standard Plan</td>
                <td>500 USD</td>
                <td>PayPal</td>
                <td>18, Dec 2019</td>
                <td><a href="../images/invoices/31924invoice-(1).pdf" download="-Invoice-1576639417" className="db-invo-dwn">Download Invoice</a></td>
                <td><a href="#" className="db-list-rat"> N/A </a></td>
                <td><a href="admin-all-payment-delete.html?row=8&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td><img src="../images/user/74755pexels-photo-1130626.jpeg" alt=""/>Directory Finder<span>a@gmail.com</span><span>Join:07, Dec 2019</span>
                </td>
                <td>Premium Plus Plan</td>
                <td>4000 USD</td>
                <td>PayPal</td>
                <td>08, Dec 2019</td>
                <td>N/A</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-all-payment-delete.html?row=7&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td><img src="../images/user/475847.jpg" alt=""/><span /><span>Join:01, Jan 1970</span>
                </td>
                <td>Standard Plan</td>
                <td>10 USD</td>
                <td>PayPal</td>
                <td>23, Nov 2019</td>
                <td>N/A</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-all-payment-delete.html?row=6&path=1" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td><img src="../images/user/475847.jpg" alt=""/><span /><span>Join:01, Jan 1970</span>
                </td>
                <td>Premium Plan</td>
                <td>4000 CND</td>
                <td>PayPal</td>
                <td>08, Nov 2019</td>
                <td>N/A</td>
                <td><a href="admin-invoice-create.html" className="db-list-rat">Send</a></td>
                <td><a href="admin-all-payment-delete.html?row=1&path=1" className="db-list-edit">Delete</a></td>
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
