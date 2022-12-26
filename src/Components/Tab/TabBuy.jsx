import React from "react";
import Button from "../UI/Button";

const TabBuy = () => {
    return (
        <div className="bg-white/20 p-[10px] rounded-md mt-10">
            <div className="bg-white p-7 rounded-md flex space-x-4">
                <div className="flex-shrink w-full">
                    <input
                        className="w-full focus:outline-none h-10 md:h-12 px-4 text-base text-body font-normal rounded-md border border-solid border-border_color focus:border-primary transition_custom"
                        type="search"
                        placeholder="Search Location..."
                    />
                </div>
                <div className="flex-shrink-0">
                    <Button className="rounded-md bg-white text-body border-body hover:bg-body hover:text-white">
                        Filter
                    </Button>
                </div>
                <div className="flex-shrink-0">
                    <Button className="rounded-md bg-primary text-white border-primary hover:border-secondary hover:bg-secondary ">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TabBuy;
