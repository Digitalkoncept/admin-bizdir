import React from 'react'

const page = () => {
  return (
  <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Listing Category</span>
        <div className="ud-cen-s2 hcat-cho">
          <h2>All Listing Category</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <a href="admin-add-new-category.html" className="db-tit-btn">Add New Listing Category</a>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Category Name</th>
                <th>Category Image</th>
                <th>Created date</th>
                <th>Listing</th>
                <th>Sub Cate</th>
                <th>Edit</th>
                <th>View Sub Cate</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><b className="db-list-rat">Wedding halls</b></td>
                <td><img src="../images/services/48466ser4.jpg" alt=""/></td>
                <td>05, Oct 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">4</span></td>
                <td><span className="db-list-ststus">5</span></td>
                <td><a href="admin-category-edit.html?row=19" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=19" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=19" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><b className="db-list-rat">Hotel &amp; Food</b></td>
                <td><img src="../images/services/2864815.jpg" alt=""/></td>
                <td>05, Oct 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><span className="db-list-ststus">0</span></td>
                <td><a href="admin-category-edit.html?row=18" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=18" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=18" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><b className="db-list-rat">Pet shop</b></td>
                <td><img src="../images/services/45505pexels-photo-1485637.jpeg" alt=""/></td>
                <td>19, Dec 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">12</span></td>
                <td><span className="db-list-ststus">0</span></td>
                <td><a href="admin-category-edit.html?row=17" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=17" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=17" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><b className="db-list-rat">Digital Products</b></td>
                <td><img src="../images/services/45789pexels-photo-572056.jpeg" alt=""/></td>
                <td>15, Dec 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">31</span></td>
                <td><span className="db-list-ststus">3</span></td>
                <td><a href="admin-category-edit.html?row=16" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=16" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=16" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><b className="db-list-rat">Spa and Facial</b></td>
                <td><img src="../images/services/56711woman-girl-beauty-mask.jpg" alt=""/></td>
                <td>08, Dec 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">10</span></td>
                <td><span className="db-list-ststus">8</span></td>
                <td><a href="admin-category-edit.html?row=15" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=15" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=15" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td><b className="db-list-rat">Real Estate</b></td>
                <td><img src="../images/services/35076pexels-photo-1643389.jpeg" alt=""/></td>
                <td>03, Jun 2018</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">23</span></td>
                <td><span className="db-list-ststus">3</span></td>
                <td><a href="admin-category-edit.html?row=10" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=10" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=10" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td><b className="db-list-rat">Sports</b></td>
                <td><img src="../images/services/40496pexels-photo-248547.jpeg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">5</span></td>
                <td><span className="db-list-ststus">3</span></td>
                <td><a href="admin-category-edit.html?row=8" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=8" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=8" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td><b className="db-list-rat">Education</b></td>
                <td><img src="../images/services/3272kids-girl-pencil-drawing-159823.jpeg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">2</span></td>
                <td><span className="db-list-ststus">5</span></td>
                <td><a href="admin-category-edit.html?row=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=7" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=7" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td><img src="../images/services/81954pexels-photo-171428.jpeg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">5</span></td>
                <td><span className="db-list-ststus">2</span></td>
                <td><a href="admin-category-edit.html?row=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=6" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=6" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td><b className="db-list-rat">Automobiles</b></td>
                <td><img src="../images/services/44716pexels-denys-gromov-4502383.jpg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">6</span></td>
                <td><span className="db-list-ststus">4</span></td>
                <td><a href="admin-category-edit.html?row=5" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=5" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=5" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td><b className="db-list-rat">Transportation</b></td>
                <td><img src="../images/services/64606930359.jpg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">2</span></td>
                <td><span className="db-list-ststus">3</span></td>
                <td><a href="admin-category-edit.html?row=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=3" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=3" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td><b className="db-list-rat">Hospitals</b></td>
                <td><img src="../images/services/21100pexels-photo-263402.jpeg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">8</span></td>
                <td><span className="db-list-ststus">3</span></td>
                <td><a href="admin-category-edit.html?row=2" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=2" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=2" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td><b className="db-list-rat">Hotels And Resorts</b></td>
                <td><img src="../images/services/6908895787pexels-asad-photo-maldives-1450363.jpg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">9</span></td>
                <td><span className="db-list-ststus">6</span></td>
                <td><a href="admin-category-edit.html?row=1" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-sub-category.html?cat=1" className="db-list-edit">View</a></td>
                <td><a href="admin-category-delete.html?row=1" className="db-list-edit">Delete</a></td>
              </tr>
              {/*                                <tr>*/}
              {/*                                    <td>2</td>*/}
              {/*                                    <td><b class="db-list-rat">Car service centers</b></td>*/}
              {/*                                    <td><img src="../images/services/1.jpg" alt=""></td>*/}
              {/*									<td>8 June 2025</td>*/}
              {/*                                    <td><span class="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">576</span></td>*/}
              {/*                                    <td><span class="db-list-ststus">12</span></td>*/}
              {/*									<td><a href="admin-category-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*                                    <td><a href="admin-view-sub-category.html" class="db-list-edit">View</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*								</tr>*/}
              {/*                                <tr>*/}
              {/*                                    <td>3</td>*/}
              {/*                                    <td><b class="db-list-rat">Schools</b></td>*/}
              {/*                                    <td><img src="../images/services/2.jpg" alt=""></td>*/}
              {/*									<td>8 June 2025</td>*/}
              {/*                                    <td><span class="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">759</span></td>*/}
              {/*                                    <td><span class="db-list-ststus">12</span></td>*/}
              {/*									<td><a href="admin-category-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*                                    <td><a href="admin-view-sub-category.html" class="db-list-edit">View</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*								</tr>*/}
              {/*                                <tr>*/}
              {/*                                    <td>4</td>*/}
              {/*                                    <td><b class="db-list-rat">Hotels and Restrants</b></td>*/}
              {/*                                    <td><img src="../images/services/4.jpg" alt=""></td>*/}
              {/*									<td>8 June 2025</td>*/}
              {/*                                    <td><span class="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">864</span></td>*/}
              {/*                                    <td><span class="db-list-ststus">12</span></td>*/}
              {/*									<td><a href="admin-category-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*                                    <td><a href="admin-view-sub-category.html" class="db-list-edit">View</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*								</tr>*/}
              {/*                                <tr>*/}
              {/*                                    <td>5</td>*/}
              {/*                                    <td><b class="db-list-rat">Web design company</b></td>*/}
              {/*                                    <td><img src="../images/services/5.jpg" alt=""></td>*/}
              {/*									<td>8 June 2025</td>*/}
              {/*                                    <td><span class="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">45</span></td>*/}
              {/*                                    <td><span class="db-list-ststus">12</span></td>*/}
              {/*									<td><a href="admin-category-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*                                    <td><a href="admin-view-sub-category.html" class="db-list-edit">View</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*								</tr>*/}
              {/*                                <tr>*/}
              {/*                                    <td>6</td>*/}
              {/*                                    <td><b class="db-list-rat">Play schools</b></td>*/}
              {/*                                    <td><img src="../images/services/6.jpg" alt=""></td>*/}
              {/*									<td>8 June 2025</td>*/}
              {/*                                    <td><span class="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">54</span></td>*/}
              {/*                                    <td><span class="db-list-ststus">12</span></td>*/}
              {/*									<td><a href="admin-category-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*                                    <td><a href="admin-view-sub-category.html" class="db-list-edit">View</a></td>*/}
              {/*									<td><span class="db-list-edit">Delete</span></td>*/}
              {/*								</tr>*/}
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
