import React from 'react'

const page = () => {
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Feature Filters</span>
        <div className="ud-cen-s2">
          <h2>All Feature Filters</h2>
          <form name="featured_filter_form" id="featured_filter_form" method="post" action="update_feature_filters.html" encType="multipart/form-data">
            <table className="responsive-table bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Feature Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <input type="hidden" className="form-control" name="all_featured_filter_id[]" defaultValue={1} />
                <tr>
                  <td>1</td>
                  <td>Trusted services provider</td>
                  <td>
                    <select name="all_featured_filter_status[]" className="chosen-select form-control filt-sele">
                      <option selected="selected" value={1}>Active
                      </option>
                      <option value={0}>InActive
                      </option>
                    </select>
                  </td>
                </tr>
                <input type="hidden" className="form-control" name="all_featured_filter_id[]" defaultValue={2} />
                <tr>
                  <td>2</td>
                  <td>Premium services</td>
                  <td>
                    <select name="all_featured_filter_status[]" className="chosen-select form-control filt-sele">
                      <option selected="selected" value={1}>Active
                      </option>
                      <option value={0}>InActive
                      </option>
                    </select>
                  </td>
                </tr>
                <input type="hidden" className="form-control" name="all_featured_filter_id[]" defaultValue={3} />
                <tr>
                  <td>3</td>
                  <td>Verified services</td>
                  <td>
                    <select name="all_featured_filter_status[]" className="chosen-select form-control filt-sele">
                      <option selected="selected" value={1}>Active
                      </option>
                      <option value={0}>InActive
                      </option>
                    </select>
                  </td>
                </tr>
                <input type="hidden" className="form-control" name="all_featured_filter_id[]" defaultValue={4} />
                <tr>
                  <td>4</td>
                  <td>Trending services</td>
                  <td>
                    <select name="all_featured_filter_status[]" className="chosen-select form-control filt-sele">
                      <option selected="selected" value={1}>Active
                      </option>
                      <option value={0}>InActive
                      </option>
                    </select>
                  </td>
                </tr>
                <input type="hidden" className="form-control" name="all_featured_filter_id[]" defaultValue={5} />
                <tr>
                  <td>5</td>
                  <td>Offers and discounts</td>
                  <td>
                    <select name="all_featured_filter_status[]" className="chosen-select form-control filt-sele">
                      <option selected="selected" value={1}>Active
                      </option>
                      <option value={0}>InActive
                      </option>
                    </select>
                  </td>
                </tr>
                <input type="hidden" className="form-control" name="all_featured_filter_id[]" defaultValue={6} />
                <tr>
                  <td>6</td>
                  <td>Latest updated</td>
                  <td>
                    <select name="all_featured_filter_status[]" className="chosen-select form-control filt-sele">
                      <option selected="selected" value={1}>Active
                      </option>
                      <option value={0}>InActive
                      </option>
                    </select>
                  </td>
                </tr>
                <input type="hidden" className="form-control" name="all_featured_filter_id[]" defaultValue={7} />
                <tr>
                  <td>7</td>
                  <td>Most likes</td>
                  <td>
                    <select name="all_featured_filter_status[]" className="chosen-select form-control filt-sele">
                      <option selected="selected" value={1}>Active
                      </option>
                      <option value={0}>InActive
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <button type="submit" name="featured_filter_submit" className="db-pro-bot-btn">Save
                      changes
                    </button>
                  </td>
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
