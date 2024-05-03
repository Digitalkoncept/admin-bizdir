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
              <span className="udb-inst">Add Google AdSense Code</span>
              <div className="log log-1">
                <div className="login">
                  <h4>Google AdSense</h4>
                  <form name="country_form" id="country_form" method="post" className="cre-dup-form cre-dup-form-show">
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea name="search_title" className="form-control" placeholder="Google analytics code *" required defaultValue={"<!--  Google Analytics  -->\n"} />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <button type="submit" name="country_submit" className="btn btn-primary">Submit</button>
                  </form>
                  <div className="ud-notes">
                    <p><b>Notes:</b> You can get <b>Google AdSense</b> code from <b>Google</b> and paste above the box. Once you update the Google Ads means Ads start showing all Ads positions. If you updated any <b>custom banner Ads</b> in any other position means <b>Google Ads can&apos;t showing the particular positions</b>.</p>
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
