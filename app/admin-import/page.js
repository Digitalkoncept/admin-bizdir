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
              <span className="udb-inst">Import</span>
              <div className="log log-1">
                <div className="login">
                  <h4>Import Datas</h4>
                  <form name="upload_bulk_form" id="upload_bulk_form" method="post" action="update_upload_bulk_listings.html" encType="multipart/form-data">
                    {/*                                        <input type="hidden" class="validate" id="ad_id"*/}
                    {/*                                               name="ad_id"*/}
                    {/*                                               value="*/}{/*" required="required">*/}
                    <ul>
                      <li>
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Choose import file</label>
                              <input type="file" name="file" id="file" className="form-control" required />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                      </li>
                    </ul>
                    {/*FILED START*/}
                    <div className="row">
                      <div className="col-md-12">
                        <button type="submit" name="upload_bulk_submit" className="btn btn-primary">Import Now</button>
                      </div>
                      <div className="col-md-12">
                        <a href="profile.html" className="skip">Go to User Dashboard &gt;&gt;</a>
                      </div>
                    </div>
                    {/*FILED END*/}
                  </form>
                  <div className="ud-notes">
                    <p><b>Notes:</b> Hi, Here you can import your old database files with in a
                      minutes. If you are ready to import your files means please follow below
                      instructions
                    </p>
                    <ul>
                      <li>Please export your current files(for safety purposes)</li>
                      <li>Make sure ready your import files like our database schema(database
                        table structure)
                      </li>
                      <li>Please Convert Excel File To .CSV Format Then Upload</li>
                      <li>The Uploading CSV File Should Be in This Below Order Only</li>
                      <li>
                        <table>
                          <thead>
                            <tr><th>Business Type</th>
                              <th>Phone</th>
                              <th>Company</th>
                              <th>Address</th>
                              <th>City</th>
                              <th>State</th>
                              <th>Post_Code</th>
                              <th>Country</th>
                            </tr></thead>
                          <tbody>
                            <tr>
                              <td>Salon</td>
                              <td>[1] 416 966 6703</td>
                              <td>D HAIR &amp; SKIN CARE SALON</td>
                              <td>26 Cumberland St</td>
                              <td>TORONTO</td>
                              <td>ON</td>
                              <td>M6A 2X1</td>
                              <td>CANADA</td>
                            </tr>
                            <tr>
                              <td>Salon</td>
                              <td>[1] 416 966 6703</td>
                              <td>DEBBIE&apos;S STYLE N PLACE</td>
                              <td>26 Cumberland St</td>
                              <td>HANOVER</td>
                              <td>ON</td>
                              <td>N4N 3T8</td>
                              <td>CANADA</td>
                            </tr>
                            <tr>
                              <td>Salon</td>
                              <td>[1] 519 364 4382</td>
                              <td>THE HAIR HOUSE UNISEX</td>
                              <td>2175 Victoria Park Ave</td>
                              <td>SCARBOROUGH</td>
                              <td>ON</td>
                              <td>M1R 1V6</td>
                              <td>CANADA</td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li>Cross Check The Uploading .CSV File Muliple Times Before Uploading</li>
                      <li>The Uploading Time Depends On the Number Of Records You are Uploading Please Wait For Whole Uploade To be Complete!!!</li>
                    </ul>
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
