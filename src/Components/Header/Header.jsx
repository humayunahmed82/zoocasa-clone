import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoWhite from "../../assets/logo/logo-white.svg";
import NavbarLink from "./NavbarLink";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import NavMobile from "./NavMobile";

const Header = (props) => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <>
            <header className="py-5 lg:py-0 absolute top-0 left-0 w-full z-10">
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

                            <button
                                onClick={props.onLogin}
                                className="text-white active:outline-none focus:outline-none flex items-center space-x-1 bg-transparent"
                            >
                                <AiOutlineUser className="text-lg" />
                                <span className="">Login</span>
                            </button>

                            <button
                                onClick={() => {
                                    setMobileMenu(true);
                                }}
                                className="text-white active:outline-none focus:outline-none lg:hidden"
                            >
                                <AiOutlineMenu className="text-xl " />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <NavMobile
                className={!mobileMenu ? "-left-80" : "left-0"}
                overlyClassName={
                    !mobileMenu ? "invisible opacity-0" : "visible opacity-100"
                }
                onClose={() => {
                    setMobileMenu(false);
                }}
            />
        </>
    );
};

export default Header;
