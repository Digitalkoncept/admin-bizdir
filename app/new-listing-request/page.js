"use client";
import React, { useState } from "react";
import Table from "./Table";

const page = () => {
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
    setPage((prevState) => ({
      ...prevState,
      totalPages: number,
    }));
  };
  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">New Listings</span>
            <div className="ud-cen-s2">
              <h2>New Listing details</h2>
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
              {/* <li className="page-item active">
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
              </li> */}

              {Array(page.totalPages)
                .fill(0)
                .map((_, idx) => {
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
