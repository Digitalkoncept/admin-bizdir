import React,{useState,useEffect,useRef} from 'react'

const JobCategory = () => {
    const divRef1 = useRef(null);
    const [select, setSelect] = useState({
        num: null,
        isVisible: false,
      });
      const [searchType, setSearchType] = useState({
        _id: "",
        keyword: "",
        value: "",
      });
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            !divRef1.current.contains(event.target)
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

 const jobs = ['Listings','Coupons'];
 const filteredjobs = jobs?.filter((option) =>
    option.toLowerCase().includes(searchType.keyword.toLowerCase())
  );    
  return (
    <div>
      
    </div>
  )
}

export default JobCategory
