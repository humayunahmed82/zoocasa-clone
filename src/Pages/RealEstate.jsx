import React from "react";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";

const RealEstate = (props) => {
    return (
        <>
            <Breadcrumb />

            <div className="py-8">
                <div className="container">
                    <div className="flex py-[2px] border-b border-solid border-border_color">
                        <a
                            className="px-[0.8rem] text-base font-normal border-b-2 border-solid border-primary transition_custom hover:underline text-heading"
                            href="#"
                        >
                            Listing
                        </a>
                        <a
                            className="px-[0.8rem] text-base font-normal border-b-2 border-solid border-transparent transition_custom hover:underline text-heading"
                            href="#"
                        >
                            Buildings
                        </a>
                    </div>

                    <div className="py-5 border-b border-solid border-border_color"></div>
                </div>
            </div>
        </>
    );
};

export default RealEstate;
