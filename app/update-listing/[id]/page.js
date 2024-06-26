"use client";
import React from "react";
import Link from "next/link";
import Location_Filter from "@/components/Location_Filter";
import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";
import { useState, useEffect } from "react";
import { UPDATE_LISTING } from "@/lib/mutation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { client } from "@/lib/apollo";
import { CREATE_CLAIMABLE_LISTING } from "@/lib/mutation";
import UploadGallery from "@/components/Layout/UploadGallery";
import {GET_LISTING_BY_ID} from '@/lib/query'
const page = ({params}) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [inputCount, setInputCount] = useState(1);
  const [selectprofile, setSelectProfile] = useState();
  const [loading,setLoading] = useState();
  const [selectoffer, setSelectOffer] = useState();
  const [selectcover, setSelectCover] = useState();
  const [formData, setFormData] = useState({
    listing_name: "",
    phone_number: "",
    listing_email: "",
    whatsapp_number: "",
    website: "",
    listing_address: "",
    listing_image: "",
    cover_image: "",
    country: "",
    state: "",
    subcategory: [],
    area: "",
    city: "",
    category: "",
    gallery_images: [],
    subcategory: "",
    tags: [],
    listing_detail: "",
    service_location: [],
    service_provided: [],
    offer: {
      offer_name: "",
      offer_amount: "",
      offer_description: "",
      offer_type:"percent",
      offer_image: "",
    },
    youtube_link: "",
    map_url: "",
  });

  const getListing = async () => {
    try {
      const { data, errors } = await client.query({
        query: GET_LISTING_BY_ID,
        variables: { id: params.id },
      });

      if (errors || data.getListing.code !== 200) {
        throw new Error("Something went wrong");
      }
      const {listing} = await data.getListing;
      setFormData((prevFormData) => ({
        ...prevFormData,
    listing_name: listing.listing_name,
    phone_number: listing.phone_number,
    listing_email: listing.listing_email,
    whatsapp_number: listing.whatsapp_number,
    website: listing.website,
    listing_address: listing.listing_address,
    listing_image: listing.listing_image,
    cover_image: listing.cover_image,
    country: listing.country,
    state: listing.state,
    subcategory: listing.subcategory,
    area: listing.area,
    city: listing.city,
    category: listing.category,
    gallery_images: listing.gallery_images,
    subcategory: listing.subcategory,
    tags: listing.tags,
    listing_detail: listing.listing_detail,
    service_location: listing.service_location,
    service_provided: listing.service_provided.map(item =>({name:item.name})),
    offer: {
      offer_name: listing.offer.offer_name,
      offer_amount: listing.offer.offer_amount,
      offer_description: listing.offer.offer_description,
      offer_type: listing.offer.offer_type,
      offer_image: listing.offer.offer_image,
    },
    youtube_link: listing.youtube_link,
    map_url: listing.map_url,
    }));
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    getListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  console.log('listing data => ',formData)
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!formData.listing_name) {
      newErrors.listing_name = "Listing Name is Required";
    }
    if (!formData.phone_number) {
      newErrors.phone_number = "Phone Number is Required";
    }
    if (!formData.listing_address) {
      newErrors.listing_address = "shop address is Required";
    }
    if (!formData.country) {
      newErrors.country = "country is Required";
    }
    if (!formData.state) {
      newErrors.state = "State is Required";
    }
    if (!formData.city) {
      newErrors.city = "city is Required";
    }
    if (!formData.area) {
      newErrors.area = "area is Required";
    }
    if (!formData.category) {
      newErrors.category = "Category is Required";
    }
    if (!formData.subcategory) {
      newErrors.subcategory = "Subcategory is Required";
    }
    if (!formData.listing_detail) {
      newErrors.listing_detail = "listing detail is Required";
    }
    // Add other validation as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddInput = () => {
    setInputCount(inputCount + 1);
  };
  const handleRemoveInput = () => {
    if (inputCount > 1) {
      setInputCount(inputCount - 1);
      // Remove the last element from formData.service_provided array
      const updatedServiceProvided = [...formData.service_provided];
      updatedServiceProvided.pop();
      setFormData((prevFormData) => ({
        ...prevFormData,
        service_provided: updatedServiceProvided,
      }));
      console.log(formData);
    }
  };
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    if (name === "service_location") {
      // Update service_location with the array of locations
      const locationsArray = value.split(",");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: locationsArray, // Update service_location with the array of locations
      }));
    } else if (name === "service_provided") {
      const updatedServiceProvided = [...formData.service_provided];

      // If the index exceeds the length of the updatedServiceProvided array,
      // it means a new service object needs to be added
      if (index >= updatedServiceProvided.length) {
        updatedServiceProvided.push({ name: "", image: "" });
      }

      // Update the corresponding field (name or image) of the service object at the specified index
      updatedServiceProvided[index] = {
        ...updatedServiceProvided[index],
        name: value,
      };

      // Update the formData state with the modified service_provided array
      setFormData((prevFormData) => ({
        ...prevFormData,
        service_provided: updatedServiceProvided,
      }));
    } else if (
      name === "offer_name" ||
      name === "offer_amount" ||
      name === "offer_description" ||
      name === "offer_type"
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        offer: {
          ...prevFormData.offer, // Spread the existing offers object
          [name]: value, // Update the specific field
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      if (value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }

    console.log(formData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const jwt = session.jwt;
    const id = params.id;
    try {
      // Send GraphQL mutation request to create a listing
      if (validate()) {
        const { data, errors } = await client.mutate({
          mutation: UPDATE_LISTING,
          variables: { id, data: formData },
          context: {
            headers: {
              Authorization: `Bearer ${session.jwt}`,
            },
          },
        });

        if (errors || data.updateListing.code !== 200) {
          throw new Error("Something went wrong");
        }
        toast.success("Listing update successfully");
        router.push("/admin-all-listings");
        console.log(data);
      } else {
        toast.error("Please fill all required fields");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };

  return (
    <section>
      <div className="ad-com">
        <div className="ad-dash leftpadd">
          <div className="login-reg animation-bg">
            <div className="container">
              <form
                onSubmit={handleSubmit}
                className="listing_form"
                id="listing_form"
                name="listing_form"
              >
                <div className="row">
                  <div className="login-main add-list posr">
                    <div className="log-bor">&nbsp;</div>
                    <span className="udb-inst">step 1</span>
                    <div className="log log-1">
                      <div className="login">
                        <h4>Listing Details</h4>
                        {/*FILED START*/}

                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                id="listing_name"
                                value={formData.listing_name}
                                onChange={handleInputChange}
                                name="listing_name"
                                type="text"
                                className="form-control"
                                placeholder="Listing name *"
                              />
                              {errors.listing_name && (
                                <label htmlFor="listing_name" className="error">
                                  {errors.listing_name}
                                </label>
                              )}
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                value={formData.phone_number}
                                onChange={handleInputChange}
                                name="phone_number"
                                className="form-control"
                                placeholder="Phone number *"
                              />
                              {errors.phone_number && (
                                <label htmlFor="phone_number" className="error">
                                  {errors.phone_number}
                                </label>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                value={formData.listing_email}
                                onChange={handleInputChange}
                                name="listing_email"
                                className="form-control"
                                placeholder="Email id"
                              />
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
                                value={formData.whatsapp_number}
                                onChange={handleInputChange}
                                name="whatsapp_number"
                                className="form-control"
                                placeholder="Whatsapp Number"
                              />
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
                                value={formData.website}
                                onChange={handleInputChange}
                                name="website"
                                className="form-control"
                                placeholder="Enter Website"
                              />
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
                                value={formData.listing_address}
                                onChange={handleInputChange}
                                name="listing_address"
                                className="form-control"
                                placeholder="Shop address *"
                              />
                              {errors.listing_address && (
                                <label
                                  htmlFor="listing_address"
                                  className="error"
                                >
                                  {errors.listing_address}
                                </label>
                              )}
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        {/* <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name="listing_lat"
                                className="form-control"
                                placeholder="Latitude i.e 40.730610"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                name="listing_lng"
                                className="form-control"
                                placeholder="Longitude i.e -73.935242"
                              />
                            </div>
                          </div>
                        </div> */}

                        <Location_Filter
                          formData={formData}
                          InputChange={handleInputChange}
                          setFormData={setFormData}
                          errors={errors}
                          setErrors={setErrors}
                        />
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                value={formData.listing_detail}
                                onChange={handleInputChange}
                                className="form-control"
                                id="listing_description"
                                name="listing_detail"
                                placeholder="Details about your listing"
                              />
                              {errors.listing_detail && (
                                <label
                                  htmlFor="listing_detail"
                                  className="error"
                                >
                                  {errors.listing_detail}
                                </label>
                              )}
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row px-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Choose profile image</label>
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
                                      listing_image: result?.info?.secure_url,
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
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Choose cover image</label>
                              <div className="fil-img-uplo">
                                <span
                                  className={`dumfil ${
                                    selectcover ? "!text-green-600" : ""
                                  }`}
                                >
                                  {selectcover ? selectcover : " Upload a file"}
                                </span>
                                <CldUploadWidget
                                  signatureEndpoint="/api/sign-cloudinary-params"
                                  uploadPreset="listing_image"
                                  onSuccess={(result, { widget }) => {
                                    setFormData((prevFormData) => ({
                                      ...prevFormData,
                                      cover_image: result?.info?.secure_url,
                                    }));
                                    toast.success(
                                      "your image uploaded successfully!"
                                    );
                                    setSelectCover(
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

                        <div className="row bor-box">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>
                                Enter your service locations... (i.e) London,
                                Dallas, Wall Street, Opera House
                              </label>
                              <textarea
                                value={formData.service_location}
                                onChange={handleInputChange}
                                className="form-control valid"
                                id="service_locations"
                                name="service_location"
                                placeholder="Enter your service locations... 
        (i.e) London, Dallas, Wall Street, Opera House"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*FILED END*/}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="login-main add-list add-list-ser">
                    <div className="log-bor">&nbsp;</div>
                    <span className="steps">Step 2</span>
                    <div className="log">
                      <div className="login">
                        <h4>Services provide</h4>
                        <span
                          onClick={handleAddInput}
                          className="add-list-add-btn lis-ser-add-btn"
                          title="add new offer"
                        >
                          +
                        </span>
                        <span
                          onClick={handleRemoveInput}
                          className="add-list-rem-btn lis-ser-rem-btn"
                          title="remove offer"
                        >
                          -
                        </span>
                        <ul>
                          {Array.from({ length: inputCount }, (_, index) => (
                            <li key={index}>
                              {/*FILED START*/}
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>Service name:</label>
                                    <input
                                      type="text"
                                      value={
                                        formData.service_provided[index]
                                          ?.name || ""
                                      }
                                      onChange={(e) =>
                                        handleInputChange(e, index)
                                      }
                                      name="service_provided"
                                      className="form-control"
                                      placeholder="Ex: Plumbile"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label>Choose profile image</label>
                                    <input
                                      type="file"
                                      name="service_image[]"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              {/*FILED END*/}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="login-main add-list">
                    <div className="log-bor">&nbsp;</div>
                    <span className="steps">Step 3</span>
                    <div className="log">
                      <div className="login add-list-off">
                        <h4>Special offers</h4>
                        <span
                          className="add-list-add-btn lis-add-off"
                          title="add new offer"
                        >
                          +
                        </span>
                        <span
                          className="add-list-rem-btn lis-add-rem"
                          title="remove offer"
                        >
                          -
                        </span>
                        <ul>
                          <li>
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="offer_name"
                                    className="form-control"
                                    placeholder="Offer name *"
                                    value={formData.offer?.offer_name}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="offer_amount"
                                    className="form-control"
                                    placeholder="amount"
                                    value={formData.offer?.offer_amount}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
                              <div className="form-group">
                            <select name="offer_type" required="required"  value={formData.offer.offer_type} onChange={handleInputChange}  className="form-control !w-[60px] ">
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
                                  <textarea
                                    className="form-control"
                                    name="offer_description"
                                    placeholder="Details about this offer"
                                    value={formData.offer?.offer_description}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                            {/*FILED START*/}
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label>Choose profile image</label>
                                  <div className="fil-img-uplo">
                                    <span
                                      className={`dumfil ${
                                        selectoffer ? "!text-green-600" : ""
                                      }`}
                                    >
                                      {selectoffer
                                        ? selectoffer
                                        : "Upload a file"}
                                    </span>
                                    <CldUploadWidget
                                      signatureEndpoint="/api/sign-cloudinary-params"
                                      uploadPreset="listing_image"
                                      onSuccess={(result, { widget }) => {
                                        setFormData((prevFormData) => ({
                                          ...prevFormData,
                                          offer: {
                                            ...prevFormData.offer, // Spread the existing offers object
                                            offer_image:  result?.info?.secure_url, // Update the specific field
                                          },
                                        }));
                                        toast.success(
                                          "your image uploaded successfully!"
                                        );
                                        setSelectOffer(
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
                            {/*FILED END*/}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="login-main add-list">
                    <div className="log-bor">&nbsp;</div>
                    <span className="steps">Step 4</span>
                    <div className="log add-list-map">
                      <div className="login add-list-map">
                        <h4>Video Gallery</h4>
                        <ul>
                          <span
                            className="add-list-add-btn lis-add-oadvideo"
                            title="add new video"
                          >
                            +
                          </span>
                          <span
                            className="add-list-rem-btn lis-add-orevideo"
                            title="remove video"
                          >
                            -
                          </span>
                          <li>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    id="listing_video"
                                    value={formData.youtube_link}
                                    onChange={handleInputChange}
                                    name="youtube_link"
                                    className="form-control"
                                    placeholder="Paste Your Youtube Url here"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <h4>Map and 360 view</h4>
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                value={formData.map_url}
                                className="form-control"
                                name="map_url"
                                onChange={handleInputChange}
                                placeholder="map location"
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}

                        {/*FILED END*/}
                        <UploadGallery
                          formData={formData}
                          setFormData={setFormData}
                        />
                        <div className="row">
                          <div className="col-md-6">
                            <button
                              onClick={() => handleStepClick(4)}
                              type="button"
                              className="btn btn-primary"
                            >
                              Previous
                            </button>
                          </div>
                          <div className="col-md-6">
                            <button type="submit" className="btn btn-primary">
                              Update Listing
                            </button>
                          </div>
                        </div>
                        {/*FILED END*/}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
