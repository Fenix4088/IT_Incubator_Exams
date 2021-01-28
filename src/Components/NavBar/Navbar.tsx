import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import s from "./Navbar.module.scss";
import {PATH} from "../../App";

export const Navbar = () => {
  return (
    <nav className={s.navContainer}>
        <NavLink to={PATH.COUNTER} className={`${s.btn} ${s.mondayBtn}`}>
            Counter
        </NavLink>
      <NavLink to={PATH.MONDAY} className={`${s.btn} ${s.mondayBtn}`}>
        Monday
      </NavLink>
      <NavLink to={PATH.TUESDAY} className={`${s.btn} ${s.tuesdayBtn}`}>
        Tuesday
      </NavLink>
      <NavLink to={PATH.WEDNESDAY} className={`${s.btn} ${s.wednesdayBtn}`}>
        Wednesday
      </NavLink>
      <NavLink to={PATH.THURSDAY} className={`${s.btn} ${s.thursdayBtn}`}>
        Thursday
      </NavLink>
      <NavLink to={PATH.FRIDAY} className={`${s.btn} ${s.fridayBtn}`}>
        Friday
      </NavLink>
      <NavLink to={PATH.TESTS} className={`${s.btn} ${s.testBtn}`}>
        Test
      </NavLink>
    </nav>
  );
};
