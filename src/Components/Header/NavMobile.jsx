import React from "react";
import { NavLink } from "react-router-dom";
import LogoDark from "../../assets/logo/logo-dark.svg";
import CloseIcon from "@mui/icons-material/Close";
import MobileLink from "./MobileLink";

const NavMobile = (props) => {
    return (
        <>
            <div
                className={`lg:hidden fixed top-0 w-72 sm:w-80 h-full bg-neutral-200 z-20 transition_custom ${props.className}`}
            >
                <div className="flex justify-between items-center p-5 bg-white">
                    <div className="logo w-32 sm:w-36">
                        <NavLink onClick={props.menuClose} to="/">
                            <img src={LogoDark} alt="Logo" />
                        </NavLink>
                    </div>
                    <button onClick={props.menuClose} className="text-body ">
                        <CloseIcon className="" />
                    </button>
                </div>

                <div className="mobile-nav">
                    <MobileLink onMenuClose={props.onMenuClose} />
                </div>

                <div className="mobile-off=canvas__footer"></div>
            </div>

            <div
                className={`lg:hidden fixed top-0 left-0 w-full h-full bg-body/70 z-10 transition_custom ${props.overlyClassName}`}
                onClick={props.overlyClose}
            ></div>
        </>
    );
};

export default NavMobile;
