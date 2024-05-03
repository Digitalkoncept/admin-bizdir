"use client";
import React from "react";

const page = () => {
    return (
        <section>
            <div className="ad-com">
                <div className="ad-dash leftpadd">
                    <div className="ud-cen">
                        <div className="log-bor">&nbsp;</div>
                        <span className="udb-inst">All Listing Details</span>
                        <div className="ud-cen-s2">
                            <h2>Listing details</h2>
                            <div className="ad-int-sear">
                                <input
                                    type="text"
                                    id="pg-sear"
                                    placeholder="Search this page.."
                                />
                            </div>
                            <a
                                href="admin-add-new-listings.html"
                                className="db-tit-btn"
                            >
                                Add new listing
                            </a>
                            <table
                                className="responsive-table bordered"
                                id="pg-resu"
                            >
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Listing Name</th>
                                        <th>Rating</th>
                                        <th>Views</th>
                                        <th>Created by</th>
                                        {/*<th>Promote</th>*/}
                                        <th>Edit</th>
                                        <th>Delete</th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listingData.map((listing, idx) => {
                                        return (
                                            <tr key={listing}>
                                                <td>{idx + 1}</td>
                                                <td>
                                                    <img
                                                        src="../images/listings/82551rn53.png"
                                                        alt=""
                                                    />
                                                    qwerqw{" "}
                                                    <span>09, Apr 2021</span>
                                                </td>
                                                <td>
                                                    <span className="db-list-rat">
                                                        0
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="db-list-rat">
                                                        0
                                                    </span>
                                                </td>
                                                <td>
                                                    <a
                                                        href="http://localhost/directory/bizbook/profile/rn53-themes"
                                                        className="db-list-ststus"
                                                        target="_blank"
                                                    >
                                                        Rn53 Themes
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href="admin-promote-now.html?code=
                                      &&type=listing"
                                                        class="db-list-edit"
                                                    ></a>
                                                </td>
                                                <td>
                                                    <a
                                                        href="admin-edit-listings.html?code=LIST396"
                                                        className="db-list-edit"
                                                    >
                                                        Edit
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href="admin-delete-listings.html?code=LIST396"
                                                        className="db-list-edit"
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href="http://localhost/directory/bizbook/listing/qwerqw"
                                                        className="db-list-edit"
                                                        target="_blank"
                                                    >
                                                        Preview
                                                    </a>
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
