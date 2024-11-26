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
    <div>
      <h2>hello</h2>
    </div>
  );
};

export default page;
