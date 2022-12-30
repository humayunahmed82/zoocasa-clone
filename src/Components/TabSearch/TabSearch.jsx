import React from "react";
import Button from "../UI/Button";

const TabSearch = (props) => {
    return (
        <div
            className={`bg-white/20 p-[10px] rounded-md mt-10 ${props.className}`}
        >
            <div className="bg-white p-4 sm:p-7 rounded-md md:flex md:space-x-4">
                <div className="flex-shrink w-full">
                    <input
                        className="w-full focus:outline-none h-10 lg:h-12 px-4 text-base text-body font-normal rounded-md border border-solid border-border_color focus:border-primary transition_custom"
                        type="search"
                        placeholder="Search Location..."
                    />
                </div>
                <div className="flex-shrink-0 flex space-x-4 mt-4 md:mt-0">
                    <div className="w-1/2 md:w-auto">
                        <Button
                            onClick={props.onClick}
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
        </div>
    );
};

export default TabSearch;
