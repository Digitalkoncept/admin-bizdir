'use client'
import React,{useState,useEffect} from 'react'
import { client } from '@/lib/apollo'
import { GET_ALL_COUPONS } from '@/lib/query'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
const page = () => {
const [coupons,setCoupons] = useState();
const {data:session,status} = useSession();

const getAllCoupons = async () => {
  try {
    const { data, errors } = await client.query({
      query: GET_ALL_COUPONS,
      fetchPolicy: "no-cache",
      context: {
        headers: {
          Authorization: `Bearer ${session?.jwt}`,
        },
      },
    });

    if (errors || data.getAllCoupons.code !== 200) {
      throw new Error(errors);
    }

    setCoupons(data.getAllCoupons.coupons);
    console.log(data);
  } catch (error) {
    console.error("something went wrong:", error.message);
  }
};

useEffect(() => {
  if(status === 'authenticated'){
    getAllCoupons();
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [session]);
console.log(coupons)
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Coupons and deals</span>
        <div className="ud-cen-s2">
          <h2>All Coupons details</h2>
          <Link href="/add-new-coupon" className="db-tit-btn">Add new Coupons</Link>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Coupon Name</th>
                <th>Coupon Code</th>
                <th>Created By</th>
                <th>Expiry date</th>  
                <th>Edit</th>
                <th>Delete</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              {coupons?.length > 0 && (
                coupons?.map((item,index) =>{
              return (<> <tr>
                  <td>{index +1}</td>
                  <td>{item.coupon_name}<span>{item.createdAt}</span></td>
                  <td>{item.coupon_code}</td>
                  <td>
                    <span className="db-list-ststus">
                      {item.createdBy.name || ''}
                    </span>
                  </td>
                  <td>{item.end_date}</td>
                  <td><Link href={`/all-coupons/${item._id}`} className="db-list-edit">Edit</Link></td>
                  <td><a href="admin-delete-coupons.html?row=1" className="db-list-edit">Delete</a></td>
                  <td><Link href={item.coupon_link} target='_blank' className="db-list-edit">preview</Link></td>
                </tr>
                </>)
                })
              )}
             
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
