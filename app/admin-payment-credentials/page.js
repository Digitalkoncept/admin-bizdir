import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Payment</span>
        <div className="ud-cen-s2">
          <h2>Payment details</h2>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Payment type</th>
                <th>Details</th>
                <th>Currency</th>
                <th>Edit</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Cash on delivery</td>
                <td><span className="db-list-rat">Free</span></td>
                <td><span className="db-list-rat"> - </span></td>
                <td><a href="admin-payment-credentials-edit.html?row=cod" className="db-list-edit">Edit</a></td>
                <td><span className="db-list-appro">InActive</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>PayPal</td>
                <td><span className="db-list-rat">rn53themes@gmail.com</span></td>
                <td><span className="db-list-rat">USD</span></td>
                <td><a href="admin-payment-credentials-edit.html?row=paypal" className="db-list-edit">Edit</a></td>
                <td><span className="db-list-appro">Active</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Stripe</td>
                <td><span className="db-list-rat">pk_test_oeP6xrVYPkQhUkfbkyApYzsI006jhjc2ty</span></td>
                <td><span className="db-list-rat">USD</span></td>
                <td><a href="admin-payment-credentials-edit.html?row=stripe" className="db-list-edit">Edit</a></td>
                <td><span className="db-list-appro">Active</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Razorpay</td>
                <td><span className="db-list-rat">rzp_test_1P75TKgIdBX78c</span></td>
                <td><span className="db-list-rat">INR</span></td>
                <td><a href="admin-payment-credentials-edit.html?row=razor_pay" className="db-list-edit">Edit</a></td>
                <td><span className="db-list-appro">Active</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Paytm</td>
                <td><span className="db-list-rat">ZIdzeQ03402905630234</span></td>
                <td><span className="db-list-rat">INR</span></td>
                <td><a href="admin-payment-credentials-edit.html?row=paytm" className="db-list-edit">Edit</a></td>
                <td><span className="db-list-appro">Active</span></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Ozow</td>
                <td><span className="db-list-rat">pk_test_oeP6xrVYPkQhUkfbkyApYzsI006jhjc2ty</span></td>
                <td><a href="admin-payment-credentials-edit.html?row=stripe" className="db-list-edit">Edit</a></td>
                <td><span className="db-list-appro">Active</span></td>
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
