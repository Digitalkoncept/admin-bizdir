import React from 'react'

const page = () => {
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Product Sub Categories</span>
        <div className="ud-cen-s2 hcat-cho">
          <h2>All Product Sub Categories</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <a href="admin-add-new-product-sub-category.html" className="db-tit-btn">Add new product sub category</a>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Sub Category Name</th>
                <th>Main Category Name</th>
                <th>Created date</th>
                <th>Products</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><b className="db-list-rat">KRISHNA</b></td>
                <td><b className="db-list-rat">Toys</b></td>
                <td>27, Mar 2021</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=44" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=44" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><b className="db-list-rat">Electric toys</b></td>
                <td><b className="db-list-rat">Toys</b></td>
                <td>11, Mar 2021</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=43" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=43" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><b className="db-list-rat">Soft toys</b></td>
                <td><b className="db-list-rat">Toys</b></td>
                <td>11, Mar 2021</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=42" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=42" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><b className="db-list-rat">Diet food</b></td>
                <td><b className="db-list-rat">Health</b></td>
                <td>27, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=41" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=41" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><b className="db-list-rat">Health products</b></td>
                <td><b className="db-list-rat">Health</b></td>
                <td>27, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=40" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=40" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td><b className="db-list-rat">Protein</b></td>
                <td><b className="db-list-rat">Health</b></td>
                <td>27, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=39" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=39" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td><b className="db-list-rat">Food</b></td>
                <td><b className="db-list-rat">Health</b></td>
                <td>27, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=38" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=38" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td><b className="db-list-rat">Tshirts</b></td>
                <td><b className="db-list-rat">Mens</b></td>
                <td>11, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=37" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=37" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td><b className="db-list-rat">Smart watches</b></td>
                <td><b className="db-list-rat">Mens</b></td>
                <td>11, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=36" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=36" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td><b className="db-list-rat">Camera lense</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>11, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=35" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=35" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td><b className="db-list-rat">Camera light</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>11, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=34" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=34" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td><b className="db-list-rat">Camera pouch</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>11, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=33" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=33" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td><b className="db-list-rat">Camera holder</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>11, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=32" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=32" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td><b className="db-list-rat">Fruits and vegitables</b></td>
                <td><b className="db-list-rat">Fruits</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=31" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=31" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>15</td>
                <td><b className="db-list-rat">Vegitables</b></td>
                <td><b className="db-list-rat">Fruits</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=30" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=30" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>16</td>
                <td><b className="db-list-rat">Fruits</b></td>
                <td><b className="db-list-rat">Fruits</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=29" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=29" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>17</td>
                <td><b className="db-list-rat">Digital products</b></td>
                <td><b className="db-list-rat">Education</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=28" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=28" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>18</td>
                <td><b className="db-list-rat">Digital books</b></td>
                <td><b className="db-list-rat">Education</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=27" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=27" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>19</td>
                <td><b className="db-list-rat">Books</b></td>
                <td><b className="db-list-rat">Education</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=26" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=26" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>20</td>
                <td><b className="db-list-rat">Jeans</b></td>
                <td><b className="db-list-rat">Clothings</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=25" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=25" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>21</td>
                <td><b className="db-list-rat">Shirts</b></td>
                <td><b className="db-list-rat">Clothings</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=24" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=24" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>22</td>
                <td><b className="db-list-rat">T-shirts</b></td>
                <td><b className="db-list-rat">Clothings</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=23" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=23" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>23</td>
                <td><b className="db-list-rat">PC games</b></td>
                <td><b className="db-list-rat">Toys</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=22" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=22" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>24</td>
                <td><b className="db-list-rat">Playstations games</b></td>
                <td><b className="db-list-rat">Toys</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=21" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=21" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>25</td>
                <td><b className="db-list-rat">Drone toys</b></td>
                <td><b className="db-list-rat">Toys</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=20" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=20" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>26</td>
                <td><b className="db-list-rat">Brain games</b></td>
                <td><b className="db-list-rat">Toys</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=19" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=19" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>27</td>
                <td><b className="db-list-rat">Educations toys</b></td>
                <td><b className="db-list-rat">Toys</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=18" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=18" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>28</td>
                <td><b className="db-list-rat">Puma</b></td>
                <td><b className="db-list-rat">Shoes</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=17" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=17" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>29</td>
                <td><b className="db-list-rat">Nike</b></td>
                <td><b className="db-list-rat">Shoes</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=16" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=16" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>30</td>
                <td><b className="db-list-rat">Adidas</b></td>
                <td><b className="db-list-rat">Shoes</b></td>
                <td>10, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=15" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=15" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>31</td>
                <td><b className="db-list-rat">Smart Tech</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>08, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=14" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=14" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>32</td>
                <td><b className="db-list-rat">Tablets</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>08, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=13" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=13" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>33</td>
                <td><b className="db-list-rat">Camera</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>08, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=12" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=12" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>34</td>
                <td><b className="db-list-rat">Speakers</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>08, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=11" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=11" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>35</td>
                <td><b className="db-list-rat">Laptop</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>08, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=10" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=10" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>36</td>
                <td><b className="db-list-rat">Smart TV</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>08, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=9" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=9" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>37</td>
                <td><b className="db-list-rat">Mobiles</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>08, Apr 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-product-sub-category-edit.html?row=8" className="db-list-edit">Edit</a></td>
                <td><a href="admin-product-sub-category-delete.html?row=8" className="db-list-edit">Delete</a></td>
              </tr>
              {/*                                <tr>*/}
              {/*                                    <td>2</td>*/}
              {/*                                    <td><b class="db-list-rat">Blood test clenic</b></td>*/}
              {/*                                    <td><b class="db-list-rat">Hospital</b></td>*/}
              {/*									<td>8 June 2025</td>*/}
              {/*                                    <td><span class="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">162</span></td>*/}
              {/*                                    <td><a href="admin-sub-category-edit.html" class="db-list-edit">Edit</a></td>*/}
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
