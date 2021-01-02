import React from 'react';
import {NavLink} from "react-router-dom";


export const Navbar = () => {
return (
    <div>
        <NavLink to={"/monday"}>Monday</NavLink>
        <NavLink to={"/tuesday"}>Tuesday</NavLink>
        <NavLink to={"/wednesday"}>Wednesday</NavLink>
        <NavLink to={"/thursday"}>Thursday</NavLink>
        <NavLink to={"/friday"}>Friday</NavLink>
    </div>
);

}