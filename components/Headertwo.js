'use strict';
'use client';
import React from 'react';
import Script from 'next/script';
import { useScrollPosition } from '../hooks';
import Link from 'next/link';
import { useState } from 'react';
import $ from "jquery";
const Header = () => {
  const [ isMenuVisible, setMenuVisibility ] = useState(false);
  const [ isMobMenuVisible, setMobMenuVisibility ] = useState(false);
  const [isDashboardVisible, setDashboardVisiblity] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <>
    
    <div className="hom-top dmact">
  <div className="container">
    <div className="row">
      <div className="hom-nav  db-open ">
        {/*MOBILE MENU*/}
        {/*<div className="menu">
                          <i className="material-icons mopen">menu</i>
                      </div>*/}
        <Link href="/" className="top-log">
          <img src="https://ik.imagekit.io/rrw4vjgxohv/bizbook/logo-b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672921621987" alt="" className="ic-logo" />
        </Link>
        <div className="menu" onClick={() => setMenuVisibility(! isMenuVisible)}>
          <h4>All Category</h4>
        </div>
        <div className={`${isMenuVisible ? 'pop-menu ani': 'pop-menu' }`}>
          <div className="container">
            <div className="row">
              {" "}
              <i className="material-icons clopme" onClick={() => setMenuVisibility(! isMenuVisible)}>close</i>
              <div className="pmenu-spri">
                <ul>
                  <li>
                    <Link href="/all-category" className="act">
                      <img src="/icon/shop.png" />
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <img src="/icon/calendar.png" />
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-products">
                      <img src="/icon/cart.png" />
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/coupons">
                      <img src="/icon/coupons.png" />
                      Coupon &amp; deals
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-posts">
                      <img src="/icon/blog1.png" />
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/community">
                      <img src="/icon/11.png" />
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pmenu-cat">
                <h4>All Categories</h4>
                <input type="text" id="pg-sear" placeholder="Search category" />
                <ul id="pg-resu">
                  <li>
                    <Link href="/all-listing">
                      Wedding halls - <span>03</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Hotel &amp; Food - <span>01</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Pet shop - <span>12</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Digital Products - <span>31</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Spa and Facial - <span>10</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Real Estate - <span>23</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Sports - <span>05</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Education - <span>02</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Electricals - <span>05</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Automobiles - <span>06</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Transportation - <span>02</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Hospitals - <span>08</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/all-listing">
                      Hotels And Resorts - <span>09</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dir-home-nav-bot">
                <ul>
                  <li>
                    A few reasons you’ll love Online Business Directory{" "}
                    <span>Call us on: +919350751751</span>
                  </li>
                  <li>
                    <Link
                      href="/post-your-ads"
                      className="waves-effect waves-light btn-large"
                    >
                      <i className="material-icons">font_download</i> Advertise
                      with us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing-details"
                      className="waves-effect waves-light btn-large"
                    >
                      {" "}
                      <i className="material-icons">store</i> Add your business
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*END MOBILE MENU*/}
        <div className="top-ser">
          <form name="filter_form" id="filter_form" className="filter_form">
            <ul>
              <li className="sr-sea">
                {/*                                            <input type="text"  id="*/}
                {/*" className="autocomplete"*/}
                {/*                                                   placeholder="*/}
                {/*">*/}
                <input
                  type="text"
                  autoComplete="off"
                  id="top-select-search"
                  placeholder="Search for services and business..."
                />
                <ul id="tser-res1" className="tser-res tser-res2">
                  <li>
                    <div>
                      <h4>The Royal Spa Center For Womens</h4>
                      <span>
                        No:2, 4th Avenue, Newyork, USA, Near to Airport
                      </span>
                      <Link href="/all-listing" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Real estate</h4>
                      <span>Chennai, India</span>
                      <Link href="/all-listing" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Education</h4>
                      <span>
                        Schools, university, colleges, online classes, tution
                        centers, distance education..
                      </span>
                      <Link href="/all-listing" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Hotel and resort booking</h4>
                      <span>
                        hotel booking online, hotel reservation, holiday room
                        booking
                      </span>
                      <Link href="/all-listing" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Import and export</h4>
                      <span>
                        Import and export to other countrys with low cost
                      </span>
                      <Link href="/all-listing" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Properties in Illunois</h4>
                      <span>Villas, Plots, House rent and buy</span>
                      <Link href="/all-listing" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Schools in Adyar</h4>
                      <span>schools, adyar, education, </span>
                      <Link href="/all-listing" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Laptop services near you</h4>
                      <span>laptop services, computer services</span>
                      <Link href="/all-listing" />
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4>Hospital and medical services near you</h4>
                      <span>Hospital and medical services near you</span>
                      <Link href="/all-listing" />
                    </div>
                  </li>
                </ul>
              </li>
              <li className="sbtn">
                <button
                  type="button"
                  className="btn btn-success"
                  id="top_filter_submit"
                >
                  <i className="material-icons">&nbsp;</i>
                </button>
              </li>
            </ul>
          </form>
        </div>
        <div className="al duration-500" onMouseEnter={() => setDashboardVisiblity(true)}  onMouseLeave={() => setDashboardVisiblity(false)} >
          <div className="head-pro">
            <img src="https://ik.imagekit.io/rrw4vjgxohv/bizbook/62736rn53themes.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672921816064" alt="" />
            <b>Profile by</b>
            <br />
            <h4>Digital koncept</h4>
            <Link href="/dashboard" className="fclick" />
          </div>
          <div className='db-menu duration-500' style={{display:`${isDashboardVisible ? 'block': 'none'}`, transition:'0.3s'}} >
            <ul>
              <li>
                <Link href="/dashboard" className="db-lact">
                  <img src="/icon/dbl1.png" alt="" />
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link href="/db-all-listing">
                  <img src="/icon/dbl7.png" alt="" />
                  All Listings
                </Link>
              </li>
              <li>
                <Link href="/account/add-listing-start" className="tz-lma">
                  <img src="/icon/dbl3.png" alt="" />
                  Add New Listing
                </Link>
              </li>
              <li>
                <Link href="/db-enquiry">
                  <img src="/icon/dbl14.png" alt="" />
                  Lead enquiry
                </Link>
              </li>
              <li>
                <Link href="/db-events">
                  <img src="/icon/dbl4.png" alt="" />
                  Events
                </Link>
              </li>
              <li>
                <Link href="/db-blog-posts">
                  <img src="/icon/dbl10.png" alt="" />
                  Blog posts
                </Link>
              </li>
              <li>
                <Link href="/db-review">
                  <img src="/icon/dbl13.png" alt="" />
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/db-my-profile">
                  <img src="/icon/dbl6.png" alt="" />
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <img src="/icon/dbl12.png" alt="" />
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*MOBILE MENU*/}
        <div className="mob-menu ">
          <div className="mob-me-ic">
            <i className="material-icons" onClick={() => setMobMenuVisibility(! isMenuVisible)}>menu</i>
          </div>
          <div className={`${isMobMenuVisible ? 'mob-me-all mobmenu-show' :'mob-me-all' }`}>
            <div className="mob-me-clo" >
              <i className="material-icons" onClick={() => setMobMenuVisibility(! isMobMenuVisible)}>close</i>
            </div>
            <div className="mv-pro ud-lhs-s1">
              <img src="/user/62736rn53themes.png" alt="" />
              <h4>Digital koncept</h4>
              <b>Join on 26, Mar 2021</b>
            </div>
            <div className="mv-pro-menu ud-lhs-s2">
              <ul>
                <li>
                  <Link href="/dashboard" className="">
                    <img src="/icon/dbl1.png" alt="" />
                    My Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/db-all-listing" className="">
                    <img src="/icon/shop.png" alt="" />
                    All Listings
                  </Link>
                </li>
                <li>
                  <Link href="/account/add-listing-start">
                    <img src="/icon/dbl3.png" alt="" />
                    Add New Listing
                  </Link>
                </li>
                <li>
                  <Link href="/db-enquiry" className="">
                    <img src="/icon/tick.png" alt="" />
                    Lead enquiry
                  </Link>
                </li>
                <li>
                  <Link href="/db-products" className="">
                    <img src="/icon/cart.png" alt="" />
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/db-events" className="">
                    <img src="/icon/calendar.png" alt="" />
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/db-blog-posts" className="">
                    <img src="/icon/blog1.png" alt="" />
                    Blog posts
                  </Link>
                </li>
                <li>
                  <Link href="/db-coupons" className="">
                    <img src="/icon/coupons.png" alt="" />
                    Coupons
                  </Link>
                </li>
                <li>
                  <Link href="/db-promote" className="">
                    <img src="/icon/promotion.png" alt="" />
                    Promotions
                  </Link>
                </li>
                <li>
                  <Link href="/db-seo" className="">
                    <img src="/icon/seo.png" alt="" />
                    SEO
                  </Link>
                </li>
                <li>
                  <Link href="/db-review" className="">
                    <img src="/icon/dbl13.png" alt="" />
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/db-message" className="">
                    <img src="/icon/dbl14.png" alt="" />
                    Messages
                  </Link>
                </li>
                <li>
                  <Link href="/db-my-profile" className="">
                    <img src="/icon/dbl6.png" alt="" />
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link href="/db-like-listings" className="">
                    <img src="/icon/dbl15.png" alt="" />
                    Liked Listings
                  </Link>
                </li>
                <li>
                  <Link href="/db-followings" className="">
                    <img src="/icon/dbl18.png" alt="" />
                    Followings
                  </Link>
                </li>
                <li>
                  <Link href="/db-post-ads" className="">
                    <img src="/icon/dbl11.png" alt="" />
                    Ad Summary
                  </Link>
                </li>
                <li>
                  <Link href="/db-payment" className="">
                    <img src="/icon/dbl9.png" alt="" />
                    Payment &amp; plan
                  </Link>
                </li>
                <li>
                  <Link href="/db-invoice-all" className="">
                    <img src="/icon/dbl16.png" alt="" />
                    Payment invoice
                  </Link>
                </li>
                <li>
                  <Link href="/db-notifications" className="">
                    <img src="/icon/dbl19.png" alt="" />
                    Notifications
                  </Link>
                </li>
                <li>
                  <Link href="/how-to" className="" target="_blank">
                    <img src="/icon/dbl17.png" alt="" />
                    How to&apos;s
                  </Link>
                </li>
                <li>
                  <Link href="/db-setting" className="">
                    <img src="/icon/dbl210.png" alt="" />
                    Setting
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <img src="/icon/dbl12.png" alt="" />
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mv-cate">
              <h4>All Categories</h4>
              <ul>
                <li>
                  {" "}
                  <Link href="/all-listing">Wedding halls</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Hotel &amp; Food</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Pet shop</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Digital Products</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Spa and Facial</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Real Estate</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Sports</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Education</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Electricals</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Automobiles</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Transportation</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Hospitals</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/all-listing">Hotels And Resorts</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*END MOBILE MENU*/}
      </div>
    </div>
  </div>
    </div>
    <style jsx>
  {`
  .hom-top {
    transition: all 0.5s ease;
    background: none;
    box-shadow: none;
}

.top-ser {
    display: none;
}

.dmact .top-ser {
    display: block;
}

.caro-home {
    margin-top: 90px;
    float: left;
    width: 100%;
}

.carousel-item:before {
    background: none;
}
  `}
</style>
    </>
  )
}

export default Header
