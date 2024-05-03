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
              <span className="udb-inst">New Product Category</span>
              <div className="log log-1">
                <div className="login">
                  <h4>Add New Product Category</h4>
                  <span className="add-list-add-btn cate-add-btn" data-toggle="tooltip" title="Click to make additional category">+</span>
                  <span className="add-list-rem-btn cate-rem-btn" data-toggle="tooltip" title="Click to remove last category">-</span>
                  <form name="category_form" id="category_form" method="post" action="insert_product_category.html" className="cre-dup-form cre-dup-form-show" encType="multipart/form-data">
                    <ul>
                      <li>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" id="category_name" name="category_name[]" className="form-control" placeholder="Category name *" required />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Choose category image</label>
                              <input type="file" name="category_image[]" id="category_image" className="form-control" required />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <button type="submit" name="category_submit" className="btn btn-primary">Submit</button>
                  </form>
                  <div className="col-md-12">
                    <a href="admin-all-product-category.html" className="skip">Go to All Category &gt;&gt;</a>
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
