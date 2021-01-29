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
import HomeIcon from '@material-ui/icons/Home';
import { NavbarList } from "./NavbarList";
import { menusId, navbarListData } from "./NavbarData";
import {NavLink} from "react-router-dom";
import {mainStylesData} from "../../projectStyles/projectStyles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topMenu: {
      background: 'linear-gradient(360deg, hsla(0, 0%, 3%, 1) 0%, hsla(60, 1%, 24%, 1) 50%, hsla(0, 0%, 2%, 1) 99%, hsla(30, 3%, 12%, 1) 100%)',
    },
    topMenuItemWrap: {
      display: "flex",
    },
    homeIcon: {
      color: mainStylesData.colors.mainOrange
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={s.navContainer} >
      <AppBar position="fixed" className={classes.topMenu}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={NavLink}
            to={'/'}
          >
            <HomeIcon className={classes.homeIcon}/>
          </IconButton>
          <Typography variant="h6" color="inherit">
            <div className={classes.topMenuItemWrap}>
              <NavbarList id={menusId.miniProject} data={navbarListData} />
              <NavbarList id={menusId.examsTasks} data={navbarListData} />
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  );
};
