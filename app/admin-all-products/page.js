import React from 'react'

const page = () => {
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All Products</span>
        <div className="ud-cen-s2">
          <h2>Product details</h2>
          <a href="admin-add-new-product.html" className="db-tit-btn">Add new product</a>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                {/*                            <th>product Date</th>*/}
                <th>Created by</th>
                <th>Views</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img src="../images/products/3466audi_png1737.png" />Audi q3 <span>26, Mar 2021</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">9</span></td>
                <td><a href="admin-edit-product.html?code=PROD036" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD036" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD036" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td><img src="../images/products/20234fp-263d-royal-protton-alpha-steel_interior.png" />WHIRLPOOL FRIDGE <span>12, Mar 2021</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">12</span></td>
                <td><a href="admin-edit-product.html?code=PROD034" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD034" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD034" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td><img src="../images/products/6743281s+9npa5ol._ac_ul320_.jpg" />DELL <span>12, Mar 2021</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">9</span></td>
                <td><a href="admin-edit-product.html?code=PROD033" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD033" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD033" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>4</td>
                <td><img src="../images/products/6009download.jfif" />samsung m31 <span>12, Mar 2021</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">11</span></td>
                <td><a href="admin-edit-product.html?code=PROD032" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD032" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD032" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>5</td>
                <td><img src="../images/products/48373ac-hot-n-cold-final.png" />LG AC <span>11, Mar 2021</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-product.html?code=PROD031" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD031" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD031" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>6</td>
                <td><img src="../images/products/763861bdef4927c04d3674fa22e88df97ca754db8f83e.jpeg" />lenova yoga 510 <span>21, Feb 2021</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">9</span></td>
                <td><a href="admin-edit-product.html?code=PROD030" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD030" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD030" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>7</td>
                <td><img src="../images/products/64319100-cash.png" />mango cacke <span>02, Sep 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-product.html?code=PROD029" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD029" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD029" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>8</td>
                <td><img src="../images/products/2561img_20200705_151308_resized_20200705_081710009.jpg" />fdsfsd <span>09, Jul 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">8</span></td>
                <td><a href="admin-edit-product.html?code=PROD025" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD025" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD025" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>9</td>
                <td><img src="../images/products/56156mecanics---copie.jpg" />LÃ©gume <span>13, Jun 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/clic" className="db-list-ststus" target="_blank">clic</a></td>
                <td><span className="db-list-rat">9</span></td>
                <td><a href="admin-edit-product.html?code=PROD024" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD024" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD024" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>10</td>
                <td><img src="../images/products/88947usb-159770_1280.png" />pendrive <span>29, May 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">10</span></td>
                <td><a href="admin-edit-product.html?code=PROD023" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD023" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD023" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>11</td>
                <td><img src="../images/products/7351pig-2103502.jpg" />zapatos <span>28, May 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-product.html?code=PROD022" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD022" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD022" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>12</td>
                <td><img src="../images/products/73462payment-4334491_1920.jpg" />Laptop XS <span>07, May 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">10</span></td>
                <td><a href="admin-edit-product.html?code=PROD020" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD020" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD020" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>13</td>
                <td><img src="../images/products/74749bizpro.jpeg" />Engineered Shelving Unit <span>27, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-product.html?code=PROD018" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD018" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD018" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>14</td>
                <td><img src="../images/products/17557top-10-ecommerce-websites.png" />ND <span>12, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-product.html?code=PROD015" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD015" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD015" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>15</td>
                <td><img src="../images/products/9742271vrkhjj9hl._ul1500_.jpg" />Fastrack Reflex 2.0 - Smart Watches <span>11, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-edit-product.html?code=PROD014" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD014" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD014" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>16</td>
                <td><img src="../images/products/14624htb1pzoyrvxxxxbfxpxxq6xxfxxxy.jpg" />Professional DSLR Battery Grip Holder Kit <span>11, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/leland-k-cotter" className="db-list-ststus" target="_blank">Leland K Cotter</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-product.html?code=PROD013" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD013" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD013" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>17</td>
                <td><img src="../images/products/101211-ps4-slim-sony-yes-dualshock-4-original-imafmakaeu7xvz6a.jpeg" />8 x 4 Metal Trailer - Exc Tyres <span>11, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/rn53-themes" className="db-list-ststus" target="_blank">Rn53 Themes</a></td>
                <td><span className="db-list-rat">1</span></td>
                <td><a href="admin-edit-product.html?code=PROD012" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD012" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD012" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>18</td>
                <td><img src="../images/products/438131.jpg" />Tour and Travel Booking html Template <span>10, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/" className="db-list-ststus" target="_blank" /></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-product.html?code=PROD010" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD010" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD010" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>19</td>
                <td><img src="../images/products/40766intro_cream_of_crop.jpg" />Yake vegitables shops - online orders <span>10, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                <td><span className="db-list-rat">0</span></td>
                <td><a href="admin-edit-product.html?code=PROD009" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD009" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD009" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>20</td>
                <td><img src="../images/products/33804awesomebooks-new3.jpg" />Weight loss digital products <span>10, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                <td><span className="db-list-rat">11</span></td>
                <td><a href="admin-edit-product.html?code=PROD008" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD008" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD008" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>21</td>
                <td><img src="../images/products/64966rock-crawler-rechargeable-rc-4wd-rally-car-1-18-scale-2-4ghzrock-original-imaffh8kywgprmbh.jpeg" />Rock Crawler RC Monster Truck <span>10, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                <td><span className="db-list-rat">6</span></td>
                <td><a href="admin-edit-product.html?code=PROD007" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD007" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD007" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>22</td>
                <td><img src="../images/products/73768bq3204-002-7-nike-black-white-anthracite-original-imafh2hv38ygyyfy.jpeg" />REVOLUTION 5 Running Shoe For Men  (Red) <span>10, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/directory-finder" className="db-list-ststus" target="_blank">Directory Finder</a></td>
                <td><span className="db-list-rat">1</span></td>
                <td><a href="admin-edit-product.html?code=PROD006" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD006" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD006" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>23</td>
                <td><img src="../images/products/5382d5600-nikon-d5600-original-imaezvbrhkgzyywz.jpeg" />Nikon D5600 DSLR Camera Body <span>08, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-product.html?code=PROD005" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD005" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD005" className="db-list-edit" target="_blank">Preview</a></td>
              </tr>
              <tr>
                <td>24</td>
                <td><img src="../images/products/40471bridge-in-the-forest-5969.jpg" />VU Pixelight Ultra UHD TV <span>08, Apr 2020</span></td>
                {/*                                <td>*/}{/*</td>*/}
                <td><a href="http://localhost/directory/bizbook/profile/claude-d-dial" className="db-list-ststus" target="_blank">Claude D Dial</a></td>
                <td><span className="db-list-rat">7</span></td>
                <td><a href="admin-edit-product.html?code=PROD004" className="db-list-edit">Edit</a></td>
                <td><a href="admin-delete-product.html?code=PROD004" className="db-list-edit">Delete</a></td>
                <td><a href="../product-details.html?code=PROD004" className="db-list-edit" target="_blank">Preview</a></td>
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
