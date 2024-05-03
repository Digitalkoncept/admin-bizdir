import React from 'react'

const page = () => {
  return (
 <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Sent Invoices</span>
        <div className="ud-cen-s2">
          <h2>Your shared Invoices</h2>
          <a href="admin-invoice-create.html" className="db-tit-btn">Create new invoice</a>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>User Name</th>
                <th>Plan type</th>
                <th>Amount</th>
                {/*                                    <th>Date</th>*/}
                <th>Delete</th>
                <th>Download Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img src="../images/user/475847.jpg" alt=""/>test <span>Send on: 11, Sep 2020</span></td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-rat">$250</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/98981invoice-(2).pdf" download="test-Invoice-1599809444" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><img src="../images/user/9546049785pexels-photo-1130625.jpeg" alt=""/>Leland K Cotter <span>Send on: 11, Feb 2020</span></td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-rat">$15</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/" download="Leland K Cotter-Invoice-1581402758" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><img src="../images/user/9546049785pexels-photo-1130625.jpeg" alt=""/>Leland K Cotter <span>Send on: 13, Jan 2020</span></td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-rat">$120</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/67445invoice-(7).pdf" download="Leland K Cotter-Invoice-1578938600" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><img src="../images/user/9546049785pexels-photo-1130625.jpeg" alt=""/>Leland K Cotter <span>Send on: 13, Jan 2020</span></td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-rat">$150</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/68943invoice-(6).pdf" download="Leland K Cotter-Invoice-1578938531" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><img src="../images/user/62736rn53themes.png" alt=""/>Rn53 Themes <span>Send on: 29, Dec 2019</span></td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-rat">$15</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/" download="Rn53 Themes-Invoice-1577558262" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td><img src="../images/user/62736rn53themes.png" alt=""/>Rn53 Themes <span>Send on: 28, Dec 2019</span></td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-rat">$120</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/25142invoice-(5).pdf" download="Rn53 Themes-Invoice-1577557641" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td><img src="../images/user/62736rn53themes.png" alt=""/>Rn53 Themes <span>Send on: 28, Dec 2019</span></td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-rat">$50</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/60279invoice-(4).pdf" download="Rn53 Themes-Invoice-1577557007" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td><img src="../images/user/62736rn53themes.png" alt=""/>Rn53 Themes <span>Send on: 28, Dec 2019</span></td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-rat">$150</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/66625invoice-(4).pdf" download="Rn53 Themes-Invoice-1577556969" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td><img src="../images/user/74755pexels-photo-1130626.jpeg" alt=""/>Directory Finder <span>Send on: 19, Dec 2019</span></td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-rat">$1000</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/36358invoice-(3).pdf" download="Directory Finder-Invoice-1576776368" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td><img src="../images/user/475847.jpg" alt=""/> <span>Send on: 18, Dec 2019</span></td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-rat">$500</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/31924invoice-(1).pdf" download="-Invoice-1576639417" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td><img src="../images/user/74755pexels-photo-1130626.jpeg" alt=""/>Directory Finder <span>Send on: 08, Dec 2019</span></td>
                <td><span className="db-list-rat">Premium Plus</span></td>
                <td><span className="db-list-rat">$4000</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/" download="Directory Finder-Invoice-1575779867" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td><img src="../images/user/475847.jpg" alt=""/> <span>Send on: 23, Nov 2019</span></td>
                <td><span className="db-list-rat">Standard</span></td>
                <td><span className="db-list-rat">$10</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/" download="-Invoice-1574532386" className="db-list-edit">Download</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td><img src="../images/user/475847.jpg" alt=""/> <span>Send on: 08, Nov 2019</span></td>
                <td><span className="db-list-rat">Premium</span></td>
                <td><span className="db-list-rat">$4000</span></td>
                {/*                                    <td>*/}{/*</td>*/}
                <td><span className="db-list-edit">Delete</span></td>
                <td><a href="../images/invoices/" download="-Invoice-1573170240" className="db-list-edit">Download</a></td>
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
