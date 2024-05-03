import React from 'react'

const page = () => {
  return (
  <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Blogs</span>
        <div className="ud-cen-s2">
          <h2>Blog post details</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <a href="admin-add-new-blogs.html" className="db-tit-btn">Add new post</a>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Post Name</th>
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
                <td>INCEPTION <span>12, Mar 2021</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">15</span></td>
                <td><a href="admin-edit-blogs.html?row=52" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=52" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/inception" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>The great wall <span>12, Mar 2021</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/" className="db-list-ststus" target="_blank" /></td>
                <td><span className="db-list-rat">4</span></td>
                <td><a href="admin-edit-blogs.html?row=50" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=50" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/the-great-wall" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>AVENGERS INFINTY WAR <span>12, Mar 2021</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-blogs.html?row=49" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=49" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/avengers-infinty-war" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Party time to beach ? <span>12, Mar 2021</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/" className="db-list-ststus" target="_blank" /></td>
                <td><span className="db-list-rat">4</span></td>
                <td><a href="admin-edit-blogs.html?row=46" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=46" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/party-time-to-beach----" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td>AVENGERS END GAME <span>11, Mar 2021</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">11</span></td>
                <td><a href="admin-edit-blogs.html?row=45" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=45" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/avengers-end-game1" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td>captainamerica the civil war <span>11, Mar 2021</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-blogs.html?row=43" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=43" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/captainamerica-the-civil-war" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Samsung M31 Review  <span>22, Feb 2021</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">10</span></td>
                <td><a href="admin-edit-blogs.html?row=42" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=42" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/samsung-m31-review-" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td>wizard of oz <span>21, Feb 2021</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-blogs.html?row=41" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=41" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/wizard-of-oz1" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td>wizard of oz <span>21, Feb 2021</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-blogs.html?row=40" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=40" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/wizard-of-oz" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td>Titanic <span>21, Feb 2021</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-blogs.html?row=39" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=39" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/titanic" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td>HHHH <span>05, Aug 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-blogs.html?row=38" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=38" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/hhhh" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td>nader <span>06, May 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-blogs.html?row=37" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=37" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/nader" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td>Pepillo <span>24, Apr 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-blogs.html?row=36" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=36" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/pepillo" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td>Digital Marketing <span>26, Mar 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">9</span></td>
                <td><a href="admin-edit-blogs.html?row=34" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=34" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/digital-marketing" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>15</td>
                <td>dfgdsfdsfds <span>12, Mar 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">15</span></td>
                <td><a href="admin-edit-blogs.html?row=32" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=32" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/dfgdsfdsfds" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>16</td>
                <td>Liberman <span>27, Feb 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-blogs.html?row=31" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=31" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/liberman" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>17</td>
                <td>Laravel <span>03, Feb 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-blogs.html?row=30" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=30" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/laravel" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>18</td>
                <td>emo <span>29, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-blogs.html?row=29" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=29" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/emo" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>19</td>
                <td>Test <span>23, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/adem" className="db-list-ststus" target="_blank">Adem</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-blogs.html?row=28" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=28" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/test" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>20</td>
                <td>IPM Business Software Upgrade <span>22, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-blogs.html?row=27" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=27" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/ipm-business-software-upgrade" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>21</td>
                <td>New blog <span>18, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-blogs.html?row=26" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=26" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/new-blog" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>22</td>
                <td>Nature is a nature <span>13, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-blogs.html?row=24" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=24" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/nature-is-a-nature" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>23</td>
                <td>Hair care treatment <span>13, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-blogs.html?row=22" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=22" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/hair-care-treatment" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>24</td>
                <td>Tower hotel grand opening <span>13, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">9</span></td>
                <td><a href="admin-edit-blogs.html?row=20" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=20" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/tower-hotel-grand-opening" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>25</td>
                <td>Google my business update features <span>08, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-blogs.html?row=19" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=19" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/google-my-business-update-features" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>26</td>
                <td>12 Days Fitness Chanllege <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-blogs.html?row=17" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=17" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/12-days-fitness-chanllege" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>27</td>
                <td>Bike Racing Techniques <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-blogs.html?row=16" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=16" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/bike-racing-techniques" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>28</td>
                <td>Best Island In The World <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-blogs.html?row=15" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=15" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/best-island-in-the-world" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>29</td>
                <td>Online Marketing 2020 <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-blogs.html?row=14" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=14" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/online-marketing-2020" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>30</td>
                <td>Home Interior Design Trends <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-blogs.html?row=13" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=13" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/home-interior-design-trends" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>31</td>
                <td>Christmas Fun Games <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-blogs.html?row=12" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=12" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/christmas-fun-games" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>32</td>
                <td>Online courses free with certificate <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-blogs.html?row=11" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=11" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/online-courses-free-with-certificate" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>33</td>
                <td>Online courses for Dot Net Trainees <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-blogs.html?row=10" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=10" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/online-courses-for-dot-net-trainees" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>34</td>
                <td>Tips for Increase Car Mileage? <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/betty-d-friedman" className="db-list-ststus" target="_blank">Betty D Friedman</a></td>
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-edit-blogs.html?row=9" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=9" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/tips-for-increase-car-mileage?" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>35</td>
                <td>How to service a Car? <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/betty-d-friedman" className="db-list-ststus" target="_blank">Betty D Friedman</a></td>
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-edit-blogs.html?row=8" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=8" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/how-to-service-a-car?" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>36</td>
                <td>10 Healthy Foods for Kids <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                <td><span className="db-list-rat">58</span></td>
                <td><a href="admin-edit-blogs.html?row=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=7" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/10-healthy-foods-for-kids" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>37</td>
                <td>7 Healthy Tips <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                <td><span className="db-list-rat">9</span></td>
                <td><a href="admin-edit-blogs.html?row=6" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=6" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/7-healthy-tips" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>38</td>
                <td>Bike Sale 50% Offer <span>07, Jan 2020</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/rachel" className="db-list-ststus" target="_blank">Rachel</a></td>
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-edit-blogs.html?row=5" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=5" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/bike-sale-50%-offer" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>39</td>
                <td>Source and URL tracking <span>10, Dec 2019</span></td>
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-blogs.html?row=4" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-blogs.html?row=4" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/blog/source-and-url-tracking" className="db-list-edit" target="_blank">Preview</a></td>
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
