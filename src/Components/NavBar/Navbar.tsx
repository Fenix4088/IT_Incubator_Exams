import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import s from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={s.navContainer}>
        <NavLink to={"/counter"} className={`${s.btn} ${s.mondayBtn}`}>
            Counter
        </NavLink>
      <NavLink to={"/monday"} className={`${s.btn} ${s.mondayBtn}`}>
        Monday
      </NavLink>
      <NavLink to={"/tuesday"} className={`${s.btn} ${s.tuesdayBtn}`}>
        Tuesday
      </NavLink>
      <NavLink to={"/wednesday"} className={`${s.btn} ${s.wednesdayBtn}`}>
        Wednesday
      </NavLink>
      <NavLink to={"/thursday"} className={`${s.btn} ${s.thursdayBtn}`}>
        Thursday
      </NavLink>
      <NavLink to={"/friday"} className={`${s.btn} ${s.fridayBtn}`}>
        Friday
      </NavLink>
      <NavLink to={"/tests"} className={`${s.btn} ${s.testBtn}`}>
        Test
      </NavLink>
    </nav>
  );
};
