"use client";
import React, { useState } from "react";

const Paginate = ({ children }) => {
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
    setPage((prevState) => ({
      ...prevState,
      totalPages: number,
    }));
  };

  let end = page.current * PAGE_COUNT;
  let start = end - PAGE_COUNT;

  const paginatedUser = users.slice(start, end);
  return (
    <>
      {children}
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
    </>
  );
};

export default Paginate;
