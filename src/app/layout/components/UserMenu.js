import React from "react";
import {
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Divider
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as layoutRedux from "../_redux/layoutRedux";
import * as CONST from '../../../Constant'
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HttpsIcon from '@material-ui/icons/Https';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import UserProfile from "./UserProfile";

function UserMenu() {
  const authReducer = useSelector(({ auth }) => auth)
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const layoutReducer = useSelector(({ layout }) => layout)
  const [mode, setMode] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const swithMode = () => {
    //todo switch mode
    if (mode) {
      setMode(false);
      dispatch(layoutRedux.actions.updateDarkMode(!layoutReducer.darkMode))
    } else {
      setMode(true);
      dispatch(layoutRedux.actions.updateDarkMode(!layoutReducer.darkMode))
    }
  }

  const changePasswordClick = () => {
    const toggle = document.getElementById("kt_quick_user_toggle");
    if (toggle) {
      toggle.click();
    }
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=350,height=570,left=200,top=200`;
    window.open(CONST.SSO_URL_Changepassword, 'changePassword', params);
  };

  const logoutClick = () => {
    const toggle = document.getElementById("kt_quick_user_toggle");
    if (toggle) {
      toggle.click();
    }
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=300,height=450,left=200,top=200`;
    window.open(CONST.SSO_URL_LOGOUT, 'logged-out', params);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={() => {
        swithMode();
      }}>
        {mode === true ? <NightsStayIcon style={{ fontSize: 20 }} /> : <WbSunnyIcon style={{ fontSize: 20, color: "#f27e2c" }} />}
      </IconButton>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Typography variant="caption">{authReducer.user}</Typography>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >

        {/* <MenuItem onClick={swithMode}>{`${layoutReducer.darkMode ? "Light" : "Dark"
          } mode`}</MenuItem>
        */}

        {/* start  User Profile*/}
        <MenuItem>
          <UserProfile></UserProfile>
        </MenuItem>
        {/* end User Profile */}

        <Divider light />

        {/* start Change Password */}
        <MenuItem onClick={changePasswordClick}>
          <Chip
            size="small"
            icon={<HttpsIcon style={{ fontSize: 20, marginLeft: 10 }} />}
          />
          <Link
            style={{ color: "#000000", marginLeft: 20, marginBottom: 10 }}
            component="button"
            variant="inherit"
            onClick={() => {
              changePasswordClick();
            }}
          >
            Change Password
            <ChevronRightIcon style={{ marginLeft: 200 }}></ChevronRightIcon>
          </Link>
        </MenuItem>
        {/* end Change Password */}

        {/* start Sign out*/}
        <MenuItem onClick={logoutClick}>
          <Chip
            size="small"
            style={{ marginTop: 10 }}
            icon={<ExitToAppIcon style={{ fontSize: 20, marginLeft: 11 }} />}
            // onDelete={handleDelete}
            color="#474c52"
          />
          <Link
            style={{ color: "#000000", marginLeft: 20, marginTop: 10 }}//#f7f5f5
            component="button"
            variant="inherit"
            onClick={() => {
              logoutClick();
            }}
          >

            Sign out
          </Link>
        </MenuItem>
        {/* end Sign out */}
      </Menu>
    </div>
  );
}

export default UserMenu;
