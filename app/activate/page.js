import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash adda-oly leftpadd">
      {/*            User Welcome Div starts */}
      <div className="ad-dash-s1">
        <div className="cd-cen-intr-inn cd-cen-intr-inn2">
          <h2>Welcome to <b>Bizbook activation</b></h2>
          <p>Easy to activate and enjoy our Bizbook template.</p>
        </div>
      </div>
      {/*User Welcome Div ends */}
      <div className="biz-updates">
        <div className="ud-notes">
          <p><b>Notes:</b> Enter your purchase code to the below box and activate your BUSINESS DIRECTORY
            template. Once you use your purchase code for your domain means you can't use the same purchase
            code to another domain. Your purchase code only for one domain not for multi-domain use.</p>
        </div>
        <div className="templ-acti">
          <form name="activation_form" id="activation_form" action="update_activation.html" method="post" className="cre-dup-form cre-dup-form-show">
            <ul>
              <li>
                <input type="text" name="purchase_code" id="purchase_code" required="required" placeholder="Enter your purchase code." />
                <button type="submit" name="code_activation_submit" className="btn btn-primary">Submit
                </button>
              </li>
            </ul>
          </form>
        </div>
        <div className="inn">
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>Domain</th>
                <th>Installation date</th>
                <th>Activate date</th>
                <th>Expiry date</th>
                <th>Activation</th>
                <th>De-Activation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>www.rn53themes.net</td>
                <td>12 Jan 2021</td>
                <td>24 Jan 2021</td>
                <td>Null</td>
                <td><span className="btn-sml btn-c-gre">Yes</span></td>
                <td><span className="btn-sml btn-c-red">De-activate </span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
