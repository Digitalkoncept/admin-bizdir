'use client'
import React,{useState,useEffect} from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
const page = () => {
    const [roles,setRoles] = useState();
    const [loading,setLoading] = useState();
    const {data:session,status} = useSession();
    const getRoles = async () => {
        try {
          setLoading(true);
          const res = await fetch(
            process.env.BACKEND_URL + "/api/role",
            {
              headers: {
                authorization: "Bearer " + session.jwt,
              },
            }
          );
    
          const data = await res.json();
    
          console.log(data);
          setRoles(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      useEffect(() => {
        if (status === "authenticated") getRoles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [session]);
      if (loading) return <>Loading</>;
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All Roles</span>
        <div className="ud-cen-s2">
          <h2>All Roles</h2>
          <Link href="/create-role" className="db-tit-btn">Add new Role</Link>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Permissions</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {roles?.map((item,index)=>(<>
                <tr>
                <td>1</td>
                <td>{item?.role_name}</td>
                <td>{item?.description}</td>
                <td>{item?.permissions.join(', ')}</td>
                <td><a href="admin-sub-admin-edit.html?row=7" className="db-list-edit">Update</a></td>
                <td><a href="admin-sub-admin-delete.html?row=7" className="db-list-edit">Delete</a></td>
                </tr>
                </>
              ))}
                
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </section>
  )
}

export default page
