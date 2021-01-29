import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import { PATH } from "../../App";
import {
  makeStyles,
  createStyles,
  Theme,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from "@material-ui/core";
import { NavbarListDataT } from "./NavbarData";
import {mainStylesData} from "../../projectStyles/projectStyles";

type NavbarListT = {
  id: string;
  data: NavbarListDataT;
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  menuTitle: {
    color: mainStylesData.colors.mainOrange
  },
  menuPaper: {
    position: "relative"
  },
  menuList: {
    top: "6px",
    left: "-86px",
    position: "absolute",
    minWidth: "150px",
  }
}));

export const NavbarList: React.FC<NavbarListT> = (props) => {
  const classes = useStyles();

  const { title, itemNames } = props.data[props.id];
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const firstLetterEdit = (itemName: string): string => {
    return itemName.replace(/^[a-z]/g, (letter) => letter.toUpperCase());
  };

  const getPath = (itemName: string): any => {
    return itemName;
  };

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.menuTitle}
      >
        {title}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}

          >
            <Paper className={classes.menuList}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {itemNames.map((iN, i) => (
                    <MenuItem
                      key={i}
                      component={NavLink}
                      to={PATH[iN.toUpperCase()]}
                    >
                      {firstLetterEdit(iN)}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
