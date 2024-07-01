"use client";
import React, { useState,useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "react-toastify";
import { GET_COUPON_BY_ID } from "@/lib/query";
import { UPDATE_COUPON, UPDATE_EMPLOYEE } from "@/lib/mutation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { client } from "@/lib/apollo";

const page = ({params}) => {
  const { data: session,status } = useSession();
  const [coupon,setCoupon] = useState();
  const router = useRouter();
  const [selectprofile, setSelectProfile] = useState();

  const getCoupon = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_COUPON_BY_ID,
        variables: { couponId: params.id },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.getCoupon.code !== 200) {
        throw new Error("Something went wrong");
      }
      const { __typename,_id,updatedAt,createdAt, ...newFormData } = await data.getCoupon.coupon;
      setCoupon(newFormData);
      console.log(data);
    } catch (error) {
      console.error("something went wrong:", error);
    }
  };

  useEffect(() => {
   if(status === 'authenticated'){
       getCoupon();
   }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCoupon((prevCoupon) => ({
      ...prevCoupon,
      [name]: name === 'coupon_off' ? parseInt(value) : value,
    }));
    console.log(coupon);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, errors } = await client.mutate({
        mutation: UPDATE_COUPON,
        variables: {id:params.id, data:coupon },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.updateCoupon.code !== 200) {
        throw new Error("Something went wrong");
      }

      toast.success("Coupon updated successfully");
      router.push('/all-coupons')
      console.log(data);
    } catch (error) {
      console.error("something went wrong:", error);
    }
  };

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <section className="login-reg">
            <div className="container">
              <div className="row">
                <div className="login-main add-list add-ncate">
                  <div className="log-bor">&nbsp;</div>
                  <span className="udb-inst">Add new Coupon</span>
                  <div className="log log-1">
                    <div className="login">
                      <h4>Add New Coupon</h4>
                      <form
                        name="coupon_form"
                        onSubmit={handleSubmit}
                        id="coupon_form"
                        encType="multipart/form-data"
                        className="cre-dup-form cre-dup-form-show"
                      >
                        <ul>
                          <li>
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="coupon_name"
                                    value={coupon?.coupon_name}
                                    onChange={handleInputChange}
                                    placeholder="Coupon name"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    value={coupon?.coupon_description}
                                    onChange={handleInputChange}
                                    className="form-control"
                                    id="coupon_description"
                                    name="coupon_description"
                                    placeholder="Details about your coupon"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="coupon_code"
                                    value={coupon?.coupon_code}
                                    onChange={handleInputChange}
                                    placeholder="coupon code"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <input
                                    type="number"
                                    name="coupon_off"
                                    className="form-control"
                                    placeholder="amount"
                                    value={coupon?.coupon_off}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
                              <div className="form-group">
                            <select name="coupon_type" value={coupon?.coupon_type} onChange={handleInputChange}      className="form-control !w-[60px] ">
                              <option value="%"> %</option>
                              <option value="₹"> ₹</option>
                              
                            </select>
                          </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="coupon_link"
                                    value={coupon?.coupon_link}
                                    onChange={handleInputChange}
                                    placeholder="Website link(if online offer)"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                            <div className="col-md-12">
                            <div className="form-group">
                              <label>Choose coupon image</label>
                              <div className="fil-img-uplo">
                                <span
                                  className={`dumfil ${
                                    selectprofile ? "!text-green-600" : ""
                                  }`}
                                >
                                  {selectprofile
                                    ? selectprofile
                                    : "Upload a file"}
                                </span>
                                <CldUploadWidget
                                  signatureEndpoint="/api/sign-cloudinary-params"
                                  uploadPreset="listing_image"
                                  onSuccess={(result, { widget }) => {
                                    setCoupon((prevState) => ({
                                      ...prevState,
                                      coupon_image: result?.info?.secure_url,
                                    }));
                                    toast.success(
                                      "your image uploaded successfully!"
                                    );
                                    console.log(result);
                                    setSelectProfile(
                                      result?.info?.original_filename
                                    );
                                    widget.close();
                                  }}
                                >
                                  {({ open }) => {
                                    function handleOnClick() {
                                      open();
                                    }
                                    return (
                                      <button
                                        type="button"
                                        onClick={handleOnClick}
                                      >
                                        upload image
                                      </button>
                                    );
                                  }}
                                </CldUploadWidget>
                              </div>
                            </div>
                          </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Start date</label>
                                  <input
                                    type="date"
                                    value={coupon?.start_date}
                                    className="form-control"
                                    onChange={handleInputChange}
                                    name="start_date"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>End date</label>
                                  <input
                                    type="date"
                                    value={coupon?.end_date}
                                    className="form-control"
                                    onChange={handleInputChange}
                                    name="end_date"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                          </li>
                        </ul>
                        <button
                          type="submit"
                          name="coupon_submit"
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default page;
