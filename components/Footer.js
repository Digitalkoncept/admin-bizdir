
import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
       <section className=" wed-hom-footer">
    <div className="container">
      <div className="row foot-supp">
        <h2>
          <span>Free support:</span> +919350751751 &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
          <span>Email:</span> connect@bizdir.in
        </h2>
      </div>
      <div className="row wed-foot-link">
        <div className="col-md-4 foot-tc-mar-t-o">
          <h4>Top Category</h4>
          <ul>
            <li>
              <Link href="/all-listing">Digital Products</Link>
            </li>
            <li>
              <Link href="/all-listing">Spa and Facial</Link>
            </li>
            <li>
              <Link href="/all-listing">Real Estate</Link>
            </li>
            <li>
              <Link href="/all-listing">Sports</Link>
            </li>
            <li>
              <Link href="/all-listing">Education</Link>
            </li>
            <li>
              <Link href="/all-listing">Electricals</Link>
            </li>
            <li>
              <Link href="/all-listing">Automobiles</Link>
            </li>
            <li>
              <Link href="/all-listing">Transportation</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Trending Category</h4>
          <ul>
            <li>
              <Link href="/all-listing">Hospitals</Link>
            </li>
            <li>
              <Link href="/all-listing">Hotels And Resorts</Link>
            </li>
            <li>
              <Link href="/all-listing">Automobiles</Link>
            </li>
            <li>
              <Link href="/all-listing">Hotels And Resorts</Link>
            </li>
            <li>
              <Link href="/all-listing">Real Estate</Link>
            </li>
            <li>
              <Link href="/all-listing">Sports</Link>
            </li>
            <li>
              <Link href="/all-listing">Education</Link>
            </li>
            <li>
              <Link href="/all-listing">Electricals</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>HELP &amp; SUPPORT</h4>
          <ul>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/feedback">Feedback</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact us</Link>
            </li>
            {/*                    <li><Link href="/#">*/}
            {/*</Link>*/}
            {/*                    </li>*/}
          </ul>
        </div>
      </div>
      {/* POPULAR TAGS */}
      <div className="row wed-foot-link-pop">
        <div className="col-md-12">
          <h4>Popular Tags</h4>
          <ul>
            <li>
              <Link href="/all-listing">Wedding halls in London</Link>
            </li>
            <li>
              <Link href="/all-listing">Schools in Chennai</Link>
            </li>
            <li>
              <Link href="/dashboard">Schools in NewYork</Link>
            </li>
            <li>
              <Link href="/dashboard">Real estate in Illunois</Link>
            </li>
            <li>
              <Link href="/dashboard">Real estate in Chennai1</Link>
            </li>
            <li>
              <Link href="/dashboard">Enents in Tailand</Link>
            </li>
            <li>
              <Link href="/dashboard">Flat for rent in Melborn</Link>
            </li>
            <li>
              <Link href="/dashboard">Schools in NewYork</Link>
            </li>
            <li>
              <Link href="/dashboard">Real estate in Illunois</Link>
            </li>
            <li>
              <Link href="/dashboard">Real estate in Chennai1</Link>
            </li>
            <li>
              <Link href="/dashboard">Enents in Tailand</Link>
            </li>
            <li>
              <Link href="/dashboard">Flat for rent in Melborn</Link>
            </li>
            <li>
              <Link href="/dashboard">Schools in NewYork</Link>
            </li>
            <li>
              <Link href="/dashboard">Real estate in Illunois</Link>
            </li>
            <li>
              <Link href="/dashboard">Real estate in Chennai1</Link>
            </li>
            <li>
              <Link href="/dashboard">Enents in Tailand</Link>
            </li>
            <li>
              <Link href="/dashboard">Flat for rent in Melborn</Link>
            </li>
            <li>
              <Link href="/dashboard">Schools in NewYork</Link>
            </li>
            <li>
              <Link href="/dashboard">Real estate in Illunois</Link>
            </li>
            <li>
              <Link href="/dashboard">Real estate in Chennai1</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* POPULAR TAGS */}
      <div className="row wed-foot-link-1">
        <div className="col-md-4">
          <h4>Get In Touch</h4>
          <p>
            Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
          </p>
          <p>
            Phone: <Link href="/tel:+919350751751">+919350751751</Link>
          </p>
          <p>
            Email:{" "}
            <Link href="/mailto:connect@bizdir.in">connect@bizdir.in</Link>
          </p>
        </div>
        <div className="col-md-4 fot-app">
          <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
          <ul>
            <li>
              <Link href="/">
                <img src="/gstore.png" alt="" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <img src="/astore.png" alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4 fot-soc">
          <h4>SOCIAL MEDIA</h4>
          <ul>
            <li>
              <Link target="_blank" href="/">
                <img src="/social/1.png" alt="" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="/https://twitter.com/Google?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              >
                <img src="/social/2.png" alt="" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="/https://www.facebook.com/Rn53themes-1956793534579530/"
              >
                <img src="/social/3.png" alt="" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/">
                <img src="/social/4.png" alt="" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/">
                <img src="/social/5.png" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row foot-count">
        <ul>
          <li>
            <Link target="_blank" href="/http://www.domainname.au">
              Australia
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/http://www.domainname.uk">
              UK
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/http://www.domainname.usa">
              USA
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/http://www.domainname.in">
              India
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/http://www.domainname.ge">
              Germany
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/http://www.domainname.ch">
              China
            </Link>
          </li>
          <li>
            <Link target="_blank" href="/http://www.domainname.fr">
              france
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section>
    <div className="cr">
      <div className="container">
        <div className="row">
          <p>
            Copyright © 2017-2021{" "}
            <Link href="/https://bizdir.in/" target="_blank">
              Digital koncept
            </Link>
            . Proudly powered by{" "}
            <Link href="/https://bizdir.in/" target="_blank">
              bizdir.in
            </Link>
          </p>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Footer
