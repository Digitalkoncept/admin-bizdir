import React from 'react'

const page = () => {
  return (
 <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Listing Sub Categories</span>
        <div className="ud-cen-s2 hcat-cho">
          <h2>All Listing Sub Categories</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <a href="admin-add-new-sub-category.html" className="db-tit-btn">Add new Listing sub category</a>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Sub Category Name</th>
                <th>Main Category Name</th>
                <th>Created date</th>
                <th>Listing</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><b className="db-list-rat">Street food</b></td>
                <td><b className="db-list-rat">Hotels And Resorts</b></td>
                <td>12, Mar 2021</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=53" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=53" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><b className="db-list-rat">Coffee shop</b></td>
                <td><b className="db-list-rat">Hotels And Resorts</b></td>
                <td>12, Mar 2021</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=52" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=52" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><b className="db-list-rat">Seminar hall</b></td>
                <td><b className="db-list-rat">Wedding halls</b></td>
                <td>07, Feb 2021</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=51" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=51" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><b className="db-list-rat">Party hall</b></td>
                <td><b className="db-list-rat">Wedding halls</b></td>
                <td>07, Feb 2021</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=50" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=50" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><b className="db-list-rat">Marriage hall</b></td>
                <td><b className="db-list-rat">Wedding halls</b></td>
                <td>07, Feb 2021</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=49" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=49" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td><b className="db-list-rat">Health &amp; Beauty</b></td>
                <td><b className="db-list-rat">Spa and Facial</b></td>
                <td>06, May 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=48" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=48" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td><b className="db-list-rat">Health &amp;Beauty</b></td>
                <td><b className="db-list-rat">Spa and Facial</b></td>
                <td>06, May 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=47" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=47" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td><b className="db-list-rat">Hospitals&amp; Diagnostic Supply</b></td>
                <td><b className="db-list-rat">Spa and Facial</b></td>
                <td>06, May 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=46" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=46" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td><b className="db-list-rat">Gifts &amp;Crafts</b></td>
                <td><b className="db-list-rat">Spa and Facial</b></td>
                <td>06, May 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=45" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=45" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td><b className="db-list-rat">Gifts &amp; Crafts</b></td>
                <td><b className="db-list-rat">Spa and Facial</b></td>
                <td>06, May 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=44" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=44" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td><b className="db-list-rat">Face &amp; Body</b></td>
                <td><b className="db-list-rat">Spa and Facial</b></td>
                <td>06, May 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=38" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=38" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td><b className="db-list-rat">Panel</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=37" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=37" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td><b className="db-list-rat">Power</b></td>
                <td><b className="db-list-rat">Electricals</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">5</span></td>
                <td><a href="admin-sub-category-edit.html?row=36" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=36" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td><b className="db-list-rat">Cycling</b></td>
                <td><b className="db-list-rat">Sports</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=35" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=35" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>15</td>
                <td><b className="db-list-rat">Swimming</b></td>
                <td><b className="db-list-rat">Sports</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">2</span></td>
                <td><a href="admin-sub-category-edit.html?row=34" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=34" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>16</td>
                <td><b className="db-list-rat">Sports Kits Shop</b></td>
                <td><b className="db-list-rat">Sports</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=33" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=33" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>17</td>
                <td><b className="db-list-rat">Tution Centers</b></td>
                <td><b className="db-list-rat">Education</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=32" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=32" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>18</td>
                <td><b className="db-list-rat">Colleges</b></td>
                <td><b className="db-list-rat">Education</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=31" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=31" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>19</td>
                <td><b className="db-list-rat">Schools</b></td>
                <td><b className="db-list-rat">Education</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=30" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=30" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>20</td>
                <td><b className="db-list-rat">Pre kg and Child care</b></td>
                <td><b className="db-list-rat">Education</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=29" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=29" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>21</td>
                <td><b className="db-list-rat">Bike Showrooms</b></td>
                <td><b className="db-list-rat">Automobiles</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=28" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=28" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>22</td>
                <td><b className="db-list-rat">Car showrooms</b></td>
                <td><b className="db-list-rat">Automobiles</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">2</span></td>
                <td><a href="admin-sub-category-edit.html?row=27" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=27" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>23</td>
                <td><b className="db-list-rat">Car and Bike Services</b></td>
                <td><b className="db-list-rat">Automobiles</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=26" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=26" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>24</td>
                <td><b className="db-list-rat">Bike Services</b></td>
                <td><b className="db-list-rat">Transportation</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=25" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=25" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>25</td>
                <td><b className="db-list-rat">Bus Tickets</b></td>
                <td><b className="db-list-rat">Transportation</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=24" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=24" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>26</td>
                <td><b className="db-list-rat">Cab services</b></td>
                <td><b className="db-list-rat">Transportation</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=23" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=23" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>27</td>
                <td><b className="db-list-rat">Villas</b></td>
                <td><b className="db-list-rat">Real Estate</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=22" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=22" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>28</td>
                <td><b className="db-list-rat">Indepentant House</b></td>
                <td><b className="db-list-rat">Real Estate</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">5</span></td>
                <td><a href="admin-sub-category-edit.html?row=21" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=21" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>29</td>
                <td><b className="db-list-rat">Plots and Lands</b></td>
                <td><b className="db-list-rat">Real Estate</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=20" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=20" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>30</td>
                <td><b className="db-list-rat">Community Hospitals</b></td>
                <td><b className="db-list-rat">Hospitals</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">5</span></td>
                <td><a href="admin-sub-category-edit.html?row=19" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=19" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>31</td>
                <td><b className="db-list-rat">Clinics</b></td>
                <td><b className="db-list-rat">Hospitals</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=18" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=18" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>32</td>
                <td><b className="db-list-rat">Child Hospitals</b></td>
                <td><b className="db-list-rat">Hospitals</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">3</span></td>
                <td><a href="admin-sub-category-edit.html?row=17" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=17" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>33</td>
                <td><b className="db-list-rat">Food hotel</b></td>
                <td><b className="db-list-rat">Hotels And Resorts</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=16" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=16" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>34</td>
                <td><b className="db-list-rat">Beach Resort</b></td>
                <td><b className="db-list-rat">Hotels And Resorts</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=15" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=15" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>35</td>
                <td><b className="db-list-rat">Resort</b></td>
                <td><b className="db-list-rat">Hotels And Resorts</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">3</span></td>
                <td><a href="admin-sub-category-edit.html?row=14" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=14" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>36</td>
                <td><b className="db-list-rat">Hotels</b></td>
                <td><b className="db-list-rat">Hotels And Resorts</b></td>
                <td>07, Jan 2020</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=13" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=13" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>37</td>
                <td><b className="db-list-rat">Smart classes</b></td>
                <td><b className="db-list-rat">Digital Products</b></td>
                <td>15, Dec 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=12" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=12" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>38</td>
                <td><b className="db-list-rat">Health care products</b></td>
                <td><b className="db-list-rat">Digital Products</b></td>
                <td>15, Dec 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">8</span></td>
                <td><a href="admin-sub-category-edit.html?row=11" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=11" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>39</td>
                <td><b className="db-list-rat">Website Template</b></td>
                <td><b className="db-list-rat">Digital Products</b></td>
                <td>15, Dec 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">11</span></td>
                <td><a href="admin-sub-category-edit.html?row=10" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=10" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>40</td>
                <td><b className="db-list-rat">Massage</b></td>
                <td><b className="db-list-rat">Spa and Facial</b></td>
                <td>08, Dec 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">1</span></td>
                <td><a href="admin-sub-category-edit.html?row=9" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=9" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>41</td>
                <td><b className="db-list-rat">Facial</b></td>
                <td><b className="db-list-rat">Spa and Facial</b></td>
                <td>08, Dec 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=8" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=8" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>42</td>
                <td><b className="db-list-rat">viki4</b></td>
                <td><b className="db-list-rat">Automobiles</b></td>
                <td>08, Oct 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=7" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>43</td>
                <td><b className="db-list-rat">viki2</b></td>
                <td><b className="db-list-rat">Education</b></td>
                <td>08, Oct 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=6" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>44</td>
                <td><b className="db-list-rat">jhjhjhj</b></td>
                <td><b className="db-list-rat">Wedding halls</b></td>
                <td>08, Oct 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=4" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=4" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>45</td>
                <td><b className="db-list-rat">sdfdsfsfdfsf</b></td>
                <td><b className="db-list-rat">Wedding halls</b></td>
                <td>08, Oct 2019</td>
                <td><span className="db-list-ststus" data-toggle="tooltip" title="Total listings in this category">0</span></td>
                <td><a href="admin-sub-category-edit.html?row=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-category-delete.html?row=3" className="db-list-edit">Delete</a></td>
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
