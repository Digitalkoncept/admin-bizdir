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
              <span className="udb-inst">New Listing Sub Category</span>
              <div className="log log-1">
                <div className="login">
                  <h4>Add New Listing Sub Category</h4>
                  <span className="add-list-add-btn scat-add-btn" data-toggle="tooltip" title="Click to create additional Sub Category field">+</span>
                  <span className="add-list-rem-btn scat-rem-btn" data-toggle="tooltip" title="Click to remove Sub Category field">-</span>
                  <form name="sub_category_form" id="sub_category_form" method="post" action="insert_sub_category.html" encType="multipart/form-data" className="cre-dup-form cre-dup-form-show">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <select name="category_id" className="form-control" id="category_name">
                            <option value={19}>Wedding halls</option>
                            <option value={18}>Hotel &amp; Food</option>
                            <option value={17}>Pet shop</option>
                            <option value={16}>Digital Products</option>
                            <option value={15}>Spa and Facial</option>
                            <option value={10}>Real Estate</option>
                            <option value={8}>Sports</option>
                            <option value={7}>Education</option>
                            <option value={6}>Electricals</option>
                            <option value={5}>Automobiles</option>
                            <option value={3}>Transportation</option>
                            <option value={2}>Hospitals</option>
                            <option value={1}>Hotels And Resorts</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <br />
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" name="sub_category_name[]" className="form-control" placeholder="Sub category name *" required />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <button type="submit" name="sub_category_submit" className="btn btn-primary">Submit</button>
                  </form>
                  <div className="col-md-12">
                    <a href="admin-all-sub-category.html" className="skip">Go to All Listing Sub Category &gt;&gt;</a>
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
