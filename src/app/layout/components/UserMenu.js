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

function UserMenu() {
  const authReducer = useSelector(({ auth }) => auth)
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const layoutReducer = useSelector(({ layout }) => layout)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const swithMode = () => {
    //todo switch mode
    dispatch(layoutRedux.actions.updateDarkMode(!layoutReducer.darkMode))
    setAnchorEl(null);
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
        <MenuItem onClick={changePasswordClick}>เปลี่ยนรหัสผ่าน</MenuItem>
        <MenuItem onClick={swithMode}>{`${layoutReducer.darkMode ? "Light" : "Dark"
          } mode`}</MenuItem>
        <Divider light />
        <MenuItem onClick={logoutClick}>ออกจากระบบ</MenuItem>
      </Menu>
    </div>
  );
}

export default UserMenu;
