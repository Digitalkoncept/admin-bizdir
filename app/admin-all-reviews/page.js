import React from 'react'

const page = () => {
  return (
 <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Reviews</span>
        <div className="ud-cen-s2">
          <h2>Listing Reviews</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <table className="responsive-table bordered tb-bold-dis" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Message</th>
                <th>Ratings</th>
                <th>Listing name</th>
                <th>URL</th>
                <th>Delete</th>
                <th>Save</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Loki <span>12, Mar 2021</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>87654567</td>
                <td />
                <td>Perfect service</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Ocha Thai Cuisine</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=104" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Loki <span>12, Mar 2021</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>87654567</td>
                <td />
                <td>Nice service... i really like this...</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td />
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=103" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Rn53 Themes <span>07, Mar 2021</span></td>
                <td>rn53themes@gmail.com</td>
                <td>5522114422</td>
                <td />
                <td>verified_userRolexo Villas is well-known to all as a premier builder of villas and apartments. Even though they have various departments they stay united in giving the customers the best service. I really had a good service right from on time delivery, quality of work, perfection in work completion. The relationship does not end in just in hand over but they stand strong in all tuff times for the commitment given. After 3+ years of handover they addressed the compound wall cracks which expanded and in a week condition. They still respond to any queries / faults on time and track it to closure.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Rolexo Villas in California</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=102" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Loki <span>07, Feb 2021</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>87654567</td>
                <td />
                <td>Best service provider in wedding hall field... i personally recommended this Titan Wedding Hall.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Titan Wedding Hall</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=101" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>5</td>
                <td> <span>03, Oct 2020</span></td>
                <td />
                <td />
                <td />
                <td />
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td />
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=100" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Leland K Cotter <span>26, Jul 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>bggg</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td />
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=98" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Leland K Cotter <span>13, Jul 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>I enjoyed it very much. Thanks</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Green Healthcare Hospital</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=97" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>8</td>
                <td>Segun Adegunloye <span>25, Jun 2020</span></td>
                <td>aadegunloye@mydtelecoms.com</td>
                <td>07039573803</td>
                <td />
                <td>Great service</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Lemo Taxi</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=96" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>9</td>
                <td>Leland K Cotter <span>05, Jun 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>reewfrewrffefw</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>The Spa at Mandarin Oriental</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=95" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>10</td>
                <td>Leland K Cotter <span>22, May 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>-00</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Bharat cs coaching center</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=93" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>11</td>
                <td>Leland K Cotter <span>22, May 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>ok</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Bharat cs coaching center</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=92" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>12</td>
                <td>Leland K Cotter <span>08, May 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>gggeegegegegge</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Urban Community Hospital</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=91" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>13</td>
                <td>Leland K Cotter <span>08, May 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>dfasdfadsfasdfsadfsdf</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Urban Community Hospital</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=90" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>14</td>
                <td>Leland K Cotter <span>03, May 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>gfffff</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Smith Luxury Villas</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=88" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>15</td>
                <td>Leland K Cotter <span>26, Apr 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td>Usa</td>
                <td>Nice</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>The Royal Spa Center for Women</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=85" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>16</td>
                <td>Betty D Friedman <span>25, Apr 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>One of the best showrooms in the US.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Benz cars showroom</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=84" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>17</td>
                <td>Leland K Cotter <span>15, Apr 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>Good service</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>The Spa at Mandarin Oriental</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=83" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>18</td>
                <td>Leland K Cotter <span>14, Apr 2020</span></td>
                <td>cotter@business.com</td>
                <td>9255886632</td>
                <td />
                <td>j</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Smith Luxury Villas</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=82" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>19</td>
                <td>Leland K Cotter <span>06, Apr 2020</span></td>
                <td>cotter@business.com</td>
                <td>3522</td>
                <td />
                <td>asdasd</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Lemoo Cap Services</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=81" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>20</td>
                <td>Leland K Cotter <span>24, Mar 2020</span></td>
                <td>cotter@business.com</td>
                <td>35223455453423423</td>
                <td />
                <td>test</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>coffee shop</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=80" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>21</td>
                <td>Leland K Cotter <span>07, Jan 2020</span></td>
                <td>cotter@business.com</td>
                <td>3522345545</td>
                <td />
                <td>I strongly recommend Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Taaj Five Star Hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=79" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>22</td>
                <td>Leland K Cotter <span>07, Jan 2020</span></td>
                <td>cotter@business.com</td>
                <td>3522345545</td>
                <td />
                <td>Good support, Very Good team, Excellent design and web template. They are quick to respond for support..</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Hard Rocks Hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=78" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>23</td>
                <td>Leland K Cotter <span>07, Jan 2020</span></td>
                <td>cotter@business.com</td>
                <td>3522345545</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Capital five star hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=77" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>24</td>
                <td>Leland K Cotter <span>07, Jan 2020</span></td>
                <td>cotter@business.com</td>
                <td>3522345545</td>
                <td />
                <td>Best service provider look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Appers Premium Independent Houses</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=76" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>25</td>
                <td>Leland K Cotter <span>07, Jan 2020</span></td>
                <td>cotter@business.com</td>
                <td>3522345545</td>
                <td />
                <td>I strongly recommend Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Apolloo Hospitals UAE</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=75" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>26</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Best service provider look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Green Healthcare Hospital</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=74" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>27</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Best service provider look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Apolloo Hospitals UAE</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=73" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>28</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Best service provider look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Dial Sports Shops</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=70" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>29</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>I strongly recommend Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td />
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=69" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>30</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Good support, Very Good team, Excellent design and web template. They are quick to respond for support..</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Appers Premium Independent Houses</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=68" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>31</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Good support, Very Good team, Excellent design and web template. They are quick to respond for support..</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Smart Digital Products</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=67" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>32</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Good support, Very Good team, Excellent design and web template. They are quick to respond for support..</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Tour and Travel html Template</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=66" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>33</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Good support, Very Good team, Excellent design and web template. They are quick to respond for support..</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>The Royal Spa Center for Women</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=65" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>34</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Good support, Very Good team, Excellent design and web template. They are quick to respond for support..</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>coffee shop</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=64" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>35</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Good support, Very Good team, Excellent design and web template. They are quick to respond for support..</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Capital five star hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=63" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>36</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Rachel Taj Hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=62" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>37</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>Best service provider look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Taaj Five Star Hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=61" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>38</td>
                <td>Betty D Friedman <span>07, Jan 2020</span></td>
                <td>friedman@business.com</td>
                <td>8478073384</td>
                <td />
                <td>I strongly recommend Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Hard Rocks Hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=60" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>39</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Apolloo Hospitals UAE</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=59" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>40</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Center Automobiles</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=58" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>41</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Center Automobiles</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=57" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>42</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>I strongly recommend Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Dial Sports Shops</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=54" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>43</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Good support, Very Good team, Excellent design and web template. They are quick to respond for support..</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td />
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=53" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>44</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Appers Premium Independent Houses</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=52" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>45</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Smart Digital Products</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=51" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>46</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Tour and Travel html Template</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=50" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>47</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>The Royal Spa Center for Women</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=49" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>48</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>coffee shop</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=48" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>49</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Lemoo Cap Services</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=47" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>50</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>I strongly recommend Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Hard Rocks Hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=46" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>51</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Best service provider look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Taaj Five Star Hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=45" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>52</td>
                <td>Rachel <span>07, Jan 2020</span></td>
                <td>rachel@business.com</td>
                <td>9282922971</td>
                <td />
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Capital five star hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=44" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>53</td>
                <td>Directory Finder <span>07, Jan 2020</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>022446688</td>
                <td />
                <td>Best service provider look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Smart Digital Products</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=43" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>54</td>
                <td>Directory Finder <span>07, Jan 2020</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>022446688</td>
                <td />
                <td>Good support, Very Good team, Excellent design and web template. They are quick to respond for support..</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Tour and Travel html Template</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=42" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>55</td>
                <td>Directory Finder <span>07, Jan 2020</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>022446688</td>
                <td>Tokyo</td>
                <td>Good support, Very Good team, Excellent design and web template. They are quick to respond for support..</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Rachel Taj Hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=41" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>56</td>
                <td>Directory Finder <span>07, Jan 2020</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>022446688</td>
                <td>New york</td>
                <td>Really good job and friendly services will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Taaj Five Star Hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=40" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>57</td>
                <td>Directory Finder <span>07, Jan 2020</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>022446688</td>
                <td>Illunois</td>
                <td>Best service provider look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Hard Rocks Hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=39" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>58</td>
                <td>Directory Finder <span>07, Jan 2020</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>022446688</td>
                <td>Illunois</td>
                <td>I strongly recommend Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Capital five star hotels</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=38" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>59</td>
                <td>Directory Finder <span>15, Dec 2019</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>022446688</td>
                <td />
                <td>I found one of the best template designers every. i strongly recommended this brand and well-skilled developers.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Smart Digital Products</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=37" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>60</td>
                <td>Directory Finder <span>15, Dec 2019</span></td>
                <td>thedirectoryfinder@gmail.com</td>
                <td>022446688</td>
                <td>Sydney</td>
                <td>I found one of the best template designers every. i strongly recommended this brand and well-skilled developers.</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>Smart Digital Products</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=36" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>61</td>
                <td>Rn53 Themes <span>15, Dec 2019</span></td>
                <td>rn53themes@gmail.com</td>
                <td>5522114422</td>
                <td>Sydney</td>
                <td>Perfect facial.. i strongly recommended Writing great reviews may help others discover the places that are just apt for them. Here are a few tips to write a good review:</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>The Royal Spa Center for Women</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=35" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>62</td>
                <td>Viki <span>08, Dec 2019</span></td>
                <td>a@gmail.com</td>
                <td>9876543210</td>
                <td>Sydney</td>
                <td>discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>The Royal Spa Center for Women</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=34" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>63</td>
                <td>Viki <span>08, Dec 2019</span></td>
                <td>a@gmail.com</td>
                <td>9876543210</td>
                <td>Chennai</td>
                <td>discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td>The Royal Spa Center for Women</td>
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=33" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>64</td>
                <td>Rajesh <span>30, Nov 2019</span></td>
                <td>v@gmail.com</td>
                <td>7894512630</td>
                <td>china</td>
                <td>nothing means</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td />
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=32" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>65</td>
                <td>Rajesh <span>30, Nov 2019</span></td>
                <td>v@gmail.com</td>
                <td>7894512630</td>
                <td>kolkata</td>
                <td>sdf sdf s sdf sf</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td />
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=31" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>66</td>
                <td>Rajesh <span>30, Nov 2019</span></td>
                <td>v@gmail.com</td>
                <td>7894512630</td>
                <td />
                <td>xcvxvc</td>
                <td>
                  <label className="rat">
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td />
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=22" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
              <tr>
                <td>67</td>
                <td>Nom <span>05, Jun 2018</span></td>
                <td>ryu1610@hotmail.com</td>
                <td>1234567890</td>
                <td>ville</td>
                <td>Message listing</td>
                <td>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star</i>*/}
                    {/*                                            <i class="material-icons">star_half</i>*/}
                  </label>
                </td>
                <td />
                <td>www.rn53themes.net/listings/fresh-fruits.html</td>
                <td><a href="../review_trash.html?reviewreviewreviewreviewreviewreview=20" className="db-list-edit">Delete</a></td>
                <td><span className="enq-sav" data-toggle="tooltip" title="Click to save this review"><i className="material-icons">favorite</i></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="ad-pgnat">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default page
