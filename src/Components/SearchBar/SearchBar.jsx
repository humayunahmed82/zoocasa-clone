import React, { useState } from "react";

import Button from "../UI/Button/Button";

// Import Icon
import { MdSearch } from "react-icons/md";
import Dropdown from "./Dropdown";
import InputRadio from "../UI/Input/InputRadio";
import InputCheck from "../UI/Input/InputCheck";
import Input from "../UI/Input/Input";

const SearchBar = (props) => {
    const [show, setShow] = useState(true);

    return (
        <div className="">
            <div className="h-[5.25rem] px-4 py-5 flex border border-solid border-[#ececec]">
                <div className="w-full h-full flex space-x-2">
                    <div className="relative w-full block">
                        <label className="absolute top-1/2 left-2 -translate-y-1/2">
                            <MdSearch className="text-2xl" />
                        </label>
                        <input
                            type="text"
                            className="text-lg px-3 py-2 pl-10  border border-solid border-[#b6b5b5] w-full focus:outline-none h-full font-normal rounded-sm"
                            placeholder="Search "
                        />
                    </div>

                    <div className="">
                        <Button className="bg-primary text-white border-primary !h-full lg:px-4 sm:px-4 rounded-sm">
                            Search
                        </Button>
                    </div>

                    <Dropdown btnText="Buy">
                        <div className="flex whitespace-nowrap space-x-6">
                            <InputRadio
                                id="buy-listings"
                                text="Buy listings"
                                name="listings"
                                value="buy"
                                className="text-base"
                            />
                            <InputRadio
                                id="rent-listings"
                                text="Rent listings"
                                name="listings"
                                value="rent"
                                className="text-base"
                            />
                        </div>
                    </Dropdown>

                    <Dropdown btnText="Sold Listings">
                        <div className="flex whitespace-nowrap space-x-6">
                            <InputRadio
                                id="active-listings"
                                text="Active listings"
                                name="listings"
                                value="active"
                                className="text-base"
                            />
                            <InputRadio
                                id="sold-listings"
                                text="Sold listings"
                                name="listings"
                                value="sold"
                                className="text-base"
                            />
                            <InputRadio
                                id="expired-listings"
                                text="Expired listings"
                                name="listings"
                                value="expired"
                                className="text-base"
                            />
                        </div>
                    </Dropdown>

                    <Dropdown btnText="Home Type (3)">
                        <div className="">
                            <ul className="space-y-3">
                                <li className="text-xs font-medium block">
                                    <InputCheck
                                        onChange={(event) =>
                                            setShow(event.target.checked)
                                        }
                                        id="house"
                                        title="House"
                                    />
                                    <ul
                                        className={`pl-5 pt-2 space-y-3 ${
                                            !show ? "block" : "hidden"
                                        }`}
                                    >
                                        <li className="text-xs font-medium block">
                                            <InputCheck
                                                id="detached"
                                                title="Detached"
                                            />
                                        </li>
                                        <li className="text-xs font-medium block">
                                            <InputCheck
                                                id="semi-detached"
                                                title="Semi-Detached"
                                            />
                                        </li>
                                        <li className="text-xs font-medium block">
                                            <InputCheck
                                                id="attached"
                                                title="Attached/Row"
                                            />
                                        </li>
                                    </ul>
                                </li>
                                <li className="text-xs font-medium block">
                                    <InputCheck
                                        id="townhouse"
                                        title="Townhouse"
                                    />
                                </li>
                                <li className="text-xs font-medium block">
                                    <InputCheck
                                        id="apartment"
                                        title="Condo/Apartment"
                                    />
                                </li>
                            </ul>
                        </div>
                    </Dropdown>
                    <Dropdown btnText="Below 200k">
                        <div className="w-60">
                            <div className="flex items-center space-x-4 border-b border-solid border-border_color pb-4">
                                <Input
                                    className="rounded-none border-body"
                                    input={{
                                        type: "number",
                                        placeholder: "Min",
                                    }}
                                />
                                <span className="text-body text-sm opacity-50">
                                    to
                                </span>
                                <Input
                                    className="rounded-none border-body"
                                    input={{
                                        type: "number",
                                        placeholder: "Max",
                                    }}
                                />
                            </div>
                            <div className="pt-3">
                                <div className="">
                                    <ul>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $50,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $100,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $200,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $400,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $600,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $800,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $800,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $1,000,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $1,250,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $1,500,000
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4 pt-6">
                                <button className="text-xs text-[#4695c4] whitespace-nowrap font-medium">
                                    Reset
                                </button>
                                <button className="text-xs text-[#4695c4] whitespace-nowrap font-medium">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
