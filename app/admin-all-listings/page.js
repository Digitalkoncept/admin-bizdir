"use client";
import React, { useState } from "react";
import Table from "./Table";
import Link from "next/link";

const Page = () => {
  const [page, setPage] = useState({
    totalPages: 1,
    current: 1,
  });
 const [search,setSearch] = useState('');
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
              <div id="pg-resu_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div id="pg-resu_filter" className="dataTables_filter">
                    <label className="text-xs">
                      Search:
                      <input
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="form-control form-control-sm"
                        placeholder
                        aria-controls="pg-resu"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <Link href="/add-new-listing" className="db-tit-btn">
                Add New Listing
              </Link>
              <Table page={page} handleTotalPages={handleTotalPages} search={search} setSearch={setSearch} />
              </div>
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
