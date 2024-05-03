import React, { useState, useRef, useEffect } from "react";

const Location_Filter = ({formData,InputChange,setFormData}) => {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !divRef1.current.contains(event.target) &&
        !divRef2.current.contains(event.target) &&
        !divRef3.current.contains(event.target)
      ) {
        setSelect((prevState) => ({
          ...prevState,
          isVisible: false
        }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    
  }, []);
 
  const country = ["India","Usa"]
  const cities = ["Chennai", "Delhi", "Mumbai","Kolkata","Jaipur"];
  const category = [
    'Restaurants',
    'Wedding halls',
    'Pet shop',
    'Technology',
    'Spa and Facial',
    'Real Estate',
    'Sports',
    'Education',
    'Electricals',
    'Automobiles',
    'Transportation',
    'Hospitals'
  ];
  const subcategory = ["Beach House","Party Halls","Wedding Halls"];
  const [select, setSelect] = useState({
    num: null,
    isVisible: false
  });

   const [searchCity, setSearchCity] = useState('');
  const [searchCat, setSearchCat] = useState('');
  const [searchSubCat, setSearchSubCat] = useState('');
  const handleClick = (num) => {
    setSelect((prevState) => ({
      num: num,
      isVisible: !prevState.isVisible
    }));
    
  };
  const handleInputChange = (e,number) => {
    if (number === 1) {
      setSearchCity(e.target.value);
    }
    else if(number === 2){
      setSearchCat(e.target.value);
    } else if (number === 3){
      setSearchSubCat(e.target.value); 
    }
    setSelect((prevState) => ({
        ...prevState,
        isVisible: true
      }));
    console.log(select.num)
  };
  const handleOptionClick = (option,number) => {
    if(number=== 1){
    setFormData((prevFormData) => ({
      ...prevFormData,
      cities:[...prevFormData.cities,option],
    }));
    console.log(searchCity)
    }else if(number === 2){
      setFormData(prevState =>({
        ...prevState,
        category:option
    }));
    } else if (number === 3){
      setFormData((prevFormData) => ({
        ...prevFormData,
        sub_category:[...prevFormData.sub_category,option],
      }));
    }
  
    setSelect((prevState) => ({
        ...prevState,
        isVisible: false
      }));
  };
  const cityRef = useRef(null);
  const subcategoryRef = useRef(null);
  useEffect(() => {
    if (formData.cities.length > 0) {
      cityRef.current.focus();
    } else if (formData.sub_category.length > 0) {
      subcategoryRef.current.focus();
    }
  }, [formData.cities,formData.sub_category]);
  const handleKeyPress = (e,number) => {
    if (number === 1 && e.key === "Backspace" && searchCity === "") {
      setFormData(prevState => ({
        ...prevState,
        cities: prevState.cities.slice(0, -1) // Remove the last index value
      }));
    } else if (number === 2 && e.key === "Backspace" && searchSubCat === "") {
      setFormData(prevState => ({
        ...prevState,
        sub_category: prevState.sub_category.slice(0, -1) // Remove the last index value
      }));
    }
  };

  const handleRemove = (index, number) => {
    if (number === 1) {
      setFormData((prevState) => {
        const updatedValue = [...prevState.cities]; // Create a copy of the current array
        updatedValue.splice(index, 1); // Remove the item at the specified index
        return {
          ...prevState,
          cities: updatedValue, // Update the state with the modified array
        };
      });
    } else if (number === 3) {
      setFormData((prevState) => {
        const updatedValue = [...prevState.sub_category]; // Create a copy of the current array
        updatedValue.splice(index, 1); // Remove the item at the specified index
        return {
          ...prevState,
          sub_category: updatedValue, // Update the state with the modified array
        };
      });
    }
  };
  
  
  const filteredcity = cities.filter(option =>
    option.toLowerCase().includes(searchCity.toLowerCase())
  ).filter(option =>
    !formData.cities.includes(option)
  );
  const filteredcat = category.filter(option =>
    option.toLowerCase().includes(searchCat.toLowerCase())
);
const filteredsubcat = subcategory.filter(option =>
  option.toLowerCase().includes(searchSubCat.toLowerCase())
).filter(option =>
  !formData.sub_category.includes(option)
);

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <select name="country" required="required" onChange={InputChange} value={formData.country}  className="form-control">
              <option value>Select your Country</option>
              {country.map((option,index)=>(
                <option key={index}  value={option}>{option}</option>
              ))}
              
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-multi ${
                select.num === 1 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              ref={divRef1}
              alt=""
              id="city_id_chosen"
              style={{ width: 640 }}
            >
              <ul className="chosen-choices">

              {formData.cities.length > 0 &&
                formData.cities.map((option, index) => {
                  return (
                    <li key={index} className="search-choice">
                      <span>{option}</span>
                      <a onClick={() => handleRemove(index,1)} className="search-choice-close" data-option-array-index={0} />
                    </li>
                  );
                })}

                <li className="search-field">
                  <input
                    ref={cityRef}
                    onKeyUp={(e)=>handleKeyPress(e,1)}
                    onClick={() => handleClick(1)}
                    className="chosen-search-input default"
                    onChange={(e)=>handleInputChange(e,1)}
                    style={{
                      width: formData.cities.length > 0 ? "33px!important" : "137.062px"
                    }}
                    value={searchCity}
                    type="text"
                    autoComplete="off"
                    placeholder="Select your Cities"
                  />
                </li>
              </ul>
              <div className="chosen-drop">
                <ul className="chosen-results">
                  {filteredcity.map((option,index)=>(
                  <li  className="active-result" key={index}  onClick={() => handleOptionClick(option,1)} data-option-array-index={0}>
                    {option}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 2 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              alt=""
              ref={divRef2}
              id="category_id_chosen"
              style={{ width: 305 }}
            >
              <a className="chosen-single" onClick={() => handleClick(2)}>
              <span>{formData?.category?.length > 0 ? formData.category:'Select Category' }</span>
                <div>
                  <b />
                </div>
              </a>
              <div className="chosen-drop">
                <div className="chosen-search">
                  <input
                    className="chosen-search-input valid"
                    type="text"
                    autoComplete="off"
                    value={searchCat}
                    onChange={(e)=>handleInputChange(e,2)}
                  />
                </div>
                <ul className="chosen-results">
                  <li className="active-result" data-option-array-index={0}>
                    Select Category
                  </li>
                  {filteredcat.map(option =>(
                  <li key={option} onClick={() => handleOptionClick(option,2)}  className="active-result" data-option-array-index={1}>
                    {option}
                  </li>
                  ))}
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-multi ${
                select.num === 3 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              alt=""
              ref={divRef3}
              id="city_id_chosen"
              style={{ width: 640 }}
            >
              <ul className="chosen-choices">
              {formData?.sub_category.length > 0 &&
                formData?.sub_category.map((option, index) => {
                  return (
                    <li key={index} className="search-choice">
                      <span>{option}</span>
                      <a onClick={() => handleRemove(index,3)} className="search-choice-close" data-option-array-index={0} />
                    </li>
                  );
                })}
                <li className="search-field">
                  <input
                    className="chosen-search-input default"
                    type="text"
                    ref={subcategoryRef}
                    onKeyUp={(e)=>handleKeyPress(e,2)}
                    onClick={() => handleClick(3)}
                    onChange={(e)=>handleInputChange(e,3)}
                    style={{
                      width: formData.sub_category.length > 0 ? "33px!important" : "137.062px"
                    }}
                    value={searchSubCat}
                    autoComplete="off"
                    placeholder="select sub category"
                  />
                </li>
              </ul>
              <div className="chosen-drop">
                <ul className="chosen-results">
                  {filteredsubcat.map(option =>(
                  <li key={option} onClick={() => handleOptionClick(option,3)}  className="active-result" data-option-array-index={0}>
                    {option}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location_Filter;
