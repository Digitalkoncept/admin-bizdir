import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CategoryForm = ({ data, handleDataChange, setCategory }) => {
  const [selectprofile, setSelectProfile] = useState();
  return (
    <ul>
      <li>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                id="category_name"
                name="category_name"
                className="form-control"
                placeholder="Category name *"
                required
                value={data.category_name}
                onChange={(e) =>
                  handleDataChange(data.id, e.target.name, e.target.value)
                }
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Choose category image</label>
              {/* <input
                type="file"
                name="image"
                id="category_image"
                className="form-control"
                value={data.image}
                onChange={(e) =>
                  handleDataChange(data.id, e.target.name, e.target.value)
                }
              /> */}

              <div className="fil-img-uplo">
                <span
                  className={`dumfil ${selectprofile ? "!text-green-600" : ""}`}
                >
                  {selectprofile ? selectprofile : "Upload a file"}
                </span>
                <CldUploadWidget
                  signatureEndpoint="/api/sign-cloudinary-params"
                  uploadPreset="listing_image"
                  onSuccess={(result, { widget }) => {
                    handleDataChange(
                      data.id,
                      "image",
                      result?.info?.secure_url
                    );
                    toast.success("your image uploaded successfully!");
                    console.log(result);
                    setSelectProfile(result?.info?.original_filename);
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
      </li>
    </ul>
  );
};

export default CategoryForm;
