import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <section className="login-reg">
        <div className="container">
          <div className="row">
            <div className="login-main add-list posr">
              <div className="log-bor">&nbsp;</div> <span className="udb-inst">New notification</span>
              <div className="log log-1">
                <div className="login">
                  <h4>Send new Notification</h4>
                  <form name="notification_form" id="notification_form" method="post" action="insert_notification.html" encType="multipart/form-data" className>
                    <ul>
                      <li>
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <select id="notification_user" name="notification_user" required="required" className="form-control">
                                <option value>Choose user</option>
                                <option value={100}>All Users</option>
                                <option value={101}>All Service Providers</option>
                                <option value={102}>All General Users</option>
                                <option value={1}>All Free Users</option>
                                <option value={2}>All Standard Users</option>
                                <option value={3}>All Premium Users</option>
                                <option value={4}>All Premium Plus Users</option>
                                {/*                                                    <option>Premium Users</option>*/}
                                {/*                                                    <option>Standard Users</option>*/}
                                {/*                                                    <option>Free Users</option>*/}
                              </select>
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" id="notification_title" name="notification_title" required="required" className="form-control" placeholder="Notification title *" />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" id="notification_message" name="notification_message" required="required" className="form-control" placeholder="Short description *" />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" id="notification_link" name="notification_link" required="required" className="form-control" placeholder="Page link *" />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                      </li>
                    </ul>
                    {/*FILED START*/}
                    <div className="row">
                      <div className="col-md-12">
                        <button type="submit" name="notification_submit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>
                    {/*FILED END*/}
                  </form>
                  <div className="col-md-12"> <a href="admin-notification-all.html" className="skip">Go to all notifications &gt;&gt;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</section>

  )
}

export default page
