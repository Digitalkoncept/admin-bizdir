"use client";
import React from "react";
import Link from "next/link";
import Location_Filter from "@/components/Location_Filter";
import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";
import axios from "axios";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
 const router = useRouter();
  const [inputCount, setInputCount] = useState(1);
  const [users,setUsers] = useState([]);
  const [formData, setFormData] = useState({
    user_name: "",
    user:"",
    listing_name: "",
    phone_number: "",
    email: "",
    whatsapp_number: "",
    website: "",
    shop_address: "",
    listing_image:"",
    cover_image:"",
    country: "",
    cities: [],
    category: "",
    sub_category: [],
    listing_detail: "",
    listing_profile: "",
    listing_cover: "",
    service_location: [],
    service_provided: [],
    youtube_link: "",
    map_url: "",
  });
 
  const getUsers = async () => {
    try {
      const res = await fetch(
        process.env.BACKEND_URL + "/api/user/all",
        {
          headers: {
            authorization: "Bearer " + session.jwt,
          },
        }
      );
      if(res.status !== 200){
        throw new Error("something went wrong");
      }
      const data = await res.json();
      const mappeduser =await data.map(user => ({_id:user._id,name:user.name}));
      setUsers(mappeduser);
      console.log("all users fetched",data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);
  console.log("mapped user",users)
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
    if (name === "user_name") {
      const selectedUser = users.find(user => user._id === value);
      setFormData(prevFormData => ({
        ...prevFormData,
        user: value,
        user_name: selectedUser?.name || "", // Set user_name to the selected user's name or an empty string if not found
      }));
    }
    else if (name === "service_location") {
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
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jwt = session.jwt;
    try {
      // Send POST request to /api/listing endpoint with formData
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/listing`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      if(response.status !== 201){
        throw new Error("something went wrong")
      }
      toast.success("listing created successfully");
      router.push('/admin-all-listings')
      console.log(response.data); // Handle response from server
      // Optionally, you can reset the form data after successful submission
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
                          <select name="user_name" required="required" onChange={handleInputChange} value={formData.user}  className="form-control">
                            <option value>Select User</option>
                            {users?.map((option,index)=>(
                              <option key={index}  value={option?._id}>{option?.name}</option>
                            ))}
                            
                          </select>
                        </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                id="listing_name"
                                value={formData.listing_name}
                                onChange={handleInputChange}
                                name="listing_name"
                                type="text"
                                required="required"
                                className="form-control"
                                placeholder="Listing name *"
                              />
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
                                placeholder="Phone number"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                value={formData.email}
                                onChange={handleInputChange}
                                name="email"
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
                                value={formData.shop_address}
                                onChange={handleInputChange}
                                name="shop_address"
                                required="required"
                                className="form-control"
                                placeholder="Shop address"
                              />
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
                        </div>

                        <Location_Filter
                          formData={formData}
                          InputChange={handleInputChange}
                          setFormData={setFormData}
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
                                <span className="dumfil">Upload a file</span>
                                <CldUploadWidget
                                  signatureEndpoint="/api/sign-cloudinary-params"
                                  uploadPreset="listing_image"
                                  onSuccess={(result, { widget }) => {
                                    setFormData(prevFormData => ({
                                      ...prevFormData,
                                      listing_image: result?.info?.secure_url,
                                    }));
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
                                <span className="dumfil">Upload a file</span>
                                <CldUploadWidget
                                  signatureEndpoint="/api/sign-cloudinary-params"
                                  uploadPreset="listing_image"
                                  onSuccess={(result, { widget }) => {
                                    setFormData(prevFormData => ({
                                      ...prevFormData,
                                      cover_image: result?.info?.secure_url,
                                    }));
                                    widget.close();
                                  }}
                                >
                                  {({ open }) => {
                                    function handleOnClick() {
                                      open();
                                    }
                                    return (
                                      <button type="button" onClick={handleOnClick}>
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
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="offer_name"
                                    className="form-control"
                                    placeholder="Offer name *"
                                    value={formData.offers?.offer_name}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="price"
                                    className="form-control"
                                    onKeyDown={(e) => !isNaN(e.target.value)}
                                    placeholder="Price"
                                    value={formData.offers?.price}
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
                                  <textarea
                                    className="form-control"
                                    name="description"
                                    placeholder="Details about this offer"
                                    value={formData.offers?.description}
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
                                  <label>Choose offer image</label>
                                  <input
                                    type="file"
                                    name="service_1_image[]"
                                    className="form-control"
                                  />
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
                        <h4 className="pt30">Photo gallery</h4>
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                        {/*FILED START*/}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="file"
                                name="gallery_image[]"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        {/*FILED END*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="login-main add-list">
                    <div className="log-bor">&nbsp;</div>
                    <span className="steps">Step 5</span>
                    <div className="log">
                      <div className="login add-lis-oth">
                        <h4>Other informations</h4>
                        <span
                          className="add-list-add-btn lis-add-oad"
                          title="add new offer"
                          onClick={handleAddInput}
                        >
                          +
                        </span>
                        <span
                          className="add-list-rem-btn lis-add-ore"
                          title="remove offer"
                          onClick={handleRemoveInput}
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
                                    name="listing_info_question[]"
                                    className="form-control"
                                    placeholder="Experience"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <i className="material-icons">
                                    arrow_forward
                                  </i>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_answer[]"
                                    className="form-control"
                                    placeholder="20 years"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*FILED END*/}
                          </li>
                          {/*FILED START*/}
                          <li>
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_question[]"
                                    className="form-control"
                                    placeholder="Parking"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <i className="material-icons">
                                    arrow_forward
                                  </i>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_answer[]"
                                    className="form-control"
                                    placeholder="yes"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          {/*FILED END*/}
                          {/*FILED START*/}
                          <li>
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_question[]"
                                    className="form-control"
                                    placeholder="Smoking"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <i className="material-icons">
                                    arrow_forward
                                  </i>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_answer[]"
                                    className="form-control"
                                    placeholder="yes"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          {/*FILED END*/}
                          {/*FILED START*/}
                          <li>
                            <div className="row">
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_question[]"
                                    className="form-control"
                                    placeholder="Take Out"
                                  />
                                </div>
                              </div>
                              <div className="col-md-2">
                                <div className="form-group">
                                  <i className="material-icons">
                                    arrow_forward
                                  </i>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="listing_info_answer[]"
                                    className="form-control"
                                    placeholder="yes"
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                          {/*FILED END*/}
                        </ul>
                        {/*FILED START*/}
                        <div class="row">
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
                              Submit Listing
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
