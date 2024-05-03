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
              <span className="udb-inst">new listing</span>
              <div className="log log-1">
                <div className="login">
                  <h4>Add New Listings</h4>
                  <div className="row cre-dup">
                    <div className="col-md-6">
                      <a href="admin-add-new-listings-start.html">Create listing from scratch</a>
                    </div>
                    <div className="col-md-6">
                      <a href="admin-create-duplicate-listing.html">Create duplicate listing</a>
                      {/*                                    <span class="cre-dup-btn">Create duplicate listing</span>*/}
                    </div>
                  </div>
                  <form className="cre-dup-form">
                    {/*FILED START*/}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <select className="form-control">
                            <option>Choose what listing you going to copy</option>
                            <option>The Real Finness for Womens</option>
                            <option>Lux Facial and Spa</option>
                            <option>3BHK flat for sale</option>
                            <option>All in one mechanic shop</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/*FILED END*/}
                    {/*FILED START*/}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Listing name *" />
                        </div>
                      </div>
                    </div>
                    {/*FILED END*/}
                    <button type="submit" className="btn btn-primary">Next</button>
                  </form>
                  <div className="col-md-12">
                    <a href="profile.html" className="skip">Go to user dashboard &gt;&gt;</a>
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
