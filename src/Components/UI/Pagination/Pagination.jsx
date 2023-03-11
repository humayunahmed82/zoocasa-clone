import React from "react";

// Import Icon
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Pagination = (props) => {
    return (
        <ul className="flex justify-center space-x-2 items-center">
            <li>
                <button className="text-2xl font-normal w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border border-solid border-[#b6b5b5] rounded hover:bg-black/10 transition-all duration-200 ease-linear">
                    <MdKeyboardArrowLeft />
                </button>
            </li>
            <li>
                <button className="text-base font-normal w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border border-solid border-[#b6b5b5] rounded hover:bg-black/10 transition-all duration-200 ease-linear bg-black/10">
                    1
                </button>
            </li>
            <li>
                <button className="text-base font-normal w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border border-solid border-[#b6b5b5] rounded hover:bg-black/10 transition-all duration-200 ease-linear">
                    2
                </button>
            </li>
            <li>
                <button className="text-base font-normal w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border border-solid border-[#b6b5b5] rounded hover:bg-black/10 transition-all duration-200 ease-linear">
                    3
                </button>
            </li>
            <li>
                <button className="text-base font-normal w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border border-solid border-[#b6b5b5] rounded hover:bg-black/10 transition-all duration-200 ease-linear">
                    4
                </button>
            </li>
            <li>
                <button className="text-base font-normal w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border border-solid border-[#b6b5b5] rounded hover:bg-black/10 transition-all duration-200 ease-linear">
                    5
                </button>
            </li>
            <li>
                <div className="px-3">...</div>
            </li>
            <li>
                <button className="text-base font-normal w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border border-solid border-[#b6b5b5] rounded hover:bg-black/10 transition-all duration-200 ease-linear">
                    156
                </button>
            </li>
            <li>
                <button className="text-2xl font-normal w-10 h-10 md:w-14 md:h-14 flex items-center justify-center border border-solid border-[#b6b5b5] rounded hover:bg-black/10 transition-all duration-200 ease-linear">
                    <MdKeyboardArrowRight />
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
