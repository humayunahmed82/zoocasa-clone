import React, { useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputCheck from "./InputCheck";
// import { Node } from "postcss";

const Dropdown = () => {
    const [open, setOpen] = useState(true);
    const dropdownRef = useRef(null);
    window.addEventListener("click", (e) => {
        if (open && !dropdownRef.current?.contains(e.target)) {
            setOpen(open);
        }
    });

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                onClick={(e) => setOpen(!open)}
                className="text-sm text-body border border-solid border-border_color py-2 px-4 rounded flex justify-between items-center cursor-pointer"
            >
                <span>House, Townhouse, Condo/Apt</span>
                <KeyboardArrowDownIcon />
            </div>
            {!open && (
                <div className="absolute top-full left-0 z-10 bg-white border border-solid border-body w-full  p-4 mt-1">
                    <ul className="space-y-3">
                        <li className="text-xs font-medium block">
                            <InputCheck id="house" title="House" />
                            <ul className="pl-5 pt-2 space-y-3">
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
                            <InputCheck id="townhouse" title="Townhouse" />
                        </li>
                        <li className="text-xs font-medium block">
                            <InputCheck
                                id="apartment"
                                title="Condo/Apartment"
                            />
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
