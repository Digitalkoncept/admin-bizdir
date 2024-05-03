import React from 'react'
import Link from 'next/link'
const BottomMenu = () => {
  return (
    <div>
      <div className="fqui-menu">
  <ul>
    <li>
      <Link href="/index">
        <img src="/icon/home.png" />
        Home
      </Link>
    </li>
    <li>
      <span className="mob-sear">
        <img src="/icon/search1.png" />
        Search
      </span>
    </li>
    <li>
      <Link href="/all-category" className="act">
        <img src="/icon/shop.png" />
        Services
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
        Coupons
      </Link>
    </li>
    <li>
      <Link href="/blog-posts">
        <img src="/icon/blog1.png" />
        Bolgs
      </Link>
    </li>
    <li>
      <Link href="/community">
        <img src="/icon/11.png" />
        Community
      </Link>
    </li>
    <li>
      <span className="btn-ser-need-ani">
        <img src="/icon/how1.png" />
        Support
      </span>
    </li>
  </ul>
  </div>
    </div>
  )
}

export default BottomMenu
