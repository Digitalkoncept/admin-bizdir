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
              <span className="udb-inst">New Country</span>
              <div className="log log-1">
                <div className="login">
                  <h4>Add New Country</h4>
                  <span className="add-list-add-btn count-add-btn" data-toggle="tooltip" title="Click to make additional Country field">+</span>
                  <span className="add-list-rem-btn count-rem-btn" data-toggle="tooltip" title="Click to remove last Country field">-</span>
                  <form name="country_form" id="country_form" method="post" action="insert_country.html" encType="multipart/form-data" className="cre-dup-form cre-dup-form-show">
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" name="country_name[]" className="form-control" placeholder="Country name *" required />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <button type="submit" name="country_submit" className="btn btn-primary">Submit</button>
                  </form>
                  <div className="col-md-12">
                    <a href="admin-all-country.html" className="skip">Go to All Country &gt;&gt;</a>
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
