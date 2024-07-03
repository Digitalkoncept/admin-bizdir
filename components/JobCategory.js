import React, { useState, useEffect, useRef } from "react";

const JobCategory = ({ formData, setFormData, category,setTask,task }) => {
  const [subcategory, setSubCategory] = useState();
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const [select, setSelect] = useState({
    num: null,
    isVisible: false,
  });
  const [searchcat, setSearchCat] = useState({
    _id: "",
    keyword: "",
    value: "",
  });
  const [searchsubcat,setSearchSubCat] = useState({
    _id:"",
    keyword:"",
    value:""
  });
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !divRef1.current.contains(event.target) &&
        !divRef2.current.contains(event.target) 
        ) {
        setSelect((prevState) => ({
          ...prevState,
          isVisible: false,
        }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (num) => {
    setSelect((prevState) => ({
      num: num,
      isVisible: !prevState.isVisible,
    }));
  };

  const handleInputChange = (e, number) => {
    const { name, value } = e.target;
    console.log("job_subcategories =>", subcategory);
    console.log("task =>", task);
    console.log("formData =>", formData);
    if (number === 1) {
      setSearchCat((prevState) => ({
        ...prevState,
        keyword: value,
      }));
    } else if (number === 2) {
        setSearchSubCat((prevState) => ({
          ...prevState,
          keyword: value,
      }));
    }
    setSelect((prevState) => ({
      ...prevState,
      isVisible: true,
    }));
  };
  const handleOptionClick = (option, number) => {
    if (number === 1) {
      setFormData((prevState) => ({
        ...prevState,
        job_category: option.name,
      }));
      setSubCategory(option.job_subcategories);
    } else if (number === 2) {
      setFormData((prevState) => ({
        ...prevState,
        job_subcategory: option.name,
      }));
      setTask(option.tasks)
      
    }
    setSelect((prevState) => ({
      ...prevState,
      isVisible: false,
    }));
  };
  const filteredcategory = category?.filter((option) =>
    option.name.toLowerCase().includes(searchcat.keyword.toLowerCase())
  );
  const filteredsubcategory = subcategory?.filter((option) =>
  option.name.toLowerCase().includes(searchsubcat.keyword.toLowerCase()));
  return (
    <>
    <tr >
      <td className="col-md-4">Job Category</td>
      <td>
        <div className="col-md-6 ml-0">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 1 && select.isVisible ? "chosen-with-drop" : ""
              } chosen-container-active !w-[300px]`}
              alt=""
              ref={divRef1}
              id="emp_id_chosen"
              style={{ width: 305 }}
            >
              <a className="chosen-single" onClick={() => handleClick(1)}>
                <span>
                  {formData.job_category.length > 0
                    ? formData.job_category
                    : "select category"}
                </span>
                <div>
                  <b />
                </div>
              </a>
              <div className="chosen-drop">
                <div className="chosen-search">
                  <input
                    className="chosen-search-input valid"
                    type="text"
                    name="state"
                    autoComplete="off"
                    value={searchcat.keyword}
                    onChange={(e) => handleInputChange(e, 1)}
                  />
                </div>
                <ul className="chosen-results">
                  {filteredcategory?.map((option) => (
                    <li
                      key={option._id}
                      onClick={() => handleOptionClick(option, 1)}
                      className="active-result"
                      data-option-array-index={1}
                    >
                      {option.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td>Select Job</td>
      <td>
        <div className="col-md-6 ml-0">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 2 && select.isVisible ? "chosen-with-drop" : ""
              } chosen-container-active !w-[300px]`}
              alt=""
              ref={divRef2}
              id="subcat_id_chosen"
              style={{ width: 305 }}
            >
              <a className="chosen-single" onClick={() => handleClick(2)}>
                <span>
                  {formData.job_subcategory.length > 0
                    ? formData.job_subcategory
                    : "select job"}
                </span>
                <div>
                  <b />
                </div>
              </a>
              <div className="chosen-drop">
                <div className="chosen-search">
                  <input
                    className="chosen-search-input valid"
                    type="text"
                    name="state"
                    autoComplete="off"
                    value={searchsubcat.keyword}
                    onChange={(e) => handleInputChange(e, 2)}
                  />
                </div>
                <ul className="chosen-results">
                  {filteredsubcategory?.map((option) => (
                    <li
                      key={option._id}
                      onClick={() => handleOptionClick(option, 2)}
                      className="active-result"
                      data-option-array-index={1}
                    >
                      {option.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
    </>
  );
};

export default JobCategory;
