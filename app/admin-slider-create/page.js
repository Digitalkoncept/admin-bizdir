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
              <div className="log-bor">&nbsp;</div>
              <span className="udb-inst">Add Slider Photo</span>
              <div className="log log-1">
                <div className="login">
                  <h4>Add New Slider Photo</h4>
                  <form name="slider_form" id="slider_form" method="post" action="insert_new_slider.html" encType="multipart/form-data">
                    <ul>
                      <li>
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Choose slider image</label>
                              <input type="file" name="slider_photo" className="form-control" required />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea id="slider_link" name="slider_link" className="form-control" placeholder="Slider External link" required defaultValue={""} />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/*FILED START*/}
                    <div className="row">
                      <div className="col-md-12">
                        <button type="submit" name="slider_submit" className="btn btn-primary">Submit</button>
                      </div>
                      <div className="col-md-12">
                        <a href="profile.html" className="skip">Go to User Dashboard &gt;&gt;</a>
                      </div>
                    </div>
                    {/*FILED END*/}
                  </form>
                  <div className="ud-notes">
                    <p><b>Notes:</b> Hi, Before submit your <b>Ads</b> please check the <b>available date</b> because previous Ads running in same date. Kindly check this manually</p>
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
