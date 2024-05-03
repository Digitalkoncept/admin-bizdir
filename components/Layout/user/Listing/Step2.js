import React, { useState } from "react";

const Step2 = ({
  formData,
  handleInputChange,
  handleStepClick,
  setFormData,
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
                          value={formData.service_provided[index]?.name || ""}
                          onChange={(e) => handleInputChange(e, index)}
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
            <div class="row">
              <div className="col-md-6">
                <button
                  onClick={() => handleStepClick(1)}
                  type="button"
                  className="btn btn-primary"
                >
                  Previous
                </button>
              </div>
              <div className="col-md-6">
                <button
                  onClick={() => handleStepClick(3)}
                  type="button"
                  className="btn btn-primary"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
