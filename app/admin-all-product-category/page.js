import React from 'react'

const page = () => {
  return (
 <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Product Category</span>
        <div className="ud-cen-s2 hcat-cho">
          <h2>All Product Category</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <a href="admin-add-new-product-category.html" className="db-tit-btn">Add new product category</a>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Category Name</th>
                <th>Category Image</th>
                <th>Created date</th>
                <th>Product</th>
                <th>Sub Cate</th>
                <th>Edit</th>
                <th>View Sub Cate</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><b className="db-list-rat">Health</b></td>
                <td><img src="../images/services/72061bizpro2.jpeg" alt=""/></td>
                <td>27, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><span className="db-list-ststus">4</span></td>
                <td><a href="admin-product-category-edit.html?row=23" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=23" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=23" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><b className="db-list-rat">Mens</b></td>
                <td><img src="../images/services/88694springfield_illinois.jpg" alt=""/></td>
                <td>11, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">3</span></td>
                <td><span className="db-list-ststus">2</span></td>
                <td><a href="admin-product-category-edit.html?row=22" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=22" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=22" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><b className="db-list-rat">Fruits</b></td>
                <td><img src="../images/services/10484veggie-reu_l.jpg" alt=""/></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">2</span></td>
                <td><span className="db-list-ststus">3</span></td>
                <td><a href="admin-product-category-edit.html?row=21" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=21" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=21" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><b className="db-list-rat">Baby care</b></td>
                <td><img src="../images/services/6317210084pexels-photo-414807.jpeg" alt=""/></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><span className="db-list-ststus">0</span></td>
                <td><a href="admin-product-category-edit.html?row=20" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=20" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=20" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><b className="db-list-rat">Toys</b></td>
                <td><img src="../images/services/5303511503pexels-photo-2608517.jpeg" alt=""/></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">2</span></td>
                <td><span className="db-list-ststus">8</span></td>
                <td><a href="admin-product-category-edit.html?row=19" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=19" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=19" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td><b className="db-list-rat">Jewellery</b></td>
                <td><img src="../images/services/1548318945man-with-fireworks-769525.jpg" alt=""/></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><span className="db-list-ststus">0</span></td>
                <td><a href="admin-product-category-edit.html?row=18" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=18" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=18" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td><b className="db-list-rat">Shoes</b></td>
                <td><img src="../images/services/4151018945man-with-fireworks-769525.jpg" alt=""/></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">3</span></td>
                <td><span className="db-list-ststus">3</span></td>
                <td><a href="admin-product-category-edit.html?row=17" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=17" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=17" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td><b className="db-list-rat">Footwear</b></td>
                <td><img src="../images/services/7638818945man-with-fireworks-769525.jpg" alt=""/></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><span className="db-list-ststus">0</span></td>
                <td><a href="admin-product-category-edit.html?row=16" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=16" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=16" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td><b className="db-list-rat">Clothings</b></td>
                <td><img src="../images/services/6528218945man-with-fireworks-769525.jpg" alt=""/></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><span className="db-list-ststus">3</span></td>
                <td><a href="admin-product-category-edit.html?row=15" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=15" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=15" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td><b className="db-list-rat">Sports</b></td>
                <td><img src="../images/services/2.jpg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><span className="db-list-ststus">0</span></td>
                <td><a href="admin-product-category-edit.html?row=8" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=8" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=8" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td><b className="db-list-rat">Education</b></td>
                <td><img src="../images/services/6.jpg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">3</span></td>
                <td><span className="db-list-ststus">3</span></td>
                <td><a href="admin-product-category-edit.html?row=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=7" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=7" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td><img src="../images/services/5.jpg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">8</span></td>
                <td><span className="db-list-ststus">11</span></td>
                <td><a href="admin-product-category-edit.html?row=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=6" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=6" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td><b className="db-list-rat">Automobilers</b></td>
                <td><img src="../images/services/4.jpg" alt=""/></td>
                <td>29, Sep 2017</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">2</span></td>
                <td><span className="db-list-ststus">0</span></td>
                <td><a href="admin-product-category-edit.html?row=5" className="db-list-edit">Edit</a></td>
                <td><a href="admin-all-product-sub-category.html?cat=5" className="db-list-edit">View</a></td>
                <td><a href="admin-product-category-delete.html?row=5" className="db-list-edit">Delete</a></td>
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
