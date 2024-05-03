import React from 'react'

const page = () => {
  return (
  <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Social media share options</span>
        <div className="ud-cen-s2">
          <h2>Share options</h2>
          <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Social media</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Facebook</td>
                <td>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="share_button custom-control-input" name="admin_share_facebook" id="admin_share_facebook" defaultChecked />
                    <label className="custom-control-label" htmlFor="admin_share_facebook">&nbsp;</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Twitter</td>
                <td>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="share_button custom-control-input" name="admin_share_twitter" id="admin_share_twitter" defaultChecked />
                    <label className="custom-control-label" htmlFor="admin_share_twitter">&nbsp;</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>WhatsApp</td>
                <td>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="share_button custom-control-input" name="admin_share_whatsapp" id="admin_share_whatsapp" defaultChecked />
                    <label className="custom-control-label" htmlFor="admin_share_whatsapp">&nbsp;</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>LinkedIn</td>
                <td>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="share_button custom-control-input" name="admin_share_linkedin" id="admin_share_linkedin" defaultChecked />
                    <label className="custom-control-label" htmlFor="admin_share_linkedin">&nbsp;</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Instagram</td>
                <td>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="share_button custom-control-input" name="admin_share_instagram" id="admin_share_instagram" defaultChecked />
                    <label className="custom-control-label" htmlFor="admin_share_instagram">&nbsp;</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Pinterest</td>
                <td>
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="share_button custom-control-input" name="admin_share_pinterest" id="admin_share_pinterest" defaultChecked />
                    <label className="custom-control-label" htmlFor="admin_share_pinterest">&nbsp;</label>
                  </div>
                </td>
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
