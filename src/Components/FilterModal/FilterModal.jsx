import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import InputRadio from "../UI/InputRadio";
import RangeSlider from "../UI/RangeSlider";
import Dropdown from "../UI/Dropdown";
import Input from "../UI/Input";
import Quantity from "../UI/Quantity";
import InputCheck from "../UI/InputCheck";
import DatePicker from "react-datepicker";
import Select from "../UI/SelectUi";
import "react-datepicker/dist/react-datepicker.css";
import FilterCol from "./FilterCol";
import Button from "../UI/Button";

const FilterModal = (props) => {
    const [sinceDate, setSinceDate] = useState(null);
    const [untilDate, setUntilDate] = useState(null);

    return (
        <>
            {props.onModal && (
                <>
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-20 max-w-[90%] sm:max-w-[500px] md:max-w-[680px] lg:max-w-[940px] xl:max-w-[980px] w-full pt-[65px] md:pt-[70px] lg:pt-[85px] pb-[73px] lg:pb-24">
                        <div className="absolute p-4 lg:px-12 lg:py-6 w-full left-0 top-0 bg-white flex justify-between items-center border-b border-solid border-border_color">
                            <h2 className="text-2xl md:text-3xl font-normal font-frank">
                                Filter Search
                            </h2>
                            <button onClick={props.onClick} className="">
                                <CloseIcon />
                            </button>
                        </div>

                        <div className="px-4 lg:px-12 py-5 overflow-y-auto max-h-[68vh] scrollbar-none">
                            <div className="md:flex justify-between md:space-x-8 lg:space-x-14 space-y-8 md:space-y-0">
                                <FilterCol>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-4">
                                            Listing Status
                                        </h3>
                                        <div className="space-y-3">
                                            <InputRadio
                                                id="active-listings"
                                                name="listingStatus"
                                                text="Active Listings"
                                            />
                                            <InputRadio
                                                id="sold-listings"
                                                name="listingStatus"
                                                text="Sold Listings"
                                            />
                                            <InputRadio
                                                id="expired-listings"
                                                name="listingStatus"
                                                text="Expired Listings"
                                            />
                                        </div>
                                        <p className="text-xs mt-3">
                                            Sold & Expired listings for last 12
                                            months.
                                        </p>
                                    </div>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-3">
                                            Price
                                        </h3>
                                        <div className="">
                                            <RangeSlider
                                                min={0}
                                                max={1000}
                                                onChange={({ min, max }) =>
                                                    `min = ${min}, max = ${max}`
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-4">
                                            Home Type
                                        </h3>
                                        <Dropdown />
                                    </div>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-4">
                                            Square Feet
                                        </h3>
                                        <div className="flex items-center">
                                            <div className="">
                                                <Input
                                                    type="number"
                                                    placeholder="Min"
                                                />
                                            </div>
                                            <div className="text-2xl px-2 font-light">
                                                -
                                            </div>
                                            <div className="">
                                                <Input
                                                    type="number"
                                                    placeholder="Max"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </FilterCol>

                                <FilterCol>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-4">
                                            Listed Date
                                        </h3>
                                        <div className="flex items-center">
                                            <div className="">
                                                <DatePicker
                                                    placeholderText="Since"
                                                    selected={sinceDate}
                                                    onChange={(date) =>
                                                        setSinceDate(date)
                                                    }
                                                    dateFormat="MMM d, yyyy"
                                                    className="w-full h-9 border border-solid border-border_color px-3 py-3 rounded focus:outline-none focus:border-primary transition_custom appearance-none text-sm"
                                                />
                                            </div>
                                            <div className="text-2xl px-2 font-light">
                                                -
                                            </div>
                                            <div className="">
                                                <DatePicker
                                                    placeholderText="Until"
                                                    selected={untilDate}
                                                    onChange={(date) =>
                                                        setUntilDate(date)
                                                    }
                                                    dateFormat="MMM d, yyyy"
                                                    className="w-full h-9 border border-solid border-border_color px-3 py-3 rounded focus:outline-none focus:border-primary transition_custom appearance-none text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-4">
                                            Beds
                                        </h3>
                                        <div className="flex items-center space-x-5">
                                            <Quantity />
                                            <InputCheck
                                                id="beds-more"
                                                title="Or More"
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-4">
                                            Bathrooms
                                        </h3>
                                        <div className="flex items-center space-x-5">
                                            <Quantity />
                                            <InputCheck
                                                id="bathrooms-more"
                                                title="Or More"
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-4">
                                            Parking
                                        </h3>
                                        <div className="flex items-center space-x-5">
                                            <Quantity />
                                            <InputCheck
                                                id="parking-more"
                                                title="Or More"
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-4">
                                            House Filters
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="inline-block mr-4">
                                                <InputCheck
                                                    className="text-xs"
                                                    id="single-family"
                                                    title="Single family"
                                                />
                                            </div>
                                            <div className="inline-block mr-4">
                                                <InputCheck
                                                    className="text-xs"
                                                    id="basement"
                                                    title="Single family with a basement apartment"
                                                />
                                            </div>
                                            <div className="inline-block mr-4">
                                                <InputCheck
                                                    className="text-xs"
                                                    id="duplex"
                                                    title="Duplex"
                                                />
                                            </div>
                                            <div className="inline-block mr-4">
                                                <InputCheck
                                                    className="text-xs"
                                                    id="triplex"
                                                    title="Triplex"
                                                />
                                            </div>
                                            <div className="inline-block mr-4">
                                                <InputCheck
                                                    className="text-xs"
                                                    id="fourplex"
                                                    title="Fourplex +"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </FilterCol>

                                <FilterCol>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-4">
                                            Amenities
                                        </h3>
                                        <div className="gap-y-3 flex flex-wrap">
                                            <div className="w-1/2">
                                                <InputCheck
                                                    className="text-xs"
                                                    id="garage"
                                                    title="Garage"
                                                />
                                            </div>
                                            <div className="w-1/2">
                                                <InputCheck
                                                    className="text-xs"
                                                    id="open-house"
                                                    title="Open House"
                                                />
                                            </div>
                                            <div className="w-1/2">
                                                <InputCheck
                                                    className="text-xs"
                                                    id="pool"
                                                    title="Pool"
                                                />
                                            </div>
                                            <div className="w-1/2">
                                                <InputCheck
                                                    className="text-xs"
                                                    id="waterfront"
                                                    title="Waterfront"
                                                />
                                            </div>
                                            <div className="w-1/2">
                                                <InputCheck
                                                    className="text-xs"
                                                    id="fireplace"
                                                    title="Fireplace"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className="text-base font-medium pb-4">
                                            Condo / Townhouse Filters
                                        </h3>
                                        <div className="space-y-5">
                                            <div className="">
                                                <label className="text-xs font-medium mb-1 block">
                                                    Locker
                                                </label>
                                                <Select
                                                    options={[
                                                        {
                                                            value: "any",
                                                            label: "Any",
                                                        },
                                                        {
                                                            value: "yes",
                                                            label: "Yes",
                                                        },
                                                        {
                                                            value: "no",
                                                            label: "No",
                                                        },
                                                    ]}
                                                />
                                            </div>
                                            <div className="">
                                                <label className="text-xs font-medium mb-1 block">
                                                    Max Maintenance Fees
                                                </label>
                                                <div className="relative">
                                                    <span className="text-sm font-medium absolute top-1/2 left-3 -translate-y-1/2 mt-[1px]">
                                                        $
                                                    </span>
                                                    <Input className="pl-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FilterCol>
                            </div>
                        </div>

                        <div className="absolute p-4 lg:px-12 lg:py-6 w-full left-0 bottom-0 bg-white border-t border-solid border-border_color sm:space-x-4 md:space-x-6 sm:flex justify-between items-center">
                            <div className="hidden sm:block">
                                <Button className="border-body hover:bg-body hover:text-white">
                                    Reset Filters
                                </Button>
                            </div>
                            <div className="flex justify-between items-center space-x-4 md:space-x-6">
                                <Button className="border-body hover:bg-body hover:text-white">
                                    Save Search
                                </Button>
                                <Button className="border-primary bg-primary text-white hover:bg-secondary hover:border-secondary">
                                    Apply Filters
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="fixed top-0 left-0 w-full h-full z-10 bg-black/60"></div>
                </>
            )}
        </>
    );
};

export default FilterModal;
