"use client";
import React, { useState } from "react";
import Table from "./Table";
import Link from "next/link";

const Page = () => {
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

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">All Listing Details</span>
            <div className="ud-cen-s2">
              <h2>Listing details</h2>
              <Link href="/add-new-listing" className="db-tit-btn">
                Add New Listing
              </Link>
              <div className="ad-int-sear">
                <input
                  type="text"
                  id="pg-sear"
                  placeholder="Search this page.."
                />
              </div>
              <Table page={page} handleTotalPages={handleTotalPages} />
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

export default Page;
