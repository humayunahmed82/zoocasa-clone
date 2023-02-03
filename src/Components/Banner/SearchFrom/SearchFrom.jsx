import React, { useRef } from "react";
import { useState } from "react";
import Button from "../../UI/Button/Button";

// Import Icon
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const SearchFrom = (props) => {
    const [isActive, setIsActive] = useState(false);

    const dropdownRef = useRef(null);

    window.addEventListener("click", (e) => {
        if (!isActive && !dropdownRef.current?.contains(e.target)) {
            setIsActive(!setIsActive);
        }
    });

    const [selected, setSelected] = useState("Buy");
    const options = ["Buy", "Rent"];
    return (
        <form>
            <div className="bg-white rounded-md md:flex">
                <div
                    ref={dropdownRef}
                    className="p-2 border-r border-solid border-border_color cursor-pointer flex-[0_0_100px] rounded-md relative"
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
                        <ul className="absolute top-full left-0 bg-white w-full text-center border border-solid border-border_color rounded-b">
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
                <div className="flex-shrink w-full py-2 px-2 ">
                    <input
                        className="w-full focus:outline-none h-10 lg:h-12 px-4 text-base text-body font-normal rounded-md border-0 focus:border-0"
                        type="search"
                        placeholder="Search Location..."
                    />
                </div>
                <div className="flex-shrink-0 flex space-x-4 p-2">
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
            </div>
        </form>
    );
};

export default SearchFrom;
