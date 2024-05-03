import React from 'react'

const page = () => {
  return (
  <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Listing Filters</span>
        <div className="ud-cen-s2">
          <h2>All Listing Filters</h2>
          <form name="all_filter_form" id="all_filter_form" method="post" action="update_all_filters.html" encType="multipart/form-data">
            <table className="responsive-table bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Filter Name</th>
                  <th colSpan={2}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Search the service</td>
                  <td colSpan={2}>
                    <select name="service_filter" className=" form-control filt-sele">
                      <option selected value="Active">Active
                      </option>
                      <option value="Inactive">Inactive
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Categories filter</td>
                  <td>
                    <select name="category_filter" className=" form-control filt-sele">
                      <option selected value="Active">Active
                      </option>
                      <option value="Inactive">Inactive
                      </option>
                    </select>
                  </td>
                  <td><a href="admin-filter-category.html" className="db-list-edit">Go to filter</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Features filter</td>
                  <td>
                    <select name="feature_filter" className=" form-control filt-sele">
                      <option selected value="Active">Active
                      </option>
                      <option value="Inactive">Inactive
                      </option>
                    </select>
                  </td>
                  <td><a href="admin-filter-features.html" className="db-list-edit">Go to filter</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Rating filter</td>
                  <td colSpan={2}>
                    <select name="rating_filter" className=" form-control filt-sele">
                      <option selected value="Active">Active
                      </option>
                      <option value="Inactive">Inactive
                      </option>
                    </select>
                  </td>
                </tr>
                {/*                                <tr>*/}
                {/*                                    <td>5</td>*/}
                {/*                                    <td>City filter</td>*/}
                {/*                                    <td colspan="2">*/}
                {/*                                        <select name="city_filter" class=" form-control filt-sele">*/}
                {/*                                            <option */}{/* value="Active">Active*/}
                {/*                                            </option>*/}
                {/*                                            <option */}{/* value="Inactive">Inactive*/}
                {/*                                            </option>*/}
                {/*                                        </select>*/}
                {/*                                    </td>*/}
                {/*                                </tr>*/}
                {/*                                <tr>*/}
                {/*                                    <td>6</td>*/}
                {/*                                    <td>Country filter</td>*/}
                {/*                                    <td colspan="2">*/}
                {/*                                        <select name="country_filter" class=" form-control filt-sele">*/}
                {/*                                            <option */}{/* value="Active">Active*/}
                {/*                                            </option>*/}
                {/*                                            <option */}{/* value="Inactive">Inactive*/}
                {/*                                            </option>*/}
                {/*                                        </select>*/}
                {/*                                    </td>*/}
                {/*                                </tr>*/}
                <tr>
                  <td colSpan={4}>
                    <button type="submit" name="all_filter_submit" className="db-pro-bot-btn">Save
                      changes
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className="ud-notes">
            <p><b>Notes:</b> Hi, here we show 6 types of filters in All Listing pages. If you don&apos;t want any filter means you can just change the <b>Status</b> like <b>Active or De-Active</b> once you change the status like <b>De-Active</b> means the filter can&apos;t show in All Listing</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
