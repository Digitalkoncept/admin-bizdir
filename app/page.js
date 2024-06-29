'use client'
import React,{useState,useEffect} from 'react'
import Counter from '@/components/Counter'
import Link from 'next/link'
import { client } from '@/lib/apollo'
import { GET_ALL_COUNT } from '@/lib/query'
import { useSession } from 'next-auth/react'
const page = () => {
  const { data: session, status } = useSession();
 const [allcount,setAllCount] = useState();
 const [loading,setLoading] = useState();
  
 const getAllCount = async () => {
  try {
    const { data, errors } = await client.query({
      query: GET_ALL_COUNT,
      fetchPolicy:"no-cache"
    });

    if (errors || data.getAllCounts.code !== 200) {
      throw new Error("Something went wrong");
    }

    setAllCount(data.getAllCounts.counts);
    setLoading(false);
  } catch (error) {
    console.error("something went wrong:", error);
  }
};

useEffect(() => {
   getAllCount();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
console.log(allcount)
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash adda-oly leftpadd">
      {/* User Welcome Div starts */}
      <div className="ad-dash-s1">
        <div className="cd-cen-intr-inn">
          <h2>
            Hi Welcome <b>{session?.user?.name}</b>
          </h2>
          <p>
            Stay up to date reports in your listing, products, events and blog
            reports here
          </p>
        </div>
      </div>
      {/*            User Welcome Div ends */}
      <div className="ad-dash-s2">
        <ul>
          <li>
            <div>
              <img src="/icon/ic-1.png" className='inline-block' alt="" />
              <Counter end={allcount?.userCount} duration={3} tag="h2" />
              <h4>All Users</h4>
              <Link href="/all-users" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img src="/icon/shop.png" className='inline-block' alt="" />
              <Counter end={allcount?.listingCount} duration={3} tag="h2" />
              <h4>All Listing</h4>
              <Link href="/admin-all-listings" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img src="/icon/calendar.png" className='inline-block' alt="" />
              <Counter end={allcount?.eventCount} duration={3} tag="h2" />
              <h4>All Events</h4>
              <a href="admin-event.html" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img src="/icon/cart.png" className='inline-block' alt="" />
              <Counter end={allcount?.productCount} duration={3} tag="h2" />
              <h4>All Products</h4>
              <a href="admin-all-products.html" className="fclick" />
            </div>
          </li>
        </ul>
      </div>
      <div className="ad-dash-s4">
        <ul>
          <li>
            <div className="cor-1">
              <h4>All Claims Request</h4>
              <h2>Claim Request</h2>
              <Counter end={allcount?.claimCount} duration={3} tag="span" />
             
              <Link href="/new-claim-request" className="fclick" />
            </div>
          </li>
          <li>
            <div className="cor-2">
              <h4>Leads &amp; Enquiry</h4>
              <h2>Get Quote</h2>
              <span>133</span>
             
              <a href="admin-all-enquiry.html" className="fclick" />
            </div>
          </li>
          <li>
            <div className="cor-3">
              <h4>Enquiry</h4>
              <h2>Ad Request</h2>
              <span>33</span>
              
              <a href="admin-ads-request.html" className="fclick" />
            </div>
          </li>
        </ul>
      </div>
      <div className="ad-dash-s3">
        <ul>
          <li>
            <div className="ad-cou">
              <div>
                <span>Premium Plus Users</span>
                <h4>23</h4>
              </div>
              <div>
                <img src="/icon/ic-9.png" alt="" />
              </div>
              <a href="admin-premium-plus-users.html" className="fclick" />
            </div>
          </li>
          <li>
            <div className="ad-cou">
              <div>
                {" "}
                <span>Premium Users</span>
                <h4>04</h4>
              </div>
              <div>
                <img src="/icon/ic-8.png" alt="" />
              </div>
              <a href="admin-premium-users.html" className="fclick" />
            </div>
          </li>
          <li>
            <div className="ad-cou">
              <div>
                {" "}
                <span>Standard Users</span>
                <h4>16</h4>
              </div>
              <div>
                <img src="/icon/ic-10.png" alt="" />
              </div>
              <a href="admin-standard-users.html" className="fclick" />
            </div>
          </li>
          <li>
            <div className="ad-cou">
              <div>
                {" "}
                <span>Free Users</span>
                <h4>69</h4>
              </div>
              <div>
                <img src="/icon/ic-11.png" alt="" />
              </div>
              <a href="admin-free-users.html" className="fclick" />
            </div>
          </li>
        </ul>
      </div>
      <div className="ad-dash-s3 ad-dash-s5">
        <ul>
          <li>
            <div className="ad-cou">
              <div>
                <img src="/icon/ic-14.png" alt="" />
              </div>
              <div>
                {" "}
                <span>Category</span>
                <h4>13</h4>
              </div>
              <a href="admin-all-category.html" className="fclick" />
            </div>
          </li>
          <li>
            <div className="ad-cou">
              <div>
                <img src="/icon/ic-12.png" alt="" />
              </div>
              <div>
                {" "}
                <span>Sub Category</span>
                <h4>45</h4>
              </div>
              <a href="admin-all-category.html" className="fclick" />
            </div>
          </li>
          <li>
            <div className="ad-cou">
              <div>
                <img src="/icon/ic-13.png" alt="" />
              </div>
              <div>
                {" "}
                <span>Cities</span>
                <h4>48358</h4>
              </div>
              <a href="admin-all-city.html" className="fclick" />
            </div>
          </li>
          <li>
            <div className="ad-cou">
              <div>
                <img src="/icon/ic-15.png" alt="" />
              </div>
              <div>
                {" "}
                <span>Notifications Send</span>
                <h4>12</h4>
              </div>
              <a href="admin-notification-all.html" className="fclick" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </section>
 
  )
}

export default page
