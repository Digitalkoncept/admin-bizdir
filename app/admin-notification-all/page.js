import React from 'react'

const page = () => {
  return (
 <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All Notifications</span>
        <div className="ud-cen-s2">
          <h2>Notifications you sent</h2>
          <a href="admin-create-notification.html" className="db-tit-btn">Send new notification</a>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Send To</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>test <span>19, Apr 2020</span></td>
                <td>All Service Providers</td>
                <td><a href="admin-notification-edit.html?id=27" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=27" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>demo2 <span>16, Apr 2020</span></td>
                <td>All Users</td>
                <td><a href="admin-notification-edit.html?id=26" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=26" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>demo <span>16, Apr 2020</span></td>
                <td>All Users</td>
                <td><a href="admin-notification-edit.html?id=25" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=25" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td>https://www.location-voitures-maurice.com/ <span>15, Apr 2020</span></td>
                <td>All Users</td>
                <td><a href="admin-notification-edit.html?id=24" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=24" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td>preuba <span>07, Apr 2020</span></td>
                <td>All Service Providers</td>
                <td><a href="admin-notification-edit.html?id=23" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=23" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Homey massage offer 50% <span>30, Mar 2020</span></td>
                <td>All Users</td>
                <td><a href="admin-notification-edit.html?id=22" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=22" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td>How lead tracking works? <span>12, Jan 2020</span></td>
                <td>All Users</td>
                <td><a href="admin-notification-edit.html?id=15" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=15" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Other url redirect <span>04, Jan 2020</span></td>
                <td>All Users</td>
                <td><a href="admin-notification-edit.html?id=13" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=13" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td>How to install directoryfinder template? <span>29, Dec 2019</span></td>
                <td>All Users</td>
                <td><a href="admin-notification-edit.html?id=12" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=12" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td>How to add new listing? <span>04, Dec 2019</span></td>
                <td>All Users</td>
                <td><a href="admin-notification-edit.html?id=9" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=9" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td>Best Business Directory Template <span>12, Jan 2020</span></td>
                <td>All Premium Plus Users</td>
                <td><a href="admin-notification-edit.html?id=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=7" className="db-list-edit">Delete</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td>1test noti title1 <span>30, Nov 2019</span></td>
                <td>All Service Providers</td>
                <td><a href="admin-notification-edit.html?id=5" className="db-list-edit">Edit</a></td>
                <td><a href="admin-notification-delete.html?id=5" className="db-list-edit">Delete</a></td>
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
