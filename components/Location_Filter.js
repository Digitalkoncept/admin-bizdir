import React, { useState, useRef, useEffect } from "react";
import { GetAllstates,GetCityByState,GetAreaByCity,GET_ALL_CATEGORY } from "@/lib/query";
import { client } from "@/lib/apollo";
const Location_Filter = ({formData,InputChange,setFormData,errors,setErrors}) => {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  const divRef4 = useRef(null);
  const divRef5 = useRef(null);
  const divRef6 = useRef(null);
  
  const tagRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !divRef1.current.contains(event.target) &&
        !divRef2.current.contains(event.target) &&
        !divRef3.current.contains(event.target) && 
        !divRef4.current.contains(event.target) &&
        !divRef5.current.contains(event.target) &&
        !divRef6.current.contains(event.target)  
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
  const [state,setState] = useState();
  const [city,setCity] = useState();
  const [area,setArea] = useState();
  const [category,setCategory] = useState();
  const [subcategory,setSubCategory] = useState();
  const [tags,setTags] = useState();

  const [searchState, setSearchState] = useState({
    _id:'',
    type:'',
    keyword: "",
    value: '',
});
const [searchCity, setSearchCity] = useState({
    _id:'',
    keyword: "",
    value: '',
});
const [searchArea, setSearchArea] = useState({
  _id:'',
  keyword: "",
  value: '',
});
const [searchCat, setSearchCat] = useState('');
const [searchSubCat, setSearchSubCat] = useState('');
const [searchtag, setSearchSubTag] = useState('');


  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await client.query({query:GetAllstates})
            const {getAllStates} =await res.data;
            if(getAllStates.code !== 200){
                throw new Error('Failed to fetch states');
            }
            const mappedstate =await getAllStates?.states?.map(state =>({_id:state._id,name:state.name}))
            setState(mappedstate);
            if(searchState._id){
                const res1 =await client.query({
                    query: GetCityByState,
                    variables: { getCityByStateId: searchState._id }
                  });
                  const {getCityByState} =await res1.data;
                  if(getCityByState.code !== 200){
                    throw new Error('Failed to fetch city');
                }
                const mappedcity =await getCityByState?.cities?.map(city =>({_id:city._id,name:city.name}))
                setCity(mappedcity);
            }
            if(searchCity._id){
                const res2 =await client.query({
                    query: GetAreaByCity,
                    variables: { cityId: searchCity._id }
                  });
                  const {getAreasByCity} =await res2.data; 
                  if(getAreasByCity.code !== 200){
                    throw new Error('Failed to fetch area');
                }
            const mappedarea = await getAreasByCity?.areas?.map(area =>({_id:area._id,name:area.name}))
            setArea(mappedarea);
            }
            const res3 = await client.query({query:GET_ALL_CATEGORY})
            const {getAllCategories} = await res3.data;
            if(getAllCategories.code !== 200){
              throw new Error('Failed to fetch Category.')
            }
            const mappedcategory = await getAllCategories?.categories?.map(item =>({_id:item._id,name:item.category_name,subcategory:item.subcategories}))
            setCategory(mappedcategory);
        } catch (error) {
            console.error('something went wrong:', error);
        }
       
    
    };
    fetchData();
  }, [searchState,searchCity]);
  
  const country = ["India"]

  const [select, setSelect] = useState({
    num: null,
    isVisible: false
  });

   
  const handleClick = (num) => {
    setSelect((prevState) => ({
      num: num,
      isVisible: !prevState.isVisible
    }));
    
  };
  const handleInputChange = (e,number) => {
    const { name, value } = e.target;
    if (number === 1) {
      setSearchState((prevState) => ({
          ...prevState,
          keyword: value,
      }));
  }
   else if (number === 2) {
      setSearchCity((prevState) => ({
        ...prevState,
        keyword: value,
    }));
    }
    else if (number === 3) {
      setSearchArea((prevState) => ({
        ...prevState,
        keyword: value,
    }));
    }
    else if(number === 4){
      setSearchCat(value); 
    } else if (number === 5){
      setSearchSubCat(value)
    }
    else if (number ===6){
      setSearchSubTag(value)
    }
    setSelect((prevState) => ({
        ...prevState,
        isVisible: true
      }));
      if (value) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }));
      }
    console.log(formData)
  };
  const handleOptionClick = (option,number) => {
    if(number === 1){
      setFormData(prevState =>({
        ...prevState,
        state:option.name
    }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        state: '',
      }));
   
    setSearchState((prevState) => ({
      ...prevState,
      _id:option._id,
      value: option.name,
  }));
    }
    else if(number=== 2){
    setFormData((prevState) => ({
      ...prevState,
      city:option.name,
    }));
    setSearchCity((prevState) => ({
      ...prevState,
      _id:option._id,
      value: option.name,
  }));
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      city: '',
    }));

  console.log(formData)
    }
   else if(number=== 3){
      setFormData((prevState) => ({
        ...prevState,
        area:option.name
      }));
      setSearchArea((prevState) => ({
        ...prevState,
        _id:option._id,
        value: option.name,
    }));
    
      setErrors((prevErrors) => ({
        ...prevErrors,
        area: '',
      }));
    
      }else if(number === 4){
        setFormData(prevState =>({
          ...prevState,
          category:option.name
      }));
      setSubCategory(option.subcategory)
      setErrors((prevErrors) => ({
        ...prevErrors,
        category: '',
      }));
      } 
    else if(number === 5){
      setFormData(prevState =>({
        ...prevState,
        subcategory:option.subcategory_name
    }));
    setTags(option.tags)
      setErrors((prevErrors) => ({
        ...prevErrors,
        subcategory: '',
      }));
    
    } else if (number === 6){
      setFormData((prevFormData) => ({
        ...prevFormData,
        tags:[...prevFormData.tags,option],
      }));
      if(option){
        tagRef.current.focus();
      }
    }
  
    setSelect((prevState) => ({
        ...prevState,
        isVisible: false
      }));
  };
 
  
  const handleKeyPress = (e,number) => {
   
     if (number === 6 && e.key === "Backspace" && searchtag === "") {
      setFormData(prevState => ({
        ...prevState,
        tags: prevState.tags.slice(0, -1) // Remove the last index value
      }));
    }
  };

  const handleRemove = (index, number) => {
    
      if (number === 6) {
      setFormData((prevState) => {
        const updatedValue = [...prevState.tags]; // Create a copy of the current array
        updatedValue.splice(index, 1); // Remove the item at the specified index
        return {
          ...prevState,
          tags: updatedValue, // Update the state with the modified array
        };
      });
      if(formData.tags.length > 0 ){
        tagRef.current.focus();
      }
    }
  };
  
  const filteredstate = state?.filter((option) =>
    option.name.toLowerCase().includes(searchState.keyword.toLowerCase())
);
  const filteredcity = city?.filter(option =>
    option.name.toLowerCase().includes(searchCity.keyword.toLowerCase())
  ).filter(option =>
    !formData.cities?.includes(option.name)
  );
  const filteredarea = area?.filter(option =>
    option.name.toLowerCase().includes(searchArea.keyword.toLowerCase())
  ).filter(option =>
    !formData.areas?.includes(option.name)
  );
  
  const filteredcat = category?.filter(option =>
    option.name.toLowerCase().includes(searchCat.toLowerCase())
);
const filteredsubcat = subcategory?.filter(option =>
  option.subcategory_name.toLowerCase().includes(searchSubCat.toLowerCase())
);
const filteredtags = tags?.filter(option =>
  option.toLowerCase().includes(searchtag.toLowerCase())
).filter(option =>
  !formData.tags?.includes(option)
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
            {errors.country && (
          <label htmlFor="country" className="error">
            {errors.country}
          </label>
        )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 1 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              alt=""
              ref={divRef1}
              id="state_id_chosen"
              style={{ width: 305 }}
            >
              <a className="chosen-single" onClick={() => handleClick(1)}>
              <span>{formData?.state?.length > 0 ? formData.state:'Select State' }</span>
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
                    value={searchState.keyword}
                    onChange={(e)=>handleInputChange(e,1)}
                  />
                </div>
                <ul className="chosen-results">
                  <li className="active-result" data-option-array-index={0}>
                    Select State
                  </li>
                  {filteredstate?.map(option =>(
                  <li key={option._id} onClick={() => handleOptionClick(option,1)}  className="active-result" data-option-array-index={1}>
                    {option.name}
                  </li>
                  ))}
                 
                </ul>
              </div>
            </div>
            {errors.state && (
          <label htmlFor="state" className="error">
            {errors.state}
          </label>
        )}
          </div>
        </div>
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
              id="city_id_chosen"
              style={{ width: 305 }}
            >
              <a className="chosen-single" onClick={() => handleClick(2)}>
              <span>{formData?.city?.length > 0 ? formData.city:'Select City' }</span>
                <div>
                  <b />
                </div>
              </a>
              <div className="chosen-drop">
                <div className="chosen-search">
                  <input
                    className="chosen-search-input valid"
                    type="text"
                    name="city"
                    autoComplete="off"
                    value={searchCity.keyword}
                    onChange={(e)=>handleInputChange(e,2)}
                  />
                </div>
                <ul className="chosen-results">
                  {searchState.value.length > 0 ? (
                    <>
                    {filteredcity?.map(option =>(
                  <li key={option._id} onClick={() => handleOptionClick(option,2)}  className="active-result" data-option-array-index={1}>
                    {option.name}
                  </li>
                  ))}
                    </>
                  ):(
                    <li className="no-results">
                    please select any state first 
                    </li>
                  )}
                  
                 
                </ul>
              </div>
            </div>
            {errors.city && (
          <label htmlFor="city" className="error">
            {errors.city}
          </label>
        )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 3 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              alt=""
              ref={divRef3}
              id="area_id_chosen"
              style={{ width: 305 }}
            >
              <a className="chosen-single" onClick={() => handleClick(3)}>
              <span>{formData?.area?.length > 0 ? formData.area:'Select Area' }</span>
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
                    name="area"
                    value={searchArea.keyword}
                    onChange={(e)=>handleInputChange(e,3)}
                  />
                </div>
                <ul className="chosen-results">
                  {searchCity.value.length > 0 ? (<>
                    {filteredarea?.map(option =>(
                  <li key={option._id} onClick={() => handleOptionClick(option,3)}  className="active-result" data-option-array-index={1}>
                    {option.name}
                  </li>
                  ))}
                  </>):(
                     <li className="no-results">
                     please select any city first 
                     </li>
                  )}
                 
                 
                </ul>
              </div>
            </div>
            {errors.area && (
          <label htmlFor="area" className="error">
            {errors.area}
          </label>
        )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 4 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              alt=""
              ref={divRef4}
              id="service_id_chosen"
              style={{ width: 305 }}
            >
              <a className="chosen-single" onClick={() => handleClick(4)}>
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
                    name="category"
                    value={searchCat}
                    onChange={(e)=>handleInputChange(e,4)}
                  />
                </div>
                <ul className="chosen-results">
                  {filteredcat?.map(option =>(
                  <li key={option._id} onClick={() => handleOptionClick(option,4)}  className="active-result" data-option-array-index={1}>
                    {option.name}
                  </li>
                  ))}
                 
                </ul>
              </div>
            </div>
            {errors.category && (
          <label htmlFor="category" className="error">
            {errors.category}
          </label>
        )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-single ${
                select.num === 5 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              alt=""
              ref={divRef5}
              id="category_id_chosen"
              style={{ width: 305 }}
            >
              <a className="chosen-single" onClick={() => handleClick(5)}>
              <span>{formData?.subcategory?.length > 0 ? formData.subcategory:'Select Sub-Category' }</span>
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
                    name="category"
                    value={searchSubCat}
                    onChange={(e)=>handleInputChange(e,5)}
                  />
                </div>
                <ul className="chosen-results">
                  {filteredsubcat?.map(option =>(
                  <li key={option._id} onClick={() => handleOptionClick(option,5)}  className="active-result" data-option-array-index={1}>
                    {option.subcategory_name}
                  </li>
                  ))}
                 
                </ul>
              </div>
            </div>
            {errors.subcategory && (
          <label htmlFor="subcategory" className="error">
            {errors.subcategory}
          </label>
        )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div
              className={`chosen-container chosen-container-multi ${
                select.num === 6 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              alt=""
              ref={divRef6}
              id="city_id_chosen"
              style={{ width: 640 }}
            >
              <ul className="chosen-choices">
              {formData?.tags?.length > 0 &&
                formData?.tags.map((option, index) => {
                  return (
                    <li key={index} className="search-choice">
                      <span>{option}</span>
                      <a onClick={() => handleRemove(index,6)} className="search-choice-close" data-option-array-index={0} />
                    </li>
                  );
                })}
                <li className="search-field">
                  <input
                    className="chosen-search-input default"
                    type="text"
                    ref={tagRef}
                    onKeyUp={(e)=>handleKeyPress(e,6)}
                    onClick={() => handleClick(6)}
                    onChange={(e)=>handleInputChange(e,6)}
                    style={{
                      width: formData.tags?.length > 0 ? "33px!important" : "137.062px"
                    }}
                    value={searchtag}
                    autoComplete="off"
                    placeholder="select tags"
                  />
                </li>
              </ul>
              <div className="chosen-drop">
                <ul className="chosen-results">
                  {filteredtags?.map(option =>(
                  <li key={option} onClick={() => handleOptionClick(option,6)}  className="active-result" data-option-array-index={0}>
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
