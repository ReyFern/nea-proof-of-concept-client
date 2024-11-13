import React from "react";
import { Nav, NavLink, NavMenu } from "./Builder_Navbar_Elements.js";

const Builder_Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/builder/level" activeStyle>
                        Level
                    </NavLink>
                    <p style={{color: "white"}}>&gt;</p>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Builder_Navbar;