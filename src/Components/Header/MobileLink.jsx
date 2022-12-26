import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "../../Data/Navbar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const MobileLink = (props) => {
    const [subMenu, setSubMenu] = useState("");

    return (
        <ul className="menu__link">
            {NavbarLinks.map((nav, index) => (
                <li key={nav.id}>
                    <NavLink to={nav.url} onClick={props.onMenuClose}>
                        <span>{nav.name}</span>
                    </NavLink>
                    {nav.subMenu ? (
                        <span
                            className="absolute top-0 p-3 right-0"
                            onClick={() => setSubMenu(nav.name)}
                        >
                            {subMenu === nav.name ? (
                                <RemoveIcon />
                            ) : (
                                <AddIcon />
                            )}
                        </span>
                    ) : (
                        ""
                    )}

                    {nav.subMenu ? (
                        <ul
                            className={`sub-item ${
                                subMenu === nav.name ? "block" : "hidden"
                            }`}
                        >
                            {nav.subMenu &&
                                nav.subMenu.map((subItem, index) => (
                                    <li key={subItem.id}>
                                        <NavLink
                                            to={subItem.url}
                                            onClick={props.onMenuClose}
                                        >
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

export default MobileLink;
