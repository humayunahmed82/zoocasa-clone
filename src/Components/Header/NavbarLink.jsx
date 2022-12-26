import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "../../Data/Navbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NavbarLink = () => {
    return (
        <ul className="menu__link">
            {NavbarLinks.map((nav, index) => (
                <li key={nav.id}>
                    <NavLink to={nav.url}>
                        <span>{nav.name}</span>
                        {nav.subMenu ? <KeyboardArrowDownIcon /> : ""}
                    </NavLink>

                    {nav.subMenu ? (
                        <ul className="sub-item">
                            {nav.subMenu &&
                                nav.subMenu.map((subItem, index) => (
                                    <li key={subItem.id}>
                                        <NavLink to={subItem.url}>
                                            {subItem.name}
                                        </NavLink>
                                    </li>
                                ))}
                        </ul>
                    ) : (
                        ""
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavbarLink;
