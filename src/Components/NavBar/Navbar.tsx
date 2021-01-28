import React from "react";

//Styles
import s from "./Navbar.module.scss";

import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavbarList } from "./NavbarList";
import { menusId, navbarListData } from "./NavbarData";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topMenuItemWrap: {
      display: "flex",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={s.navContainer}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <div className={classes.topMenuItemWrap}>
              <NavbarList id={menusId.miniProject} data={navbarListData} />
              <NavbarList id={menusId.examsTasks} data={navbarListData} />
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      {/*        <NavLink to={PATH.COUNTER} className={`${s.btn} ${s.mondayBtn}`}>
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
      </NavLink>*/}
    </nav>
  );
};
