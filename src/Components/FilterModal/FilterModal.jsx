import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import InputRadio from "../UI/InputRadio";
import RangeSlider from "../UI/RangeSlider";
import Dropdown from "../UI/Dropdown";
import Input from "../UI/Input";

const FilterModal = () => {
    return (
        <>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-20 w-[980px] p-8">
                <div className="flex justify-between items-center border-b border-solid border-border_color pb-5">
                    <h2 className="text-3xl font-normal font-frank">
                        Filter Search
                    </h2>
                    <button className="">
                        <CloseIcon />
                    </button>
                </div>
                <div className="grid grid-cols-3 pt-8">
                    <div className="space-y-8">
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
                                Sold & Expired listings for last 12 months.
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
                            <div className="">
                                <div className="">
                                    <Input type="number" placeholder="Min" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div className=""></div>
            </div>
            <div className="fixed top-0 left-0 w-full h-full z-10 bg-black/60"></div>
        </>
    );
};

export default FilterModal;
