"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/lib/apollo";
import { GET_ALL_COUPONS } from "@/lib/query";
import Link from "next/link";
import { useSession } from "next-auth/react";
const page = () => {
  const [coupons, setCoupons] = useState([]);
  const { data: session, status } = useSession();

  const PAGE_COUNT = 5;

  const [page, setPage] = useState({
    totalPages: 1,
    current: 1,
  });

  const handlePageNumber = (number) => {
    if (number >= 1 && number <= page.totalPages) {
      setPage((prevState) => ({
        ...prevState,
        current: number,
      }));
    }
  };

  const handleTotalPages = (number) => {
    setPage((prevState) => {
      const currentPage = Math.min(prevState.current, number);
      return {
        ...prevState,
        totalPages: number,
        current: currentPage,
      };
    });
  };

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
      handleTotalPages(
        Math.ceil(data.getAllCoupons.coupons.length / PAGE_COUNT)
      );
    } catch (error) {
      console.error("something went wrong:", error.message);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      getAllCoupons();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  console.log(coupons);

  let end = page.current * PAGE_COUNT;
  let start = end - PAGE_COUNT;

  const paginatedCoupons = coupons.slice(start, end);
  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Coupons and deals</span>
            <div className="ud-cen-s2">
              <h2>All Coupons details</h2>
              <Link href="/add-new-coupon" className="db-tit-btn">
                Add new Coupons
              </Link>
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
                  {coupons?.length > 0 &&
                    paginatedCoupons?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {item.coupon_name}
                            <span>{item.createdAt}</span>
                          </td>
                          <td>{item.coupon_code}</td>
                          <td>
                            <span className="db-list-ststus">
                              {item.createdBy.name || ""}
                            </span>
                          </td>
                          <td>{item.end_date}</td>
                          <td>
                            <Link
                              href={`/all-coupons/${item._id}`}
                              className="db-list-edit"
                            >
                              Edit
                            </Link>
                          </td>
                          <td>
                            <a
                              href="admin-delete-coupons.html?row=1"
                              className="db-list-edit"
                            >
                              Delete
                            </a>
                          </td>
                          <td>
                            <Link
                              href={item.coupon_link}
                              target="_blank"
                              className="db-list-edit"
                            >
                              preview
                            </Link>
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
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageNumber(page.current - 1)}
                >
                  Previous
                </a>
              </li>

              {Array.from({ length: page.totalPages }, (_, idx) => {
                const currentPage = idx + 1;
                return (
                  <li
                    className={`page-item ${
                      page.current === currentPage ? "active" : ""
                    }`}
                    key={idx}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => handlePageNumber(currentPage)}
                    >
                      {currentPage}
                    </a>
                  </li>
                );
              })}
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageNumber(page.current + 1)}
                >
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
