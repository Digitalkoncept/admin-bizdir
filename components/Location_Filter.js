import React, { useState, useRef, useEffect } from "react";
import { GetAllstates,GetCityByState,GetAreaByCity,GET_ALL_CATEGORY } from "@/lib/query";
import { client } from "@/lib/apollo";
const Location_Filter = ({formData,InputChange,setFormData}) => {
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  const divRef4 = useRef(null);
  const divRef5 = useRef(null);
  const cityRef = useRef(null);
  const areaRef = useRef(null);
  const subcategoryRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !divRef1.current.contains(event.target) &&
        !divRef2.current.contains(event.target) &&
        !divRef3.current.contains(event.target) && 
        !divRef4.current.contains(event.target) &&
        !divRef5.current.contains(event.target) 
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
              throw new Error('Failed to fetch category.')
            }
            const mappedcategory = await getAllCategories?.categories?.map(cat =>({_id:cat._id,name:cat.category_name,subcategory:cat.subcategory}))
            setCategory(mappedcategory);
        } catch (error) {
            console.error('something went wrong:', error);
        }
       
    
    };
    fetchData();
  }, [searchState,searchCity]);
  console.log("all fetched category =>",category)
  const country = ["India","Usa"]

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
    if (number === 1) {
      setSearchState((prevState) => ({
          ...prevState,
          keyword: e.target.value,
      }));
  }
   else if (number === 2) {
      setSearchCity((prevState) => ({
        ...prevState,
        keyword: e.target.value,
    }));
    }
    else if (number === 3) {
      setSearchArea((prevState) => ({
        ...prevState,
        keyword: e.target.value,
    }));
    }
    else if(number === 4){
      setSearchCat(e.target.value);
    } else if (number === 4){
      setSearchSubCat(e.target.value); 
    }
    setSelect((prevState) => ({
        ...prevState,
        isVisible: true
      }));
    console.log(select.num)
  };
  const handleOptionClick = (option,number) => {
    if(number === 1){
      setFormData(prevState =>({
        ...prevState,
        state:option.name
    }));
    setSearchState((prevState) => ({
      ...prevState,
      _id:option._id,
      value: option.name,
  }));
    }
    else if(number=== 2){
    setFormData((prevFormData) => ({
      ...prevFormData,
      cities:[...prevFormData?.cities,option.name],
    }));
    setSearchCity((prevState) => ({
      ...prevState,
      _id:option._id,
      value: option.name,
  }));
  if(option.name){
    cityRef.current.focus();
  }
  console.log(formData)
    }
   else if(number=== 3){
      setFormData((prevState) => ({
        ...prevState,
        areas:[...prevState?.areas,option.name],
      }));
      setSearchArea((prevState) => ({
        ...prevState,
        _id:option._id,
        value: option.name,
    }));
    if(option.name){
      areaRef.current.focus();
    }
      }
    else if(number === 4){
      setFormData(prevState =>({
        ...prevState,
        category:option.name
    }));
    setSubCategory(option.subcategory)
    } else if (number === 5){
      setFormData((prevFormData) => ({
        ...prevFormData,
        subcategory:[...prevFormData.subcategory,option],
      }));
      if(option){
        subcategoryRef.current.focus();
      }
    }
  
    setSelect((prevState) => ({
        ...prevState,
        isVisible: false
      }));
  };
 
  // useEffect(() => {
  //   if (formData.cities?.length > 0 ) {
  //     cityRef.current.focus();
  //   }else if (formData.areas?.length > 0) {
  //     areaRef.current.focus();
  //   }
  //    else if (formData.subcategory?.length > 0) {
  //     subcategoryRef.current.focus();
  //   }
  // }, [formData.cities,formData.areas,formData.subcategory]);
  const handleKeyPress = (e,number) => {
    if (number === 2 && e.key === "Backspace" && searchCity.keyword === "") {
      setFormData(prevState => ({
        ...prevState,
        cities: prevState.cities.slice(0, -1) // Remove the last index value
      }));
    }else if (number === 3 && e.key === "Backspace" && searchArea.keyword === "") {
      setFormData(prevState => ({
        ...prevState,
        areas: prevState.areas.slice(0, -1) // Remove the last index value
      }));
      console.log("backspace working")
    }
     else if (number === 5 && e.key === "Backspace" && searchSubCat === "") {
      setFormData(prevState => ({
        ...prevState,
        subcategory: prevState.subcategory.slice(0, -1) // Remove the last index value
      }));
    }
  };

  const handleRemove = (index, number) => {
    if (number === 2) {
      setFormData((prevState) => {
        const updatedValue = [...prevState.cities]; // Create a copy of the current array
        updatedValue.splice(index, 1); // Remove the item at the specified index
        return {
          ...prevState,
          cities: updatedValue, // Update the state with the modified array
        };
      });
      if(formData.cities.length > 0 ){
        cityRef.current.focus();
      }
    }if (number === 3) {
      setFormData((prevState) => {
        const updatedValue = [...prevState.areas]; // Create a copy of the current array
        updatedValue.splice(index, 1); // Remove the item at the specified index
        return {
          ...prevState,
          areas: updatedValue, // Update the state with the modified array
        };
      });
      if(formData.areas.length > 0 ){
        areaRef.current.focus();
      }
    }
     else if (number === 5) {
      setFormData((prevState) => {
        const updatedValue = [...prevState.subcategory]; // Create a copy of the current array
        updatedValue.splice(index, 1); // Remove the item at the specified index
        return {
          ...prevState,
          subcategory: updatedValue, // Update the state with the modified array
        };
      });
      if(formData.subcategory.length > 0 ){
        subcategoryRef.current.focus();
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
  option.toLowerCase().includes(searchSubCat.toLowerCase())
).filter(option =>
  !formData.subcategory?.includes(option)
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
                    autoComplete="off"
                    value={searchState.keyword}
                    onChange={(e)=>handleInputChange(e,1)}
                  />
                </div>
                <ul className="chosen-results">
                  <li className="active-result" data-option-array-index={0}>
                    Select Category
                  </li>
                  {filteredstate?.map(option =>(
                  <li key={option._id} onClick={() => handleOptionClick(option,1)}  className="active-result" data-option-array-index={1}>
                    {option.name}
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
                select.num === 2 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              ref={divRef2}
              alt=""
              id="city_id_chosen"
              style={{ width: 640 }}
            >
              <ul className="chosen-choices">

              {formData.cities?.length > 0 &&
                formData.cities.map((option, index) => {
                  return (
                    <li key={index} className="search-choice">
                      <span>{option}</span>
                      <a onClick={() => handleRemove(index,2)} className="search-choice-close" data-option-array-index={0} />
                    </li>
                  );
                })}

                <li className="search-field">
                  <input
                    ref={cityRef}
                    onKeyUp={(e)=>handleKeyPress(e,2)}
                    onClick={() => handleClick(2)}
                    className="chosen-search-input default"
                    onChange={(e)=>handleInputChange(e,2)}
                    style={{
                      width: formData.cities?.length > 0 ? "33px!important" : "137.062px"
                    }}
                    value={searchCity.keyword}
                    type="text"
                    autoComplete="off"
                    placeholder="Select your Cities"
                  />
                </li>
              </ul>
              <div className="chosen-drop">
                <ul className="chosen-results">
                  {searchState.value.length > 0 ? (<>
                    {filteredcity?.map((option,index)=>(
                  <li  className="active-result" key={index}  onClick={() => handleOptionClick(option,2)} data-option-array-index={0}>
                    {option.name}
                  </li>
                  ))}
                  </>
                  ):(
                    <li className="no-results">
                    please select any state 
                    </li>
                  )}
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
              ref={divRef3}
              alt=""
              id="area_id_chosen"
              style={{ width: 640 }}
            >
              <ul className="chosen-choices">

              {formData.areas?.length > 0 &&
                formData.areas.map((option, index) => {
                  return (
                    <li key={index} className="search-choice">
                      <span>{option}</span>
                      <a onClick={() => handleRemove(index,3)} className="search-choice-close" data-option-array-index={0} />
                    </li>
                  );
                })}

                <li className="search-field">
                  <input
                    ref={areaRef}
                    onKeyUp={(e)=>handleKeyPress(e,3)}
                    onClick={() => handleClick(3)}
                    className="chosen-search-input default"
                    onChange={(e)=>handleInputChange(e,3)}
                    style={{
                      width: formData.areas?.length > 0 ? "33px!important" : "137.062px"
                    }}
                    value={searchArea.keyword}
                    type="text"
                    autoComplete="off"
                    placeholder="Select your area"
                  />
                </li>
              </ul>
              <div className="chosen-drop">
                <ul className="chosen-results">
                  {searchCity.value.length > 0 ? (<>
                    {filteredarea?.map((option,index)=>(
                  <li  className="active-result" key={index}  onClick={() => handleOptionClick(option,3)} data-option-array-index={0}>
                    {option.name}
                  </li>
                  ))}
                  </>
                  ):(
                    <li className="no-results">
                    please select any city 
                    </li>
                  )}
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
                select.num === 4 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              alt=""
              ref={divRef4}
              id="category_id_chosen"
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
                    value={searchCat}
                    onChange={(e)=>handleInputChange(e,4)}
                  />
                </div>
                <ul className="chosen-results">
                  <li className="active-result" data-option-array-index={0}>
                    Select Category
                  </li>
                  {filteredcat?.map(option =>(
                  <li key={option._id} onClick={() => handleOptionClick(option,4)}  className="active-result" data-option-array-index={1}>
                    {option.name}
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
                select.num === 5 && select.isVisible
                  ? "chosen-with-drop"
                  : ""
              } chosen-container-active`}
              alt=""
              ref={divRef5}
              id="city_id_chosen"
              style={{ width: 640 }}
            >
              <ul className="chosen-choices">
              {formData?.subcategory?.length > 0 &&
                formData?.subcategory.map((option, index) => {
                  return (
                    <li key={index} className="search-choice">
                      <span>{option}</span>
                      <a onClick={() => handleRemove(index,5)} className="search-choice-close" data-option-array-index={0} />
                    </li>
                  );
                })}
                <li className="search-field">
                  <input
                    className="chosen-search-input default"
                    type="text"
                    ref={subcategoryRef}
                    onKeyUp={(e)=>handleKeyPress(e,5)}
                    onClick={() => handleClick(5)}
                    onChange={(e)=>handleInputChange(e,5)}
                    style={{
                      width: formData.subcategory?.length > 0 ? "33px!important" : "137.062px"
                    }}
                    value={searchSubCat}
                    autoComplete="off"
                    placeholder="select sub category"
                  />
                </li>
              </ul>
              <div className="chosen-drop">
                <ul className="chosen-results">
                  {filteredsubcat?.map(option =>(
                  <li key={option} onClick={() => handleOptionClick(option,5)}  className="active-result" data-option-array-index={0}>
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
