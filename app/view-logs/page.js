"use client";
import React, { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import Link from "next/link";
import { client } from "@/lib/apollo";
import { GET_ALL_LOGS } from "@/lib/query";

const page = () => {
  const [logs, setLogs] = useState([]);
  const [search,setSearch] = useState('');
  const [filteredlog,setFilteredLog] = useState();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
 
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

  const getLogs = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_ALL_LOGS,
        fetchPolicy:'no-cache',
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getLogs.code !== 200) {
        throw new Error("Something went wrong");
      }

      console.log(data);
      setLogs(data.getLogs.logs);
      handleTotalPages(
        Math.ceil(data.getLogs.logs.length / PAGE_COUNT)
      );
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") getLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  

  let end = page.current * PAGE_COUNT;
  let start = end - PAGE_COUNT;

  useEffect(() => {
    const lowercasedSearch = search.toLowerCase();
    const filtered = logs.filter(log => {
      const levelText = log.level === 30 ? 'info' : log.level === 40 ? 'warning' : 'error';

      return (
        levelText.toLowerCase().includes(lowercasedSearch) ||
        log.msg.toLowerCase().includes(lowercasedSearch) ||
        timeAgo(log.time).toLowerCase().includes(lowercasedSearch) ||
        log.ip.toLowerCase().includes(lowercasedSearch)
      );
    });

    setFilteredLog(filtered);
    if(filtered.length > 0 ){
      handleTotalPages(
        Math.ceil(filtered.length / PAGE_COUNT)
      );
    }
  }, [search, logs]);
  const paginatedLogs = filteredlog?.slice(start, end);

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div>
            <span className="udb-inst">Application Logs</span>
            <div className="ud-cen-s2">
              <h2>Application Logs</h2>
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
              {loading ? (
                <Skeleton count={5} />
              ) : (
                <table className="responsive-table bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Action</th>
                      <th>message</th>
                      <th>Ip Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedLogs?.map((item, index) => (
                      <tr key={item._id}>
                        <td>{(index+1)  + PAGE_COUNT * (page.current - 1)}</td>
                        <td>
                          {item.level === 30 ? 'info': item.level === 40 ? 'warning':'error'}
                          <span>{timeAgo(item.time)}</span>
                        </td>
                        <td>{item.msg}</td>
                        
                        <td>
                         {item.ip}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
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

function timeAgo(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}
export default page;
