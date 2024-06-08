"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import DateFormatter from "@/components/DateFormatter";
import { client } from "@/lib/apollo";
import { GET_USER_DETAILS } from "@/lib/query";
const page = ({ params }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();
  const { data: session } = useSession();

  const getUser = async () => {
    // try {
    //   setLoading(true);
    //   const res = await fetch(
    //     process.env.BACKEND_URL + `/api/user/${params.id}`,
    //     {
    //       headers: {
    //         authorization: "Bearer " + session.jwt,
    //       },
    //     }
    //   );

    //   const data = await res.json();
    //   setUser(data);
    //   console.log(data);
    //   setLoading(false);
    // } catch (error) {
    //   console.error(error);
    // }

    try {
      const { data, errors } = await client.query({
        query: GET_USER_DETAILS,
        variables: { id: params.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.createRole.code !== 200) {
        throw new Error("Something went wrong");
      }

      setUser(data.getUser.user);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">User Full Details</span>
            <div className="ud-cen-s2 ud-sp">
              <h2>Profile details</h2>{" "}
              {/*                    <a href="admin-user-plan-change.html?row=*/}
              {/*"*/}
              {/*                       class="db-tit-btn db-tit-btn-1">Change plan</a>*/}
              <table className="responsive-table bordered">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{user?.name}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>{user?.user_status}</td>
                  </tr>
                  <tr>
                    <td>Plan type</td>
                    <td>
                      <span className="db-list-rat">{user?.user_plan}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Plan Start on</td>
                    <td>
                      <span className="db-list-ststus">N/A</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Plan Expiry on</td>
                    <td>
                      <span className="db-list-ststus">N/A</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Payment Status</td>
                    <td>
                      <span className="db-list-rat">N/A</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Amount paid </td>
                    <td>
                      <span className="db-list-rat">FREE</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Email id</td>
                    <td>{user?.email}</td>
                  </tr>
                  <tr>
                    <td>Profile password</td>
                    <td>*******</td>
                  </tr>
                  <tr>
                    <td>Mobile number</td>
                    <td>{user?.mobile_number}</td>
                  </tr>
                  <tr>
                    <td>Profile picture</td>
                    <td>
                      <img src={user?.profile_image} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{user?.user_info?.user_address}</td>
                  </tr>
                  <tr>
                    <td>Join date</td>
                    <td>
                      <DateFormatter dateString={user?.createdAt} />
                    </td>
                  </tr>
                  <tr>
                    <td>Verified</td>
                    <td>{user?.is_varified?.status ? "Verified" : "No"}</td>
                  </tr>

                  <tr>
                    <td>Profile link</td>
                    <td>
                      <a href="http://localhost/directory/bizbook/profile/dany">
                        http://localhost/directory/bizbook/profile/dany
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Listings</td>
                    <td>
                      <span className="db-list-rat">0</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Events</td>
                    <td>
                      <span className="db-list-rat">0</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Followers</td>
                    <td>
                      <span className="db-list-rat">0</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Facebook</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Twitter</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td />
                  </tr>
                  {/*                        <tr>*/}
                  {/*                            <td>Ip Address</td>*/}
                  {/*                            <td>11.111.342.654</td>*/}
                  {/*                        </tr>*/}
                  {/*                        <tr>*/}
                  {/*                            <td>Payment Type</td>*/}
                  {/*                            <td>Cash on delivery</td>*/}
                  {/*                        </tr>*/}
                  <tr>
                    <td>Source to join</td>
                    <td>Website</td>
                  </tr>
                  <tr>
                    <td>
                      <Link
                        href="/all-users"
                        className="db-pro-bot-btn"
                      >
                        close
                      </Link>
                      {/*                                <a href="admin-user-plan-change.html?row=*/}
                      {/*"*/}
                      {/*                                   class="db-pro-bot-btn">Upgrade</a>*/}
                    </td>
                    <td />
                  </tr>
                </tbody>
              </table>
              <div className="ud-notes">
                <p>
                  <b>Notes about this user:</b>{" "}
                  <span contentEditable="true">
                    Click here to write short notes or conversation with this
                    user.(Ex: I spoke him to discuss about advantage of Premium
                    Plan on April 12th 2020.)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
