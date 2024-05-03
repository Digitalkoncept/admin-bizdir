import React from 'react'

const page = () => {
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Add new user</span>
        <div className="ud-cen-s2 ud-pro-edit">
          <h2>User details</h2>
          <form name="register_form" id="register_form" method="post" action="../register_update.html" encType="multipart/form-data" className>
            <input type="hidden" autoComplete="off" name="trap_box" id="trap_box" className="validate" />
            <input type="hidden" autoComplete="off" name="mode_path" defaultValue="XeBaCk_MoDeX_PATHXHU" id="mode_path" className="validate" />
            <table className="responsive-table bordered">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    <div className="form-group">
                      <input type="text" required="required" autoComplete="off" name="first_name" id="first_name" className="form-control" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Email id</td>
                  <td>
                    <div className="form-group">
                      <input type="email" required="required" autoComplete="off" name="email_id" id="email_id" className="form-control" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Pofile password</td>
                  <td>
                    <div className="form-group">
                      <input type="text" autoComplete="off" required="required" name="password" id="password" className="form-control" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Mobile number</td>
                  <td>
                    <div className="form-group">
                      <input type="text" required="required" autoComplete="off" name="mobile_number" id="mobile_number" className="form-control" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Profile picture</td>
                  <td>
                    <div className="form-group">
                      <input type="file" name="profile_image" className="form-control" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    <div className="form-group">
                      <input type="text" className="form-control" name="user_address" />
                    </div>
                  </td>
                </tr>
                {/*                                <tr>*/}
                {/*                                    <td>City</td>*/}
                {/*                                    <td>*/}
                {/*                                        <div class="form-group">*/}
                {/*                                            <input type="text" class="form-control" value="Illunois">*/}
                {/*                                        </div>*/}
                {/*                                    </td>*/}
                {/*                                </tr>*/}
                <tr>
                  <td>User type</td>
                  <td>
                    <div className="form-group">
                      <select name="user_type" required="required" id="user_type" className="chosen-select form-control ca-check-plan">
                        <option value>User type</option>
                        <option value="General">General user</option>
                        <option value="Service provider">Service provider</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>User Plan</td>
                  <td>
                    <div className="form-group">
                      <select name="user_plan" id="user_plan" className="form-control">
                        <option value disabled="disabled" selected="selected">Choose your plan</option>
                        <option value={1}>Free</option>
                        <option value={2}>Standard - 9/year</option>
                        <option value={3}>Premium - 19/year</option>
                        <option value={4}>Premium Plus - 20/year</option>
                      </select>
                    </div>
                  </td>
                </tr>
                {/*                                <tr>*/}
                {/*                                    <td>Plan start date</td>*/}
                {/*									<td>*/}
                {/*                                        <div class="form-group">*/}
                {/*                                            <input type="text" id="stdate" value="12 Jan 2018" class="form-control">*/}
                {/*                                        </div>*/}
                {/*                                    </td>*/}
                {/*								</tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>Plan expiry date</td>*/}
                {/*									<td>*/}
                {/*                                        <div class="form-group">*/}
                {/*                                          <input type="text" id="endate" value="12 Jan 2018" class="form-control">*/}
                {/*                                        </div>*/}
                {/*                                    </td>*/}
                {/*								</tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>Amount paid</td>*/}
                {/*									<td>*/}
                {/*                                        <div class="form-group">*/}
                {/*                                          <input type="text" class="form-control" value="$250">*/}
                {/*                                        </div>*/}
                {/*                                    </td>*/}
                {/*								</tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>Join date</td>*/}
                {/*									<td>*/}
                {/*                                        <div class="form-group">*/}
                {/*                                          <input type="text" class="form-control" value="12 April 2018">*/}
                {/*                                        </div>*/}
                {/*                                    </td>*/}
                {/*								</tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>Verified</td>*/}
                {/*									<td>*/}
                {/*                                        <div class="form-group">*/}
                {/*                                          <select class="form-control">*/}
                {/*                                            <option>Yes</option>*/}
                {/*                                            <option>No</option>*/}
                {/*                                          </select>*/}
                {/*                                        </div>*/}
                {/*                                    </td>*/}
                {/*								</tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>Rating</td>*/}
                {/*									<td>*/}
                {/*                                        <div class="form-group">*/}
                {/*                                          <select class="form-control">*/}
                {/*                                              <option>1</option>*/}
                {/*                                              <option>1.5</option>*/}
                {/*                                              <option>2.0</option>*/}
                {/*                                              <option>2.5</option>*/}
                {/*                                              <option>3.0</option>*/}
                {/*                                              <option>3.5</option>*/}
                {/*                                              <option>4.0</option>*/}
                {/*                                              <option>4.5</option>*/}
                {/*                                              <option>5.0</option>*/}
                {/*                                          </select>*/}
                {/*                                        </div>*/}
                {/*                                    </td>*/}
                {/*								</tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>Premium service provider</td>*/}
                {/*									<td>*/}
                {/*                                        <div class="form-group">*/}
                {/*                                          <select class="form-control">*/}
                {/*                                            <option>Yes</option>*/}
                {/*                                            <option>No</option>*/}
                {/*                                          </select>*/}
                {/*                                        </div>*/}
                {/*                                    </td>*/}
                {/*								</tr>*/}
                <tr>
                  <td>Facebook</td>
                  <td>
                    <div className="form-group">
                      <input type="text" name="user_facebook" className="form-control" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>
                    <div className="form-group">
                      <input type="text" name="user_twitter" className="form-control" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Youtube</td>
                  <td>
                    <div className="form-group">
                      <input type="text" name="user_youtube" className="form-control" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>
                    <div className="form-group">
                      <input type="text" name="user_website" className="form-control" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit" name="register_submit" className="db-pro-bot-btn">Add User</button>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
