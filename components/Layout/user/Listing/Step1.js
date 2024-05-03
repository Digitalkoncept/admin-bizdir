import React from 'react'
import Location_Filter from '@/components/Location_Filter'
const Step1 = ({formData,handleInputChange,setFormData,handleStepClick}) => {
  return (
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
          
        <Location_Filter formData={formData} InputChange={handleInputChange} setFormData={setFormData} />
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
                <input type="file" name="profile_image" accept="image/*,.jpg,.jpeg,.png" className="form-control valid" />
              </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Choose cover image</label>
                <div className="fil-img-uplo">
                <span className="dumfil">Upload a file</span>
                <input type="file" name="cover_image" accept="image/*,.jpg,.jpeg,.png" className="form-control valid" />
              </div>
              </div>
            </div>
          </div>
          {/*FILED END*/}
          {/*FILED START*/}
         
          <div className="row bor-box">
          <div className="col-md-12">
            <div className="form-group">
              <label >Enter your service locations... 
                (i.e) London, Dallas, Wall Street, Opera House</label>
              <textarea
                value={formData.service_location}
                onChange={handleInputChange}
               className="form-control valid" id="service_locations" name="service_location" placeholder="Enter your service locations... 
        (i.e) London, Dallas, Wall Street, Opera House"  />
            </div>
          </div>
        </div>
        <button type="submit" onClick={()=>handleStepClick(2)} name="listing_submit" className="btn btn-primary">Next</button>

        </div>
          {/*FILED END*/}
        </div>
      </div>
  </div>
  )
}

export default Step1
