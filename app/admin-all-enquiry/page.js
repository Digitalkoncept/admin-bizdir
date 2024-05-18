'use client';
import { useSession } from "next-auth/react";
import React, {useState, useEffect} from "react";

const page = () => {
  const [enquiries, setEnquiries] = useState([]);
  const { data: session, status } = useSession();
  // const searchParams = useSearchParams();


  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND_URL}/api/enquiry/`,
          {
            headers: {
              authorization: "Bearer " + session?.jwt,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Enquiry");
        }
        const data = await response.json();
        setEnquiries(data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };

    fetchListings();
  }, [session]);

  if (status === "loading") return <>Loading...</>

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Listing Enquiry</span>
            <div className="ud-cen-s2">
              <h2>Enquiry Details</h2>
              <div className="ad-int-sear">
                <input
                  type="text"
                  id="pg-sear"
                  placeholder="Search this page.."
                />
              </div>
              <table
                className="responsive-table bordered tb-bold-dis"
                id="pg-resu"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Listing</th>
                    <th>Category</th>
                    <th>Tracking-id</th>
                    <th>Delete</th>
                    <th>Save</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enquiry, idx) => {
                    const date = new Date(enquiry.createdAt)
                    return (
                      <tr key={enquiry._id}>
                        <td>{idx + 1}</td>
                        <td>
                          {enquiry.enquirer_name} <span>{date.toLocaleDateString('en-US', {
                            day : 'numeric',
                            month : 'long',
                            year : 'numeric'
                          })}</span>
                        </td>
                        <td>{enquiry.enquirer_email}</td>
                        <td>{enquiry.enquirer_mobile}</td>
                        <td />
                        <td>Rental App</td>
                        <td />
                        <td>Website</td>
                        <td>
                          <a
                            href="trash_enquiry.html?messageenquirymessageenquirymessageenquirymessageenquiry=242"
                            className="db-list-edit"
                          >
                            Delete
                          </a>
                        </td>
                        <td>
                          <span
                            className="enq-sav"
                            data-toggle="tooltip"
                            title="Click to save this enquiry"
                          >
                            <i className="material-icons">favorite</i>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="ad-pgnat">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
