import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">products</span>
        <div className="ud-cen-s2">
          <h2>product details</h2>
          
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>product Name</th>
                <th>product Date</th>
                <th>Created by</th>
                <th>Views</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>CHAMPIONS OF INDIA RUN-RIDE-WALK <span>12, Mar 2021</span></td>
                <td>21, Mar 2021</td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-product.html?row=48" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?row=48" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/product/champions-of-india-run-ride-walk" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>INDIA VS ENGLAND <span>11, Mar 2021</span></td>
                <td>12, Mar 2021</td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">9</span></td>
                <td><a href="admin-edit-product.html?row=45" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?row=45" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/product/india-vs-england" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jackson music product 2021 <span>11, Mar 2021</span></td>
                <td>22, Apr 2021</td>
                <td><a href="http://localhost/directory/bizbook/profile/loki" className="db-list-ststus" target="_blank">Loki</a></td>
                <td><span className="db-list-rat">9</span></td>
                <td><a href="admin-edit-product.html?row=44" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?row=44" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/product/jackson-music-product-2021" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>22</td>
                <td>Lunar New Year 2020 <span>07, Jan 2020</span></td>
                <td>07, Jan 2020</td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                <td><span className="db-list-rat">13</span></td>
                <td><a href="admin-edit-product.html?row=18" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?row=18" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/product/lunar-new-year-2020" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>23</td>
                <td>Online Marketers Meet-Up <span>25, Dec 2019</span></td>
                <td>31, Dec 2019</td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-edit-product.html?row=17" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?row=17" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/product/online-marketers-meet-up" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>24</td>
                <td>New year celebration 2020 <span>15, Dec 2019</span></td>
                <td>28, Dec 2019</td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                <td><span className="db-list-rat">23</span></td>
                <td><a href="admin-edit-product.html?row=13" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?row=13" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/product/new-year-celebration-2020" className="db-list-edit" target="_blank">Preview</a></td>
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
