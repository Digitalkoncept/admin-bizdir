import React from 'react'

const page = () => {
  return (
  <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Home page category</span>
        <div className="ud-cen-s2 hcat-cho">
          <h2>Home page category</h2>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Trending category</th>
                <th>Background Image</th>
                <th>Thumbnail Image</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Hotels And Resorts</td>
                <td>
                  <img src="../images/services/95787pexels-asad-photo-maldives-1450363.jpg" alt=""/>
                </td>
                <td>
                  <img src="../images/services/1.jpg" alt=""/>
                </td>
                <td><a href="admin-trending-category-edit.html?row=1" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Automobiles</td>
                <td>
                  <img src="../images/services/40693capture4.png" alt=""/>
                </td>
                <td>
                  <img src="../images/services/5896413.jpg" alt=""/>
                </td>
                <td><a href="admin-trending-category-edit.html?row=2" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Wedding halls</td>
                <td>
                  <img src="../images/services/47049ser4.jpg" alt=""/>
                </td>
                <td>
                  <img src="../images/services/20356s7.jpeg" alt=""/>
                </td>
                <td><a href="admin-trending-category-edit.html?row=3" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Digital Products</td>
                <td>
                  <img src="../images/services/87731pexels-pixabay-461064.jpg" alt=""/>
                </td>
                <td>
                  <img src="../images/services/88878hangouts-800x391.jpg" alt=""/>
                </td>
                <td><a href="admin-trending-category-edit.html?row=4" className="db-list-edit">Edit</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Real Estate</td>
                <td>
                  <img src="../images/services/32555capture2.png" alt=""/>
                </td>
                <td>
                  <img src="../images/services/20356s7.jpeg" alt=""/>
                </td>
                <td><a href="admin-trending-category-edit.html?row=5" className="db-list-edit">Edit</a></td>
              </tr>
              {/*                                <tr>*/}
              {/*                                    <td>2</td>*/}
              {/*                                    <td>Guym and fitness</td>*/}
              {/*                                    <td>*/}
              {/*                                       <img src="../images/services/2.jpg" alt=""> */}
              {/*                                    </td>*/}
              {/*                                    <td>*/}
              {/*                                       <img src="../images/services/1.jpg" alt=""> */}
              {/*                                    </td>*/}
              {/*                                    <td><a href="admin-home-tren-category-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*								</tr>*/}
              {/*                                <tr>*/}
              {/*                                    <td>3</td>*/}
              {/*                                    <td>Hospital and midicals</td>*/}
              {/*                                    <td>*/}
              {/*                                       <img src="../images/services/3.jpg" alt=""> */}
              {/*                                    </td>*/}
              {/*                                    <td>*/}
              {/*                                       <img src="../images/services/1.jpg" alt=""> */}
              {/*                                    </td>*/}
              {/*                                    <td><a href="admin-home-tren-category-edit.html" class="db-list-edit">Edit</a></td>*/}
              {/*								</tr>*/}
              {/*                                <tr>*/}
              {/*                                    <td>4</td>*/}
              {/*                                    <td>Car and bike</td>*/}
              {/*                                    <td>*/}
              {/*                                       <img src="../images/services/4.jpg" alt=""> */}
              {/*                                    </td>*/}
              {/*                                    <td>*/}
              {/*                                       <img src="../images/services/1.jpg" alt=""> */}
              {/*                                    </td>*/}
              {/*                                    <td><a href="admin-home-tren-category-edit.html" class="db-list-edit">Edit</a></td>*/}
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
