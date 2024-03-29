import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const Autocomplete = (props) => {
    const suggestionClick = (suggestion) => {
        props.setValue(suggestion);
        props.setShowSuggestion(false);
    };

    return (
        <div className="absolute top-full z-20 w-full overflow-y-scroll bg-white rounded max-h-[calc(75vh_-_160px)] shadow">
            <div className="flex p-3 items-center">
                <AiOutlineStar className="text-lg" />
                <span className="pl-1">Popular Searches</span>
            </div>
            <ul className="">
                {props.suggestionOptions.map((option) => (
                    <li
                        key={option.id}
                        onClick={() => suggestionClick(option.location)}
                        className="text-sm font-normal p-3 pr-0 text-body justify-between flex
                            capitalize hover:bg-[#ececec] hover:font-bold"
                    >
                        {option.location}
                        <span className="ml-8 mr-4 whitespace-nowrap">
                            {option.city}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Autocomplete;
