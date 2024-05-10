'use client'
import React,{useEffect,useState} from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
const page = () => {
  const [employee,setEmployee] = useState();
  const {data:session,status} =  useSession();
  const [loading, setLoading] = useState(true);

  
  const getEmployee = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        process.env.BACKEND_URL + "/api/employee",
        {
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );

      const data = await res.json();

      console.log(data);
      setEmployee(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getEmployee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  if (loading) return <>Loading</>;
  return (
    <section>
  <div className="ad-com">
    <div className="ad-dash leftpadd">
      <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">All Employee</span>
        <div className="ud-cen-s2">
          <h2>All Employee</h2>
          <Link href="/create-employee" className="db-tit-btn">Add new Employee</Link>
          <table className="responsive-table bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>profile</th>
                <th>Role</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>View log</th>
              </tr>
            </thead>
            <tbody>
                {employee.map((item,index)=>(<>
                <tr>
                <td>1</td>
                <td><img src="../images/user/6.jpg" alt=""/>{item.name}<span>08, Jan 2020</span></td>
                <td>{item?.role?.role_name}</td>
                <td>**********</td>
                <td><a href="admin-sub-admin-edit.html?row=7" className="db-list-edit">Edit</a></td>
                <td><a href="admin-sub-admin-delete.html?row=7" className="db-list-edit">Delete</a></td>
                <td><a href="admin-sub-admin-log.html?row=7" className="db-list-edit">View log</a></td>
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
