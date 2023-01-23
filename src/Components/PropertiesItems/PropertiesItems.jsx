import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { MdApartment } from "react-icons/md";

const PropertiesItems = (props) => {
    return (
        <div className="">
            <div className="relative">
                <img
                    className="rounded-t h-60 w-full object-cover object-center"
                    src={props.propertiesImage}
                    alt="Properties"
                />

                {props.forSale && (
                    <>
                        <span className="bg-[#4695c4] px-3 rounded-3xl text-white text-[11px] font-bold absolute bottom-3 left-3 block h-6 leading-7">
                            {props.forSale}
                        </span>
                        <button className="absolute bottom-3 right-3 text-2xl text-white hover:animate-zoomIn ">
                            <BsFillHeartFill />
                        </button>
                    </>
                )}
                {props.sold && (
                    <span className="bg-[#df6541] px-3 rounded-3xl text-white text-[11px] font-bold absolute bottom-3 left-3 block h-6 leading-7">
                        {props.sold}
                    </span>
                )}
            </div>
            <div className="p-[0.8rem] border border-solid border-[#ececec] border-t-0 rounded-b space-y-5">
                <div className="flex justify-between items-end">
                    <p className="text-2xl font-normal">{props.price}</p>
                    <span className="text-xs text-body font-normal">
                        {props.postDate}
                    </span>
                </div>
                <div className="">
                    <a
                        className="text-heading text-[15px] font-normal hover:underline transition_custom"
                        href=""
                    >
                        {props.address}
                    </a>
                </div>
                <div className="">
                    <ul className="flex space-x-3">
                        <li className="flex items-center text-xs text-body font-normal space-x-1">
                            <BiBed /> <span>{props.bed}</span>
                        </li>
                        <li className="flex items-center text-xs text-body font-normal space-x-1">
                            <BiBath />
                            <span>{props.bath}</span>
                        </li>
                        <li className="flex items-center text-xs text-body font-normal space-x-1">
                            <MdApartment /> <span>{props.sqft}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PropertiesItems;
