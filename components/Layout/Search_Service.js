import React from 'react'

import { Poppins } from 'next/font/google'
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight:'600'
  })
const Search_Service = () => {

  return (
    <div className="ban-search ban-sear-all">
    <form name="filter_form" id="filter_form" className="filter_form">
        <ul>
            <li className="sr-cate">
                <select cl onchange="getSearchCategories(this.value);" name="explor_select" id="explor_select"
                    className={`chosen-select chosen-container chosen-container-single ${poppins.className}`} >
                    <option value className='chosen-single'>Select Services</option>
                    <option value={1}>All Services</option>
                    <option value={2}>Service Experts</option>
                    <option value={3}>Jobs</option>
                    <option value={4}>Explore Travel</option>
                    <option value={5}>News &amp; Magazines</option>
                    <option value={6}>Events</option>
                    <option value={7}>Products</option>
                    <option value={8}>Coupon &amp; deals</option>
                    <option value={9}>Blogs</option>
                </select>
            </li>
            <li className="sr-cit">
                <select id="city_check" name="city_check" className={`chosen-select chosen-container chosen-container-single ${poppins.className}`} >
                    <option value className='chosen-single'>Select City</option>
                    <option value="new-york">New York</option>
                    <option value="illunois-city">Illunois city</option>
                    <option value="seattle">Seattle</option>
                    <option value="atlanta">Atlanta</option>
                    <option value="chennai">Chennai</option>
                    <option value="chennai-2">Chennai 2</option>
                </select>
            </li>
            <li className="sr-nor">
                <select className={`chosen-select chosen-container chosen-container-single ${poppins.className}`} id="expert-select-search" name="expert-select-search "
                    >
                    <option value className='chosen-single'> What are you looking for?</option>
                    <option value="Automobiles">Automobiles</option>
                    <option value="Technology">Technology</option>
                    <option value="Electricals">Electricals</option>
                    <option value="Education">Education</option>
                    <option value="Sports">Sports</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Wedding halls">Wedding halls</option>
                    <option value="Hospitals">Hospitals</option>
                    <option value="Pet shop">Pet shop</option>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Spa and Facial">Spa and Facial</option>
                    <option value="Transportation">Transportation</option>
                </select>
            </li>
            
            <li className="sr-btn">
                <input type="submit" id="filter_submit" name="filter_submit" defaultValue="Search"
                    className="filter_submit" />
            </li>
        </ul>
    </form>
</div>
  )
}

export default Search_Service
