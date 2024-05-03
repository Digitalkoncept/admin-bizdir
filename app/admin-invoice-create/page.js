import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Create Invoices</span>
        <div className="ud-cen-s2 add-list">
          <div id="content2" contentEditable="true">
            <div className="pdf-main">
              <div className="inn">
                <div className="head">
                  <h2>Premium Plus - Invoice</h2>
                </div>
                <div className="con">
                  <p>Your are the golden member of the worlds No:1 business directory portal
                    website.</p>
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>User</td>
                        <td>:</td>
                        <td>Andriya jue</td>
                      </tr>
                      <tr>
                        <td>Plan type</td>
                        <td>:</td>
                        <td>Premium Plus</td>
                      </tr>
                      <tr>
                        <td>Amount paid</td>
                        <td>:</td>
                        <td>$250</td>
                      </tr>
                      <tr>
                        <td>Email id</td>
                        <td>:</td>
                        <td>andriya@business.com</td>
                      </tr>
                      <tr>
                        <td>Payment type</td>
                        <td>:</td>
                        <td>Cash on delivery</td>
                      </tr>
                      <tr>
                        <td>Profile</td>
                        <td>:</td>
                        <td>www.businessdire.com/profile/andriya</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="but">
                  <p>Your are the golden member of worlds No:1 business directory portal website.</p>
                </div>
                <div className="foot">
                  <p>Thank you for a member of Biz</p>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-mpdf" id="downloadPDF">Click to Download PDF</button>
          {/*                    <div class="col-md-12">*/}
          {/*                        <a href="admin-send-invoice.html" class="skip">Send Invoice &gt;&gt;</a>*/}
          {/*                    </div>*/}
          <div className="ud-notes">
            <p><b>Notes:</b> Hi, here you can able to edit all text and title also. You just click the text
              and change it and click &quot;Click to download pdf&quot; button to generate your invoice.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
