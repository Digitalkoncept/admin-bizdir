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
              <span className="udb-inst">Export</span>
              <div className="log log-1">
                <div className="login">
                  <h4>Export Datas</h4>
                  <form>
                    {/*FILED START*/}
                    <div className="row">
                      <div className="col-md-12">
                        <a href="export_all_database.html"> <button type="button" className="btn btn-primary">Click here to export all
                            files
                          </button></a>
                      </div>
                      <div className="col-md-12">
                        <a href="profile.html" className="skip">Go to User Dashboard &gt;&gt;</a>
                      </div>
                    </div>
                    {/*FILED END*/}
                  </form>
                  <div className="ud-notes">
                    <p><b>Notes:</b> Hi, Here you can import your old database files with in a
                      minutes. If yourare ready to import your files means please follow below
                      instructions
                    </p>
                    <ul>
                      <li>Please export your current files(for safety purposes)</li>
                      <li>Make sure ready your import files like our database schema(database
                        table structure)
                      </li>
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
