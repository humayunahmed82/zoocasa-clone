import React, { useState, useRef } from "react";

// Import Autocomplete
import { suggestions } from "../../Data/suggestions";

// Import components
import Button from "../UI/Button/Button";
import Autocomplete from "./Autocomplete";

// Import Icon
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const SearchFrom = (props) => {
    // Dropdown
    const [isActive, setIsActive] = useState(false);

    const dropdownRef = useRef(null);

    window.addEventListener("click", (e) => {
        if (!isActive && !dropdownRef.current?.contains(e.target)) {
            setIsActive(!setIsActive);
        }
    });

    const [selected, setSelected] = useState("Buy");
    const options = ["Buy", "Rent"];

    // Search Autocomplete
    const [value, setValue] = useState("");
    const [showSuggestion, setShowSuggestion] = useState(false);

    const suggestionOptions = suggestions.filter((option) =>
        option.location.toLowerCase().includes(value.toLowerCase())
    );

    const searchRef = useRef(null);

    window.addEventListener("click", (e) => {
        if (!showSuggestion && !searchRef.current?.contains(e.target)) {
            setShowSuggestion(false);
        }
    });

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form>
            <div
                ref={searchRef}
                className={`bg-white flex flex-wrap sm:flex-nowrap relative ${props.className}`}
            >
                <div
                    ref={dropdownRef}
                    className="p-2 border-r border-solid border-border_color cursor-pointer flex-[0_0_80px] sm:flex-[0_0_100px] rounded-md relative"
                >
                    <div
                        onClick={(e) => setIsActive(!isActive)}
                        className="flex justify-center items-center h-10 lg:h-12 leading-10 lg:leading-[3rem] text-base font-normal"
                    >
                        <span>{selected}</span>

                        {isActive ? (
                            <MdKeyboardArrowUp className="text-xl ml-2" />
                        ) : (
                            <MdKeyboardArrowDown className="text-xl ml-2" />
                        )}
                    </div>
                    {isActive && (
                        <ul className="absolute top-full left-0 bg-white w-full text-center border border-solid border-border_color rounded-b z-10">
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={(e) => {
                                        setSelected(option);
                                        setIsActive(false);
                                    }}
                                    className="h-10 leading-10"
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="md:flex-shrink w-[calc(100%_-_80px)] sm:w-full py-2 px-2 ">
                    <input
                        className="w-full focus:outline-none h-10 lg:h-12 px-4 text-base text-body font-normal rounded-md border-0 focus:border-0"
                        type="search"
                        placeholder="Search Location..."
                        value={value}
                        onChange={handleChange}
                        onFocus={() => setShowSuggestion(true)}
                    />
                </div>
                <div className="md:flex-shrink-0 flex space-x-4 p-2 w-full sm:w-auto">
                    <div className="w-1/2 md:w-auto">
                        <Button
                            onClick={props.onFilterModal}
                            className="w-full md:w-auto rounded-md bg-white text-body border-body hover:bg-body hover:text-white"
                        >
                            Filter
                        </Button>
                    </div>
                    <div className="w-1/2 md:w-auto">
                        <Button className="w-full md:w-auto rounded-md bg-primary text-white border-primary hover:border-secondary hover:bg-secondary ">
                            Search
                        </Button>
                    </div>
                </div>

                {showSuggestion && (
                    <Autocomplete
                        suggestionOptions={suggestionOptions}
                        setValue={setValue}
                        setShowSuggestion={setShowSuggestion}
                    />
                )}
            </div>
        </form>
    );
};

export default SearchFrom;
