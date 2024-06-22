import React,{useState} from "react";
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "react-toastify";
const UploadGallery = ({formData,setFormData}) => {
    const [image,setImage] = useState({
        name1:null,
        name2:null,
        name3:null,
        name4:null,
        name5:null,
        name6:null
    })
  return (
    <div>
      <h4 className="pt30">Photo gallery</h4>
      {/*FILED START*/}
      <div className="row">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="col-md-6">
            <div className="form-group">
              <label>Choose Gallery image {index + 1}</label>
              <div className="fil-img-uplo">
              <span className={`dumfil ${image[`name${index + 1}`] ? '!text-green-600':''} `}>
              {image[`name${index + 1}`] ? image[`name${index + 1}`] : 'Upload a file'}
              </span>
                <CldUploadWidget
                  key={index + 1}
                  signatureEndpoint="/api/sign-cloudinary-params"
                  uploadPreset="listing_image"
                  onSuccess={(result, { widget }) => {
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      gallery_images: [
                        ...prevFormData.gallery_images,
                        result?.info?.secure_url,
                      ],
                    }));
                    toast.success("your image uploaded successfully!")
                    setImage((prevFormData) => ({
                        ...prevFormData,
                        [`name${index + 1}`]:result?.info?.original_filename
                      }));
                      console.log(result?.info)
                    widget.close();
                    document.body.style.overflow = '';
                  }}
                >
                  {({ open }) => {
                    function handleOnClick() {
                      open();
                    }
                    return (
                      <button type="button" onClick={handleOnClick}>
                        Upload Image {index + 1}
                      </button>
                    );
                  }}
                </CldUploadWidget>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadGallery;
