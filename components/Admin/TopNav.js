import React from "react";
import { useSession } from "next-auth/react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
const TopNav = ({ toggleCart, showadMenu }) => {
  const { data: session, status } = useSession();
  return (
    <section>
      <div className="topnav block">
        <div className="head-s1">
          <div className="menu">
            {" "}
            {showadMenu ? (
              <i onClick={toggleCart} className="material-icons ">
                close
              </i>
            ) : (
              <i onClick={toggleCart} className="material-icons ">
                menu
              </i>
            )}
          </div>
          <div className="logo">
            <img src="/Logo-W-200x45.webp" alt="" />
          </div>
        </div>
        <div className="head-s2">
          <div className="head-sear">
            <input
              type="text"
              id="top_search"
              placeholder="Search the listing and users..."
              className="search-field"
            />
            <ul id="tser-res" className="tser-res">
              <li>
                <a href="activate.html">Activate template</a>
              </li>
              <li>
                <a href="updates.html">Bizbook template updates and release</a>
              </li>
              <li>
                <a href="addons.html">Premium Addons</a>
              </li>
              <li>
                <a href="admin-add-new-user.html">Add new user</a>
              </li>
              <li>
                <a href="admin-add-new-listings.html">Add new listing</a>
              </li>
              <li>
                <a href="admin-add-new-product.html">Add new product</a>
              </li>
              <li>
                <a href="admin-add-new-event.html">Add new events</a>
              </li>
              <li>
                <a href="admin-slider-create.html">Add new slider</a>
              </li>
              <li>
                <a href="profile.html">Dashboard</a>
              </li>
              <li>
                <a href="profile.html">Profile page</a>
              </li>
              <li>
                <a href="admin-all-users.html">All users</a>
              </li>
              <li>
                <a href="admin-new-user-requests.html">New user requests</a>
              </li>
              <li>
                <a href="admin-new-cod-requests.html">
                  Cash on delivery(COD) requests
                </a>
              </li>
              <li>
                <a href="admin-all-users-general.html">General users</a>
              </li>
              <li>
                <a href="admin-all-users-service-provider.html">
                  Services providers
                </a>
              </li>
              <li>
                <a href="admin-free-users.html">Free users</a>
              </li>
              <li>
                <a href="admin-standard-users.html">Standard users</a>
              </li>
              <li>
                <a href="admin-premium-users.html">Premium users</a>
              </li>
              <li>
                <a href="admin-premium-plus-users.html">Premium plus users</a>
              </li>
              <li>
                <a href="admin-non-paid-users.html">Non-paid users</a>
              </li>
              <li>
                <a href="admin-paid-users.html">Paid users</a>
              </li>
              <li>
                <a href="admin-sub-admin-all.html">Sub admin</a>
              </li>
              <li>
                <a href="admin-sub-admin-create.html">Add new sub admin</a>
              </li>
              <li>
                <a href="admin-text-changes.html">All text change</a>
              </li>
              <li>
                <a href="admin-text-changes.html">
                  How to change all static texts
                </a>
              </li>
              <li>
                <a href="admin-text-changes.html">Edit webpage texts</a>
              </li>
              <li>
                <a href="admin-price.html">Pricing plan</a>
              </li>
              <li>
                <a href="admin-all-listings.html">All listings</a>
              </li>
              <li>
                <a href="admin-create-duplicate-listing.html">
                  Create duplicate listing
                </a>
              </li>
              <li>
                <a href="admin-claim-listing.html">Claim request</a>
              </li>
              <li>
                <a href="admin-claim-listing.html">
                  Listing &amp; business claim request
                </a>
              </li>
              <li>
                <a href="admin-trash-listing.html">Trash listing</a>
              </li>
              <li>
                <a href="admin-event.html">All events</a>
              </li>
              <li>
                <a href="admin-all-blogs.html">All blogs posts</a>
              </li>
              <li>
                <a href="admin-add-new-blogs.html">Add new blog post</a>
              </li>
              <li>
                <a href="admin-all-products.html">All products</a>
              </li>
              <li>
                <a href="admin-all-payments.html">All Payments</a>
              </li>
              <li>
                <a href="admin-all-category.html">All listing category</a>
              </li>
              <li>
                <a href="admin-add-new-category.html">
                  Add new listing category
                </a>
              </li>
              <li>
                <a href="admin-all-sub-category.html">Listing sub categorys</a>
              </li>
              <li>
                <a href="admin-add-new-sub-category.html">
                  Add new listing sub category
                </a>
              </li>
              <li>
                <a href="admin-all-product-category.html">
                  All product category
                </a>
              </li>
              <li>
                <a href="admin-add-new-product-category.html">
                  Add new product category
                </a>
              </li>
              <li>
                <a href="admin-all-product-sub-category.html">
                  Product sub categorys
                </a>
              </li>
              <li>
                <a href="admin-add-new-product-sub-category.html">
                  Add new product sub category
                </a>
              </li>
              <li>
                <a href="admin-all-enquiry.html">All enquiry</a>
              </li>
              <li>
                <a href="admin-saved-enquiry.html">Save enquirys</a>
              </li>
              <li>
                <a href="admin-all-reviews.html">All reviews</a>
              </li>
              <li>
                <a href="admin-saved-reviews.html">Save reviews</a>
              </li>
              <li>
                <a href="admin-all-feedbacks.html">Feedbacks</a>
              </li>
              <li>
                <a href="admin-notification-all.html">All notifications</a>
              </li>
              <li>
                <a href="admin-create-notification.html">
                  Send new notifications
                </a>
              </li>
              <li>
                <a href="admin-create-notification.html">
                  Create new notifications
                </a>
              </li>
              <li>
                <a href="admin-current-ads.html">Current ads</a>
              </li>
              <li>
                <a href="admin-create-ads.html">Create new ads</a>
              </li>
              <li>
                <a href="admin-ads-request.html">Ads request and enquiry</a>
              </li>
              <li>
                <a href="admin-ads-price.html">Ads pricing</a>
              </li>
              <li>
                <a href="admin-home-category.html">Home page edit optins</a>
              </li>
              <li>
                <a href="admin-home-category.html">Home page category edit</a>
              </li>
              <li>
                <a href="admin-trending-category.html">
                  Home page trending category edit
                </a>
              </li>
              <li>
                <a href="admin-home-popular-business.html">
                  Home page popular business edit
                </a>
              </li>
              <li>
                <a href="admin-home-top-services.html">
                  Home page top services edit
                </a>
              </li>
              <li>
                <a href="admin-home-feature-events.html">
                  Home page feature events
                </a>
              </li>
              <li>
                <a href="admin-all-city.html">All city</a>
              </li>
              <li>
                <a href="admin-add-city.html">Add new city</a>
              </li>
              <li>
                <a href="admin-filter-features.html">Listing filetrs</a>
              </li>
              <li>
                <a href="admin-filter-category.html">
                  Listing filter category edit
                </a>
              </li>
              <li>
                <a href="admin-filter-features.html">
                  Listing feature filter edit
                </a>
              </li>
              <li>
                <a href="admin-invoice-create.html">Create new invoice</a>
              </li>
              <li>
                <a href="admin-send-invoice.html">Send invoice</a>
              </li>
              <li>
                <a href="admin-send-invoice.html">Send new invoice</a>
              </li>
              <li>
                <a href="admin-invoice-shared.html">Shared invoices</a>
              </li>
              <li>
                <a href="admin-import.html">Import data</a>
              </li>
              <li>
                <a href="admin-export.html">Export data</a>
              </li>
              <li>
                <a href="admin-price-edit.html?row=1">Edit free pricing plan</a>
              </li>
              <li>
                <a href="admin-price-edit.html?row=2">
                  Edit standard pricing plan
                </a>
              </li>
              <li>
                <a href="admin-price-edit.html?row=3">
                  Edit premium pricing plan
                </a>
              </li>
              <li>
                <a href="admin-price-edit.html?row=4">
                  Edit premium plus pricing plan
                </a>
              </li>
              <li>
                <a href="admin-payment-credentials.html">Payment gateways</a>
              </li>
              <li>
                <a href="admin-payment-credentials-edit.html?row=cod">
                  Cash On Delivery Credentials
                </a>
              </li>
              <li>
                <a href="admin-payment-credentials-edit.html?row=paypal">
                  PayPal Credentials
                </a>
              </li>
              <li>
                <a href="admin-payment-credentials-edit.html?row=stripe">
                  Stripe Credentials
                </a>
              </li>
              <li>
                <a href="admin-setting.html">Admin setting</a>
              </li>
              <li>
                <a href="admin-footer.html">Footer edit</a>
              </li>
              <li>
                <a href="admin-footer.html">Footer CMS</a>
              </li>
              <li>
                <a href="admin-dummy-images.html">Dummy image for users</a>
              </li>
              <li>
                <a href="admin-all-mail.html">Email templates</a>
              </li>
              <li>
                <a href="admin-all-mail.html">Edit email messages</a>
              </li>
              <li>
                <a href="admin-slider-all.html">All slider images</a>
              </li>
              <li>
                <a href="admin-slider-all.html">Edit slider images</a>
              </li>
              <li>
                <a href="admin-slider-create.html">Create new slider</a>
              </li>
              <li>
                <a href="admin-security-updates.html">
                  Security and updates notifications
                </a>
              </li>
              <li>
                <a href="seo-listing-options.html">
                  Listing category promotions
                </a>
              </li>
              <li>
                <a href="seo-listing-options.html">
                  Listing category SEO setting
                </a>
              </li>
              <li>
                <a href="seo-target-promotion-all-pages.html">
                  Target listings promotion
                </a>
              </li>
              <li>
                <a href="seo-target-promotion-all-pages.html">
                  Target promotion
                </a>
              </li>
              <li>
                <a href="seo-target-promotion-all-pages.html">
                  Target listings promotion page
                </a>
              </li>
              <li>
                <a href="seo-target-promotion-all-pages.html">
                  Target listing SEO
                </a>
              </li>
              <li>
                <a href="seo-target-promotion-add-new-page.html">
                  Add new target listing page
                </a>
              </li>
              <li>
                <a href="seo-general-all-pages.html">
                  General promotion SEO setting pages
                </a>
              </li>
              <li>
                <a href="seo-general-add-new-page.html">
                  Add new general promotion page
                </a>
              </li>
              <li>
                <a href="seo-ebook-all-pages.html">All Ebook pages</a>
              </li>
              <li>
                <a href="seo-ebook-all-pages.html">Digital promotion pages</a>
              </li>
              <li>
                <a href="seo-ebook-add-new-page.html">Add new Ebook page</a>
              </li>
              <li>
                <a href="seo-ebook-add-new-page.html">
                  Add new Digital promotion page
                </a>
              </li>
              <li>
                <a href="seo-google-analytics-code.html">Google Analytics</a>
              </li>
              <li>
                <a href="seo-xml-sitemap.html">XML sitemap</a>
              </li>
              <li>
                <a href="search-lists.html">All search lists</a>
              </li>
              <li>
                <a href="search-lists-add.html">Add new search lists</a>
              </li>
              <li>
                <a href="search-positions.html">Search positions</a>
              </li>
              <li>
                <a href="seo-google-adsense.html">Google AdSense</a>
              </li>
              <li>
                <a href="seo-google-adsense.html">Add Google AdSense code</a>
              </li>
              <li>
                <a href="admin-footer.html">Footer text edit &amp; update</a>
              </li>
              <li>
                <a href="admin-footer-popular-tags.html">Footer popular tags</a>
              </li>
              <li>
                <a href="footer-add-popular-tags.html">Add new popular tags</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="head-s3">
          <div className="head-pro">
            {session?.user?.image && (
              <CldImage
                width="36"
                height="36"
                src={session?.user?.image || ""}
                alt="Description of my image"
              />
            )}
            <br />
            <h4>{session?.user?.name}</h4>
            <Link href="/profile" className="fclick" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
