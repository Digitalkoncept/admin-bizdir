import React, { useState } from "react";

const Step5 = ({
  formData,
  handleInputChange,
  setFormData,
  handleStepClick,
}) => {
  const [inputCount, setInputCount] = useState(1);
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
  return (
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
                      <i className="material-icons">arrow_forward</i>
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
                      <i className="material-icons">arrow_forward</i>
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
                      <i className="material-icons">arrow_forward</i>
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
                      <i className="material-icons">arrow_forward</i>
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
  );
};

export default Step5;
