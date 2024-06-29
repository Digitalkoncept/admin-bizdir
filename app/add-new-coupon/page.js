"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "react-toastify";
import { CREATE_COUPON } from "@/lib/mutation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { client } from "@/lib/apollo";

const page = () => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    coupon_name: "",
    coupon_code: "",
    coupon_description: "",
    coupon_off:null,
    coupon_link: "",
    coupon_image: "",
    start_date: "",
    end_date: "",
  });
  const [selectprofile, setSelectProfile] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === 'coupon_off' ? parseInt(value) : value,
    }));
    console.log(formData);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, errors } = await client.mutate({
        mutation: CREATE_COUPON,
        variables: { data: formData },
        context: {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      });

      if (errors || data.createCoupon.code !== 201) {
        throw new Error("Something went wrong");
      }

      toast.success("Coupon created successfully");
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
                                    value={formData.coupon_description}
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
                                    value={formData.coupon_off}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
                              <div className="form-group">
                            <select name="offer_type"      className="form-control !w-[60px] ">
                              <option value="percent"> %</option>
                              <option value="flate"> ₹</option>
                              
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
                                    setFormData((prevFormData) => ({
                                      ...prevFormData,
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
