import React from 'react'

const page = () => {
  return (
  <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <section className="login-reg">
        <div className="container">
          <div className="row">
            <div className="login-main add-list add-ncate">
              <div className="log-bor">&nbsp;</div>
              <span className="udb-inst">Points Settings</span>
              <div className="log log-1">
                <div className="login">
                  <h4>Points Settings</h4>
                  {/*                            <span class="add-list-add-btn city-add-btn" data-toggle="tooltip" title="Click to make additional City field">+</span>*/}
                  {/*							<span class="add-list-rem-btn city-rem-btn" data-toggle="tooltip" title="Click to remove last City field">-</span>*/}
                  <form name="point_setting_form" id="point_setting_form" method="post" action="update_point_setting.html" encType="multipart/form-data" className="cre-dup-form cre-dup-form-show">
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Cost Per Point :</label>
                              <input type="text" autoComplete="off" onkeypress="return isNumber(event)" defaultValue={1} name="cost_per_point" id="cost_per_point" className="form-control" placeholder="Cost per Point *" required />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <button type="submit" name="cost_per_point_submit" className="btn btn-primary">Submit</button>
                  </form>
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
