'use client'
import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import DateFormatter from '@/components/DateFormatter'
const page = () => {
  const [users,setUsers] = useState();
  const [loading,setLoading] = useState();
  const {data:session,status} = useSession();
  const getUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          process.env.BACKEND_URL + "/api/user/all",
          {
            headers: {
              authorization: "Bearer " + session.jwt,
            },
          }
        );
  
        const data = await res.json();
        const dateobje = 
        console.log(data);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      if (status === "authenticated") getUsers();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);

    const disableUser = async (id) => {
      try {
        setLoading(true);
        const res = await fetch(
          process.env.BACKEND_URL + `/api/user/${id}`,
          {
            method:'PATCH',
            headers: {
              authorization: "Bearer " + session.jwt,
            },
            body: JSON.stringify({user_status:'Disabled'})
          }
        );
        const data = await res.json();
        if(res.status=== 200){
          toast.success(data.message)
        }
        getUsers();
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    
  
  return (
   <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All User Details</span>
        <div className="ud-cen-s2">
          <h2>All Users - 248</h2>
          <div className="ad-int-sear">
            <input type="text" id="pg-sear" placeholder="Search this page.." />
          </div>
          <a href="admin-add-new-user.html" className="db-tit-btn">Add new user</a>
          {loading ? (
            <Skeleton count={5} />
          ):(
            <table className="responsive-table bordered" id="pg-resu">
            <thead>
              <tr>
                <th>No</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Plan type</th>
                <th>Disable</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item,index) => (
                <>
                  <tr>
                <td>{index +1}</td>
                <td><img src="../images/user/475847.jpg" alt=""/>{item.name}<DateFormatter dateString={item.createdAt} />
                </td>
                <td>{item.email}</td>
                <td><span className="db-list-rat">{item?.subscription?.user_plan}</span></td>
                <td><span  className="db-list-edit" onClick={() => disableUser(item._id)}>{item.user_status ==='Active' ? 'Disable':'Enable'}</span></td>
                <td><Link href={`/all-users/${item._id}`} className="db-list-edit" >Preview</Link></td>
              </tr>
                </>
              ))}
            
            </tbody>
          </table>
          )}
          
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
