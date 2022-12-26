import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoWhite from "../../assets/logo/logo-white.svg";
import NavbarLink from "./NavbarLink";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

import "./Navbar.scss";
import NavMobile from "./NavMobile";

const Header = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="py-5 lg:py-0 fixed top-0 left-0 w-full z-10">
                <div className="container">
                    <div className="navbar flex justify-between items-center">
                        <div className="logo w-32 sm:w-36">
                            <NavLink to="/">
                                <img src={LogoWhite} alt="Logo" />
                            </NavLink>
                        </div>

                        <div className="flex space-x-3 sm:space-x-6">
                            <nav className="menu hidden lg:block">
                                <NavbarLink />
                            </nav>
                            <button className="text-white active:outline-none focus:outline-none flex items-center space-x-1 bg-transparent">
                                <PersonIcon />
                                <span className="">Login</span>
                            </button>
                            <button
                                onClick={() => setOpen(true)}
                                className="text-white active:outline-none focus:outline-none lg:hidden"
                            >
                                <MenuIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <NavMobile
                className={open ? "left-0" : "-left-[350px]"}
                overlyClassName={
                    open ? "visible opacity-100" : "invisible opacity-0"
                }
                menuClose={() => setOpen(false)}
                onMenuClose={() => setOpen(false)}
                overlyClose={() => setOpen(false)}
            />
        </>
    );
};

export default Header;
