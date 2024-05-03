import React, { useState, useRef, useEffect } from "react";

const Listing_Filter = () => {
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
                    isVisible: false,
                }));
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const category = [
        "All Services",
        "Service Experts",
        "Jobs",
        "Explore Travel",
        "News & Magazines",
        "Events",
        "Products",
        "Coupon & deals",
        "Blogs",
    ];
    const location = [
        "Select City",
        "New York",
        "Illunois city",
        "Seattle",
        "Atlanta",
        "Chennai",
        "Chennai 2",
    ];
    const services = [
        "What are you looking for?",
        "Automobiles",
        "Technology",
        "Electricals",
        "Education",
        "Sports",
        "Real Estate",
        "Wedding halls",
        "Hospitals",
        "Pet shop",
        "Restaurants",
        "Spa and Facial",
        "Transportation",
    ];

    const [select, setSelect] = useState({
        num: null,
        isVisible: false,
    });
    const [searchCat, setSearchCat] = useState({
        keyword: "",
        value: null,
    });
    const [searchLocation, setSearchLocation] = useState({
        keyword: "",
        value: null,
    });
    const [searchService, setSearchService] = useState({
        keyword: "",
        value: null,
    });
    const handleClick = (num) => {
        setSelect((prevState) => ({
            num: num,
            isVisible: !prevState.isVisible,
        }));
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const handleInputChange = (e, number) => {
        if (number === 1) {
            setSearchLocation((prevState) => ({
                ...prevState,
                keyword: e.target.value,
            }));
        } else if (number === 2) {
            setSearchCat((prevState) => ({
                ...prevState,
                keyword: e.target.value,
            }));
        } else if (number === 3) {
            setSearchService((prevState) => ({
                ...prevState,
                keyword: e.target.value,
            }));
        }
        setSelect((prevState) => ({
            ...prevState,
            isVisible: true,
        }));
        console.log(select.num);
    };

    const handleOptionClick = (option, number) => {
        if (number === 1) {
            setSearchLocation((prevState) => ({
                ...prevState,
                value: option,
            }));
        } else if (number === 2) {
            setSearchCat((prevState) => ({
                ...prevState,
                value: option,
            }));
        } else if (number === 3) {
            setSearchService((prevState) => ({
                ...prevState,
                value: option,
            }));
        }

        setSelect((prevState) => ({
            ...prevState,
            isVisible: false,
        }));
    };
    const filteredcat = category.filter((option) =>
        option.toLowerCase().includes(searchCat.keyword.toLowerCase())
    );
    const filteredlocation = location.filter((option) =>
        option.toLowerCase().includes(searchLocation.keyword.toLowerCase())
    );

    const filteredServices = services.filter((option) =>
        option.toLowerCase().includes(searchService.keyword.toLowerCase())
    );

    return (
        <div className="ban-search ban-sear-all">
            <form name="filter_form" id="filter_form" className="filter_form">
                <ul>
                    <li className="sr-cit">
                        <div
                            className={`chosen-container chosen-container-single ${
                                select.num === 1 && select.isVisible
                                    ? "chosen-with-drop"
                                    : ""
                            }`}
                            ref={divRef1}
                            id="city_check_chosen"
                            style={{ width: 200 }}
                        >
                            <a
                                className="chosen-single"
                                onClick={() => handleClick(1)}
                            >
                                <span>
                                    {searchLocation.value
                                        ? searchLocation.value
                                        : "Select City"}
                                </span>
                                <div>
                                    <b />
                                </div>
                            </a>
                            <div
                                className="chosen-drop"
                                onClick={stopPropagation}
                            >
                                <div className="chosen-search">
                                    <input
                                        className="chosen-search-input"
                                        type="text"
                                        value={searchLocation.keyword}
                                        onChange={(e) =>
                                            handleInputChange(e, 1)
                                        }
                                        autoComplete="off"
                                        onClick={stopPropagation}
                                    />
                                </div>
                                <ul className="chosen-results">
                                    {filteredlocation.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() =>
                                                handleOptionClick(option, 1)
                                            }
                                            className={`active-result result-selected ${
                                                option ===
                                                    searchLocation.value &&
                                                "highlighted"
                                            }`}
                                            data-option-array-index={0}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="sr-cate">
                        <div
                            className={`chosen-container chosen-container-single ${
                                select.num === 2 && select.isVisible
                                    ? "chosen-with-drop"
                                    : ""
                            }`}
                            ref={divRef2}
                            id="explor_select_chosen"
                            style={{ width: 200 }}
                        >
                            <a
                                className="chosen-single"
                                onClick={() => handleClick(2)}
                            >
                                <span>
                                    {searchCat.value
                                        ? searchCat.value
                                        : "Select Services"}
                                </span>
                                <div>
                                    <b />
                                </div>
                            </a>
                            <div
                                className="chosen-drop"
                                onClick={stopPropagation}
                            >
                                <div className="chosen-search">
                                    <input
                                        className="chosen-search-input"
                                        type="text"
                                        value={searchCat.keyword}
                                        onChange={(e) =>
                                            handleInputChange(e, 2)
                                        }
                                        autoComplete="off"
                                        onClick={stopPropagation}
                                    />
                                </div>
                                <ul className="chosen-results">
                                    {filteredcat.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() =>
                                                handleOptionClick(option, 2)
                                            }
                                            className={`active-result result-selected ${
                                                option === searchCat.value &&
                                                "highlighted"
                                            }`}
                                            data-option-array-index={0}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="sr-nor">
                        <div
                            className={`chosen-container chosen-container-single ${
                                select.num === 3 && select.isVisible
                                    ? "chosen-with-drop"
                                    : ""
                            }`}
                            ref={divRef3}
                            id="expert_select_search_chosen"
                            style={{ width: 430 }}
                        >
                            <a
                                className="chosen-single"
                                onClick={() => handleClick(3)}
                            >
                                <span>
                                    {searchService.value
                                        ? searchService.value
                                        : "What are you looking for?"}
                                </span>
                                <div>
                                    <b />
                                </div>
                            </a>
                            <div
                                className="chosen-drop"
                                onClick={stopPropagation}
                            >
                                <div className="chosen-search">
                                    <input
                                        className="chosen-search-input"
                                        type="text"
                                        value={searchService.keyword}
                                        onChange={(e) =>
                                            handleInputChange(e, 3)
                                        }
                                        autoComplete="off"
                                        onClick={stopPropagation}
                                    />
                                </div>
                                <ul className="chosen-results">
                                    {filteredServices.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() =>
                                                handleOptionClick(option, 3)
                                            }
                                            className={`active-result result-selected ${
                                                option ===
                                                    searchService.value &&
                                                "highlighted"
                                            }`}
                                            data-option-array-index={0}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="sr-btn">
                        <input
                            type="submit"
                            id="filter_submit"
                            name="filter_submit"
                            defaultValue="Search"
                            className="filter_submit"
                        />
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default Listing_Filter;
