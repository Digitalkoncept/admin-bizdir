import React from 'react'

const page = () => {
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">General User Details</span>
        <div className="ud-cen-s2">
          <h2>General Users - 2460</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <a href="admin-add-new-user.html" className="db-tit-btn">Add new user</a>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>User Name</th>
                <th>User ID</th>
                <th>User Type</th>
                {/*                            <th>Blog posts</th>*/}
                {/*                            <th>Events</th>*/}
                <th>Followings</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Preview</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img src="../images/user/65653us1.jpg" alt=""/>Reas<span>tariq.qav@gmail.com</span> <span>Join:
                    26, Mar 2021</span>
                </td>
                <td>USER338 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=338&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=338&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/reas1" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=338" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><img src="../images/user/37478us2.jpg" alt=""/>Reas<span>ares@gmail.com</span> <span>Join:
                    26, Mar 2021</span>
                </td>
                <td>USER337 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=337&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=337&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/reas" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=337" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><img src="../images/user/1.jpg" alt=""/>dvdfd<span>dfdf@sds.ru</span> <span>Join:
                    26, Sep 2020</span>
                </td>
                <td>USER315 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=315&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=315&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/dvdfd" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=315" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><img src="../images/user/1.jpg" alt=""/>s<span>rw@dg.b</span> <span>Join:
                    23, Sep 2020</span>
                </td>
                <td>USER314 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=314&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=314&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/s" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=314" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><img src="../images/user/25768us9.jpg" alt=""/>egsegs<span>sdnjsaik@djsk.com</span> <span>Join:
                    21, Sep 2020</span>
                </td>
                <td>USER312 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=312&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=312&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/egsegs" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=312" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td><img src="../images/user/1.jpg" alt=""/>Wasyan<span>wouarv@gmail.com</span> <span>Join:
                    19, Sep 2020</span>
                </td>
                <td>USER309 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=309&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=309&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/wasyan" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=309" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td><img src="../images/user/1.jpg" alt=""/>alessandro<span>alessandroleguir@gmail.com</span> <span>Join:
                    18, Sep 2020</span>
                </td>
                <td>USER308 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=308&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=308&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/alessandro" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=308" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td><img src="../images/user/1.jpg" alt=""/>madhu<span>madhavi25.rajulapati@gmail.com</span> <span>Join:
                    18, Sep 2020</span>
                </td>
                <td>USER307 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=307&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=307&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/madhu" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=307" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td><img src="../images/user/1.jpg" alt=""/>123<span>123@123.com</span> <span>Join:
                    17, Sep 2020</span>
                </td>
                <td>USER306 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=306&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=306&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/123" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=306" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td><img src="../images/user/563354.jpg" alt=""/>Gianluca Rossi<span>gianluca4rossi@gmail.com</span> <span>Join:
                    17, Sep 2020</span>
                </td>
                <td>USER304 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">1</span></td>
                <td><a href="admin-my-profile-edit.html?row=304&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=304&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/gianluca-rossi" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=304" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td><img src="../images/user/1.jpg" alt=""/>PRASHANT GUNTHEY<span>project@shopm.in</span> <span>Join:
                    15, Sep 2020</span>
                </td>
                <td>USER303 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=303&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=303&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/prashant-gunthey" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=303" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td><img src="../images/user/1.jpg" alt=""/>Rao<span>globalcomet@gmail.com</span> <span>Join:
                    15, Sep 2020</span>
                </td>
                <td>USER301 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=301&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=301&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/rao" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=301" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td><img src="../images/user/1.jpg" alt=""/>ulcay<span>ulcay.john@gmail.com</span> <span>Join:
                    11, Sep 2020</span>
                </td>
                <td>USER298 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=298&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=298&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ulcay" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=298" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td><img src="../images/user/1.jpg" alt=""/>lal<span>freepage24@gmail.com</span> <span>Join:
                    10, Sep 2020</span>
                </td>
                <td>USER296 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=296&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=296&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/lal" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=296" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>15</td>
                <td><img src="../images/user/1.jpg" alt=""/>swap<span>globasin@yahoo.co.in</span> <span>Join:
                    27, Aug 2020</span>
                </td>
                <td>USER291 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=291&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=291&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/swap" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=291" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>16</td>
                <td><img src="../images/user/1.jpg" alt=""/>Abu<span>abakeit@hotmail.com</span> <span>Join:
                    19, Aug 2020</span>
                </td>
                <td>USER287 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=287&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=287&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/abu" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=287" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>17</td>
                <td><img src="../images/user/1.jpg" alt=""/>Nawaf Alayli<span>nawaf.alayli@gmail.com</span> <span>Join:
                    12, Aug 2020</span>
                </td>
                <td>USER268 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">1</span></td>
                <td><a href="admin-my-profile-edit.html?row=268&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=268&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/nawaf-alayli" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=268" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>18</td>
                <td><img src="../images/user/1.jpg" alt=""/>A S<span>abhisri200k@gmail.com</span> <span>Join:
                    05, Aug 2020</span>
                </td>
                <td>USER267 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=267&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=267&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/a-s" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=267" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>19</td>
                <td><img src="../images/user/1.jpg" alt=""/>Xavier<span>tracexavier@gmail.com</span> <span>Join:
                    04, Aug 2020</span>
                </td>
                <td>USER264 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=264&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=264&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/xavier" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=264" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>20</td>
                <td><img src="../images/user/1.jpg" alt=""/>Larry Darnell Hubbard<span>istudio901@gmail.com</span> <span>Join:
                    02, Aug 2020</span>
                </td>
                <td>USER263 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=263&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=263&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/larry-darnell-hubbard" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=263" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>21</td>
                <td><img src="../images/user/93291aits-new1.png" alt=""/>Amit Bhatnagar<span>ajana622@gmail.com</span> <span>Join:
                    30, Jul 2020</span>
                </td>
                <td>USER262 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=262&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=262&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/amit-bhatnagar" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=262" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>22</td>
                <td><img src="../images/user/1.jpg" alt=""/>John<span>pierre.tuyishime@yahoo.com</span> <span>Join:
                    29, Jul 2020</span>
                </td>
                <td>USER261 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=261&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=261&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/john1" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=261" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>23</td>
                <td><img src="../images/user/1.jpg" alt=""/>K K CHOUDHARY<span>kkchoudhary099@gmail.com</span> <span>Join:
                    26, Jul 2020</span>
                </td>
                <td>USER259 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">1</span></td>
                <td><a href="admin-my-profile-edit.html?row=259&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=259&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/k-k-choudhary" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=259" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>24</td>
                <td><img src="../images/user/1.jpg" alt=""/>James<span>tracexavier@live.com</span> <span>Join:
                    22, Jul 2020</span>
                </td>
                <td>USER256 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=256&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=256&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/james" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=256" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>25</td>
                <td><img src="../images/user/1.jpg" alt=""/>Test Test<span>jalokap238@dnawr.com</span> <span>Join:
                    21, Jul 2020</span>
                </td>
                <td>USER253 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=253&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=253&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/test-test" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=253" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>26</td>
                <td><img src="../images/user/1.jpg" alt=""/>ghanta<span>djhdfjh@dfjhdf.com</span> <span>Join:
                    18, Jul 2020</span>
                </td>
                <td>USER252 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=252&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=252&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ghanta" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=252" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>27</td>
                <td><img src="../images/user/53956insta2.jpg" alt=""/>Levi Gimenes Pereira<span>contato@blitzcosplay.com.br</span> <span>Join:
                    18, Jul 2020</span>
                </td>
                <td>USER251 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=251&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=251&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/levi-gimenes-pereira" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=251" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>28</td>
                <td><img src="../images/user/1.jpg" alt=""/>Rocky<span>chennaifishesinfo@gmail.com</span> <span>Join:
                    16, Jul 2020</span>
                </td>
                <td>USER250 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=250&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=250&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/rocky" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=250" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>29</td>
                <td><img src="../images/user/1.jpg" alt=""/>sumanth<span>sumanthkanigiri467@gmail.com</span> <span>Join:
                    10, Jul 2020</span>
                </td>
                <td>USER244 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=244&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=244&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/sumanth" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=244" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>30</td>
                <td><img src="../images/user/1.jpg" alt=""/>asdf<span>asdf@gmail.com</span> <span>Join:
                    05, Jul 2020</span>
                </td>
                <td>USER242 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=242&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=242&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/asdf" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=242" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>31</td>
                <td><img src="../images/user/1.jpg" alt=""/>Mike<span>ndaombwa@gmail.com</span> <span>Join:
                    03, Jul 2020</span>
                </td>
                <td>USER241 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=241&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=241&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/mike" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=241" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>32</td>
                <td><img src="../images/user/1.jpg" alt=""/>domnic lakra<span>domniclakra02@gmail.com</span> <span>Join:
                    01, Jul 2020</span>
                </td>
                <td>USER240 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=240&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=240&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/domnic-lakra" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=240" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>33</td>
                <td><img src="../images/user/1.jpg" alt=""/>Domnic Lakra<span>domniclakra02@gmial.com</span> <span>Join:
                    01, Jul 2020</span>
                </td>
                <td>USER239 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=239&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=239&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/domnic-lakra" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=239" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>34</td>
                <td><img src="../images/user/1.jpg" alt=""/>shon<span>shonmal87@gmail.com</span> <span>Join:
                    28, Jun 2020</span>
                </td>
                <td>USER237 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=237&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=237&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/shon" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=237" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>35</td>
                <td><img src="../images/user/1.jpg" alt=""/>FIDELE<span>FGREBELLE@YAHOO.COM</span> <span>Join:
                    27, Jun 2020</span>
                </td>
                <td>USER235 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=235&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=235&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/fidele" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=235" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>36</td>
                <td><img src="../images/user/1.jpg" alt=""/>Test<span>pk.maurya22@gmail.com</span> <span>Join:
                    26, Jun 2020</span>
                </td>
                <td>USER233 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=233&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=233&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/test" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=233" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>37</td>
                <td><img src="../images/user/1.jpg" alt=""/>Segun Adegunloye<span>aadegunloye@mydtelecoms.com</span> <span>Join:
                    25, Jun 2020</span>
                </td>
                <td>USER232 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">2</span></td>
                <td><a href="admin-my-profile-edit.html?row=232&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=232&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/segun-adegunloye" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=232" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>38</td>
                <td><img src="../images/user/1.jpg" alt=""/>Ravindu<span>Rvdperera@gmail.com</span> <span>Join:
                    23, Jun 2020</span>
                </td>
                <td>USER230 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=230&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=230&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ravindu" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=230" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>39</td>
                <td><img src="../images/user/1.jpg" alt=""/>Si Thu<span>sithuomst.st@gmail.com</span> <span>Join:
                    21, Jun 2020</span>
                </td>
                <td>USER228 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=228&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=228&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/si-thu" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=228" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>40</td>
                <td><img src="../images/user/1.jpg" alt=""/>dfghj<span>erftghjk@dfghjkl.com</span> <span>Join:
                    20, Jun 2020</span>
                </td>
                <td>USER227 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=227&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=227&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/dfghj" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=227" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>41</td>
                <td><img src="../images/user/1.jpg" alt=""/>1234567890<span>y@g.c</span> <span>Join:
                    17, Jun 2020</span>
                </td>
                <td>USER225 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=225&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=225&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/1234567890" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=225" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>42</td>
                <td><img src="../images/user/1.jpg" alt=""/>asd<span>abarciag@gmail.com</span> <span>Join:
                    17, Jun 2020</span>
                </td>
                <td>USER224 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=224&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=224&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/asd" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=224" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>43</td>
                <td><img src="../images/user/1.jpg" alt=""/>NIA<span>nangsejueyachislain@yahoo.fr</span> <span>Join:
                    11, Jun 2020</span>
                </td>
                <td>USER219 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=219&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=219&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/nia" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=219" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>44</td>
                <td><img src="../images/user/1.jpg" alt=""/>Ashish<span>ashish23091681@gmail.com</span> <span>Join:
                    06, Jun 2020</span>
                </td>
                <td>USER217 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=217&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=217&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ashish" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=217" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>45</td>
                <td><img src="../images/user/1.jpg" alt=""/>Antonio Ussoli<span>antonio.ussoli@now.it</span> <span>Join:
                    03, Jun 2020</span>
                </td>
                <td>USER215 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=215&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=215&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/antonio-ussoli" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=215" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>46</td>
                <td><img src="../images/user/1.jpg" alt=""/>dkroy<span>dkroy2010@gamil.com</span> <span>Join:
                    01, Jun 2020</span>
                </td>
                <td>USER214 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=214&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=214&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/dkroy" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=214" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>47</td>
                <td><img src="../images/user/1.jpg" alt=""/>Sam<span>trygdservice@gmail.com</span> <span>Join:
                    31, May 2020</span>
                </td>
                <td>USER212 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=212&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=212&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/sam" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=212" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>48</td>
                <td><img src="../images/user/1.jpg" alt=""/>cdgfhnndgjh<span>josephdrein@hotmail.com</span> <span>Join:
                    30, May 2020</span>
                </td>
                <td>USER210 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=210&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=210&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/cdgfhnndgjh" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=210" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>49</td>
                <td><img src="../images/user/1.jpg" alt=""/>dkroy<span>dkroy2010@gmail.com</span> <span>Join:
                    28, May 2020</span>
                </td>
                <td>USER209 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=209&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=209&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/dkroy" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=209" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>50</td>
                <td><img src="../images/user/1.jpg" alt=""/>SC<span>charles.siyathemba@gmail.com</span> <span>Join:
                    26, May 2020</span>
                </td>
                <td>USER206 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=206&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=206&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/sc" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=206" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>51</td>
                <td><img src="../images/user/1.jpg" alt=""/>Cggb<span>chh@chh.com</span> <span>Join:
                    26, May 2020</span>
                </td>
                <td>USER205 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=205&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=205&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/cggb" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=205" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>52</td>
                <td><img src="../images/user/1.jpg" alt=""/>digital<span>digitalitprojects@gmail.com</span> <span>Join:
                    24, May 2020</span>
                </td>
                <td>USER201 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=201&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=201&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/digital" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=201" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>53</td>
                <td><img src="../images/user/1.jpg" alt=""/>Baburao<span>navayuvavidhayrthisamakya@gmail.com</span> <span>Join:
                    22, May 2020</span>
                </td>
                <td>USER200 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=200&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=200&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/baburao" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=200" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>54</td>
                <td><img src="../images/user/1.jpg" alt=""/>Bharat <span>yadavbharath296@gmail.com</span> <span>Join:
                    22, May 2020</span>
                </td>
                <td>USER198 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=198&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=198&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/bharat-" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=198" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>55</td>
                <td><img src="../images/user/1.jpg" alt=""/>prueba<span>goldpremiumsa@gmail.com</span> <span>Join:
                    18, May 2020</span>
                </td>
                <td>USER190 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=190&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=190&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/prueba" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=190" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>56</td>
                <td><img src="../images/user/1.jpg" alt=""/>karan<span>arorakaran869@gmail.com</span> <span>Join:
                    16, May 2020</span>
                </td>
                <td>USER188 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=188&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=188&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/karan" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=188" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>57</td>
                <td><img src="../images/user/1.jpg" alt=""/>Sasabell <span>Masegoobale@gmail.com</span> <span>Join:
                    10, May 2020</span>
                </td>
                <td>USER183 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=183&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=183&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/sasabell-" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=183" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>58</td>
                <td><img src="../images/user/1.jpg" alt=""/>Okpe<span>okpemo1@gmail.com</span> <span>Join:
                    08, May 2020</span>
                </td>
                <td>USER180 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=180&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=180&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/okpe" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=180" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>59</td>
                <td><img src="../images/user/1.jpg" alt=""/>koko<span>koko@business.com</span> <span>Join:
                    07, May 2020</span>
                </td>
                <td>USER179 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=179&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=179&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/koko" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=179" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>60</td>
                <td><img src="../images/user/1.jpg" alt=""/>test<span>argus.corpo@gmail.com</span> <span>Join:
                    07, May 2020</span>
                </td>
                <td>USER177 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=177&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=177&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/test" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=177" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>61</td>
                <td><img src="../images/user/1.jpg" alt=""/>kaushal<span>ukaushalkumar@gmail.com</span> <span>Join:
                    03, May 2020</span>
                </td>
                <td>USER173 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=173&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=173&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/kaushal" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=173" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>62</td>
                <td><img src="../images/user/1.jpg" alt=""/>test<span>test@test.com</span> <span>Join:
                    03, May 2020</span>
                </td>
                <td>USER172 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=172&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=172&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/test" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=172" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>63</td>
                <td><img src="../images/user/879619554816_2297139177178388_7082201491074984968_n.jpg" alt=""/>dhanush<span>dhanushariah@gmail.com</span> <span>Join:
                    02, May 2020</span>
                </td>
                <td>USER170 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=170&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=170&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/dhanush" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=170" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>64</td>
                <td><img src="../images/user/1.jpg" alt=""/>paviter<span>paviterjeetkaur@gmail.com</span> <span>Join:
                    28, Apr 2020</span>
                </td>
                <td>USER162 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=162&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=162&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/paviter" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=162" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>65</td>
                <td><img src="../images/user/1.jpg" alt=""/>ahmet<span>ahmett@gmail.com</span> <span>Join:
                    22, Apr 2020</span>
                </td>
                <td>USER160 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=160&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=160&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ahmet" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=160" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>66</td>
                <td><img src="../images/user/1.jpg" alt=""/>asdad<span>msas@gmail.com</span> <span>Join:
                    22, Apr 2020</span>
                </td>
                <td>USER158 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=158&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=158&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/asdad" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=158" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>67</td>
                <td><img src="../images/user/1.jpg" alt=""/>Mohammed<span>sampl@gmail.com</span> <span>Join:
                    21, Apr 2020</span>
                </td>
                <td>USER157 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=157&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=157&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/mohammed" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=157" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>68</td>
                <td><img src="../images/user/1.jpg" alt=""/>Kristopher<span>waltersk1@gmail.com</span> <span>Join:
                    19, Apr 2020</span>
                </td>
                <td>USER153 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=153&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=153&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/kristopher" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=153" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>69</td>
                <td><img src="../images/user/1.jpg" alt=""/>kubu99<span>kubu99@hotmail.com</span> <span>Join:
                    15, Apr 2020</span>
                </td>
                <td>USER149 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=149&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=149&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/kubu99" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=149" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>70</td>
                <td><img src="../images/user/1.jpg" alt=""/>parham<span>30uweb@gmail.com</span> <span>Join:
                    15, Apr 2020</span>
                </td>
                <td>USER148 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=148&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=148&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/parham" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=148" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>71</td>
                <td><img src="../images/user/1.jpg" alt=""/>deneme<span>mesajver@gmail.com</span> <span>Join:
                    15, Apr 2020</span>
                </td>
                <td>USER147 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">1</span></td>
                <td><a href="admin-my-profile-edit.html?row=147&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=147&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/deneme" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=147" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>72</td>
                <td><img src="../images/user/1.jpg" alt=""/>Vivek<span>vivek@gmail.com</span> <span>Join:
                    12, Apr 2020</span>
                </td>
                <td>USER146 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=146&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=146&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/vivek" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=146" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>73</td>
                <td><img src="../images/user/1.jpg" alt=""/>audrey<span>audreyq@yahoo.com</span> <span>Join:
                    07, Apr 2020</span>
                </td>
                <td>USER142 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=142&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=142&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/audrey" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=142" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>74</td>
                <td><img src="../images/user/1.jpg" alt=""/>Jorge<span>jorgemedina2406@gmail.com</span> <span>Join:
                    06, Apr 2020</span>
                </td>
                <td>USER141 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=141&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=141&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/jorge" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=141" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>75</td>
                <td><img src="../images/user/1.jpg" alt=""/>shahram<span>simasabz_co@yahoo.com</span> <span>Join:
                    06, Apr 2020</span>
                </td>
                <td>USER139 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=139&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=139&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/shahram" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=139" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>76</td>
                <td><img src="../images/user/1.jpg" alt=""/>Hafeez<span>hafeez@gmail.com</span> <span>Join:
                    05, Apr 2020</span>
                </td>
                <td>USER137 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=137&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=137&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/hafeez" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=137" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>77</td>
                <td><img src="../images/user/1.jpg" alt=""/>olomu<span>info@olomu1.com</span> <span>Join:
                    31, Mar 2020</span>
                </td>
                <td>USER135 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=135&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=135&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/olomu" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=135" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>78</td>
                <td><img src="../images/user/1.jpg" alt=""/>david<span>david.fanfano@gmail.com</span> <span>Join:
                    29, Mar 2020</span>
                </td>
                <td>USER134 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=134&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=134&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/david" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=134" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>79</td>
                <td><img src="../images/user/1.jpg" alt=""/>GGJHG<span>FHFGHF@LIVE.DK</span> <span>Join:
                    23, Mar 2020</span>
                </td>
                <td>USER132 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=132&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=132&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ggjhg" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=132" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>80</td>
                <td><img src="../images/user/1.jpg" alt=""/>sasa<span>sandeep.socialpixe@gmail.com</span> <span>Join:
                    23, Mar 2020</span>
                </td>
                <td>USER131 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=131&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=131&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/sasa" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=131" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>81</td>
                <td><img src="../images/user/1.jpg" alt=""/>vijay<span>vijay@gmail.com</span> <span>Join:
                    22, Mar 2020</span>
                </td>
                <td>USER130 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=130&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=130&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/vijay" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=130" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>82</td>
                <td><img src="../images/user/1.jpg" alt=""/>tam<span>profession05@yahoo.com</span> <span>Join:
                    21, Mar 2020</span>
                </td>
                <td>USER127 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=127&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=127&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/tam" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=127" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>83</td>
                <td><img src="../images/user/1.jpg" alt=""/>will<span>publicazap@gmail.com</span> <span>Join:
                    17, Mar 2020</span>
                </td>
                <td>USER126 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=126&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=126&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/will" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=126" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>84</td>
                <td><img src="../images/user/1.jpg" alt=""/>fgfdgdsfdf<span>abcd@abcd.com</span> <span>Join:
                    16, Mar 2020</span>
                </td>
                <td>USER123 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=123&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=123&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/fgfdgdsfdf" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=123" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>85</td>
                <td><img src="../images/user/1.jpg" alt=""/>sachin<span>sachin@bonafitech.com</span> <span>Join:
                    14, Mar 2020</span>
                </td>
                <td>USER121 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=121&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=121&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/sachin" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=121" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>86</td>
                <td><img src="../images/user/1.jpg" alt=""/>abc<span>abc@gmail.com</span> <span>Join:
                    10, Mar 2020</span>
                </td>
                <td>USER117 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=117&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=117&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/abc" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=117" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>87</td>
                <td><img src="../images/user/1.jpg" alt=""/>edy<span>onougo@yahoo.com</span> <span>Join:
                    06, Mar 2020</span>
                </td>
                <td>USER115 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=115&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=115&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/edy" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=115" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>88</td>
                <td><img src="../images/user/1.jpg" alt=""/>Mansoor<span>mansoordbit@gmail.com</span> <span>Join:
                    05, Mar 2020</span>
                </td>
                <td>USER113 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=113&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=113&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/mansoor" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=113" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>89</td>
                <td><img src="../images/user/1.jpg" alt=""/>Robert<span>emhgbj@gmaohg.com</span> <span>Join:
                    04, Mar 2020</span>
                </td>
                <td>USER112 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=112&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=112&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/robert" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=112" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>90</td>
                <td><img src="../images/user/1.jpg" alt=""/>Avinash<span>avinashshetty11@gmail.com</span> <span>Join:
                    04, Mar 2020</span>
                </td>
                <td>USER111 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=111&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=111&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/avinash" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=111" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>91</td>
                <td><img src="../images/user/1.jpg" alt=""/>CONRAD<span>destinysage@gmail.com</span> <span>Join:
                    03, Mar 2020</span>
                </td>
                <td>USER108 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=108&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=108&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/conrad" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=108" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>92</td>
                <td><img src="../images/user/1.jpg" alt=""/>tech<span>nxsoumya@gmail.com</span> <span>Join:
                    29, Feb 2020</span>
                </td>
                <td>USER107 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=107&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=107&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/tech" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=107" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>93</td>
                <td><img src="../images/user/1.jpg" alt=""/>Kumar<span>varadawebsolutions@gmail.com</span> <span>Join:
                    25, Feb 2020</span>
                </td>
                <td>USER102 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=102&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=102&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/kumar" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=102" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>94</td>
                <td><img src="../images/user/1.jpg" alt=""/>Ashish<span>ashishpokle33@gmail.com</span> <span>Join:
                    23, Feb 2020</span>
                </td>
                <td>USER100 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=100&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=100&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ashish" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=100" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>95</td>
                <td><img src="../images/user/1.jpg" alt=""/>Santosh<span>santosh@mailinator.com</span> <span>Join:
                    22, Feb 2020</span>
                </td>
                <td>USER099 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=99&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=99&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/santosh" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=99" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>96</td>
                <td><img src="../images/user/1.jpg" alt=""/>fgfdgfd<span>aaaa@bb.com</span> <span>Join:
                    21, Feb 2020</span>
                </td>
                <td>USER095 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=95&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=95&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/fgfdgfd" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=95" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>97</td>
                <td><img src="../images/user/1.jpg" alt=""/>Waqar<span>waqarbakhshi@gmail.com</span> <span>Join:
                    19, Feb 2020</span>
                </td>
                <td>USER094 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=94&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=94&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/waqar" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=94" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>98</td>
                <td><img src="../images/user/1.jpg" alt=""/>ramu<span>ramuas@gmail.com</span> <span>Join:
                    18, Feb 2020</span>
                </td>
                <td>USER093 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=93&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=93&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ramu" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=93" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>99</td>
                <td><img src="../images/user/1.jpg" alt=""/>tuna<span>tunatkn@gmail.com</span> <span>Join:
                    15, Feb 2020</span>
                </td>
                <td>USER092 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=92&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=92&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/tuna" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=92" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>100</td>
                <td><img src="../images/user/1.jpg" alt=""/>Ra<span>happy@ggg.com</span> <span>Join:
                    08, Feb 2020</span>
                </td>
                <td>USER086 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=86&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=86&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/ra" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=86" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>101</td>
                <td><img src="../images/user/1.jpg" alt=""/>mukisa<span>valenwils@gmail.com</span> <span>Join:
                    04, Feb 2020</span>
                </td>
                <td>USER082 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=82&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=82&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/mukisa" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=82" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>102</td>
                <td><img src="../images/user/1.jpg" alt=""/>Bbhh<span>seyfullahsepet@gmail.com</span> <span>Join:
                    04, Feb 2020</span>
                </td>
                <td>USER081 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=81&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=81&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/bbhh" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=81" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>103</td>
                <td><img src="../images/user/1.jpg" alt=""/>nana<span>nana@gmail.com</span> <span>Join:
                    02, Feb 2020</span>
                </td>
                <td>USER078 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=78&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=78&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/nana" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=78" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>104</td>
                <td><img src="../images/user/1.jpg" alt=""/>Brijesh<span>brijeshchand465@gmail.com</span> <span>Join:
                    01, Feb 2020</span>
                </td>
                <td>USER077 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=77&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=77&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/brijesh" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=77" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>105</td>
                <td><img src="../images/user/4913411004989_334444876752279_544839968_n.jpg" alt=""/>Kumar<span>vwswork19@gmail.com</span> <span>Join:
                    28, Jan 2020</span>
                </td>
                <td>USER076 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">2</span></td>
                <td><a href="admin-my-profile-edit.html?row=76&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=76&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/kumar" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=76" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>106</td>
                <td><img src="../images/user/1.jpg" alt=""/>dararafa<span>darso.arafa@gmail.com</span> <span>Join:
                    27, Jan 2020</span>
                </td>
                <td>USER075 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=75&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=75&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/dararafa" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=75" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>107</td>
                <td><img src="../images/user/1.jpg" alt=""/>raju<span>ra@hotmail.com</span> <span>Join:
                    25, Jan 2020</span>
                </td>
                <td>USER070 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=70&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=70&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/raju" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=70" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>108</td>
                <td><img src="../images/user/1.jpg" alt=""/>Nandu<span>mail4nandu97m@gmail.com</span> <span>Join:
                    25, Jan 2020</span>
                </td>
                <td>USER069 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=69&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=69&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/nandu" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=69" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>109</td>
                <td><img src="../images/user/1.jpg" alt=""/>Test<span>test@example.com</span> <span>Join:
                    25, Jan 2020</span>
                </td>
                <td>USER068 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=68&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=68&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/test" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=68" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>110</td>
                <td><img src="../images/user/1.jpg" alt=""/>test user<span>user@gmail.com</span> <span>Join:
                    25, Jan 2020</span>
                </td>
                <td>USER067 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=67&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=67&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/test-user" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=67" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>111</td>
                <td><img src="../images/user/1.jpg" alt=""/>laxman<span>lax.banjara@gmail.com</span> <span>Join:
                    23, Jan 2020</span>
                </td>
                <td>USER066 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=66&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=66&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/laxman" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=66" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>112</td>
                <td><img src="../images/user/1.jpg" alt=""/>laxman<span>laxman@spine.co.in</span> <span>Join:
                    23, Jan 2020</span>
                </td>
                <td>USER065 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=65&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=65&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/laxman" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=65" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>113</td>
                <td><img src="../images/user/1.jpg" alt=""/>random<span>random@yahoo.com</span> <span>Join:
                    23, Jan 2020</span>
                </td>
                <td>USER064 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=64&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=64&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/random" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=64" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>114</td>
                <td><img src="../images/user/1.jpg" alt=""/>armel wanes<span>razarmel@gmail.com</span> <span>Join:
                    22, Jan 2020</span>
                </td>
                <td>USER062 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=62&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=62&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/armel-wanes" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=62" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>115</td>
                <td><img src="../images/user/1.jpg" alt=""/>Sk<span>sandeepkapri.sjos@gmail.com</span> <span>Join:
                    18, Jan 2020</span>
                </td>
                <td>USER058 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=58&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=58&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/sk" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=58" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>116</td>
                <td><img src="../images/user/1.jpg" alt=""/>SK<span>sk@test.com</span> <span>Join:
                    18, Jan 2020</span>
                </td>
                <td>USER057 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=57&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=57&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/sk" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=57" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>117</td>
                <td><img src="../images/user/1.jpg" alt=""/>rajss<span>raj123@hmail.com</span> <span>Join:
                    18, Jan 2020</span>
                </td>
                <td>USER056 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=56&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=56&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/rajss" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=56" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>118</td>
                <td><img src="../images/user/1.jpg" alt=""/>kapil<span>kapil1234@gmail.com</span> <span>Join:
                    18, Jan 2020</span>
                </td>
                <td>USER055 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=55&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=55&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/kapil" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=55" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>119</td>
                <td><img src="../images/user/1.jpg" alt=""/>1212<span>1231231yt@gmail.com</span> <span>Join:
                    18, Jan 2020</span>
                </td>
                <td>USER054 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=54&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=54&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/1212" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=54" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>120</td>
                <td><img src="../images/user/1.jpg" alt=""/>Andreas<span>menschwagner@googlemail.com</span> <span>Join:
                    17, Jan 2020</span>
                </td>
                <td>USER052 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=52&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=52&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/andreas" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=52" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>121</td>
                <td><img src="../images/user/1.jpg" alt=""/>hi<span>hi@test.com</span> <span>Join:
                    17, Jan 2020</span>
                </td>
                <td>USER051 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=51&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=51&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/hi" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=51" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>122</td>
                <td><img src="../images/user/1.jpg" alt=""/>amine<span>aminejbali32@gmail.com</span> <span>Join:
                    16, Jan 2020</span>
                </td>
                <td>USER050 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=50&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=50&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/amine" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=50" className="db-list-edit">More</a></td>
              </tr>
              <tr>
                <td>123</td>
                <td><img src="../images/user/1.jpg" alt=""/>chahir<span>chahirjbali@gmail.com</span> <span>Join:
                    16, Jan 2020</span>
                </td>
                <td>USER049 </td>
                <td>General </td>
                {/*                                <td><span class="db-list-rat">52</span></td>*/}
                {/*                                <td><span class="db-list-rat">124</span></td>*/}
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-my-profile-edit.html?row=49&path=3" className="db-list-edit">Edit</a></td>
                <td><a href="admin-my-profile-delete.html?row=49&path=3" className="db-list-edit">Delete</a></td>
                <td><a href="http://localhost/directory/bizbook/profile/chahir" className="db-list-edit" target="_blank">Preview</a></td>
                <td><a href="admin-user-full-details.html?row=49" className="db-list-edit">More</a></td>
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
