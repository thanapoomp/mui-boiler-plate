import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  UPDATE_DRAWER_OPEN: "[UPDATE_DRAWER_OPEN] Action",
  UPDATE_DARK_MODE: '[UPDATE_DARK_MODE] Action',
  SHOW_POPUP_LOGOUT: '[SHOP_POPUP_LOGOUT] Action',
  HIDE_POPUP_LOGOUT: '[HIDE_POPUP_LOGOUT] Action',
  SHOW_POPUP_CHANGEPASSWORD: '[SHOW_POPUP_CHANGEPASSWORD] Action',
  HIDE_POPUP_CHANGEPASSWORD: '[HIDE_POPUP_CHANGEPASSWORD] Action'
};

const initialAuthState = {
  drawerOpen: false,
  darkMode: false,
  popupLogout: false,
  popupChangePassword: false
};

export const reducer = persistReducer(
  { storage, key: "layout", whitelist: ["darkMode"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.UPDATE_DRAWER_OPEN: {
        return {
          ...state,
          drawerOpen:action.payload,
        };
      }

      case actionTypes.UPDATE_DARK_MODE: {
        return {
          ...state,
          darkMode:action.payload,
        };
      }

      case actionTypes.SHOW_POPUP_LOGOUT: {
        return {
          ...state,
          popupLogout:true,
        };
      }

      case actionTypes.HIDE_POPUP_LOGOUT: {
        return {
          ...state,
          popupLogout:false,
        };
      }

      case actionTypes.SHOW_POPUP_CHANGEPASSWORD: {
        return {
          ...state,
          popupChangePassword:true,
        };
      }

      case actionTypes.HIDE_POPUP_CHANGEPASSWORD: {
        return {
          ...state,
          popupChangePassword:false,
        };
      }


      default:
        return state;
    }
  }
);

export const actions = {
    updateDrawerOpen: (payload) => ({ type: actionTypes.UPDATE_DRAWER_OPEN,payload }),
    updateDarkMode: (payload) => ({ type: actionTypes.UPDATE_DARK_MODE,payload }),
    showPopupLogout: (payload) => ({ type: actionTypes.SHOW_POPUP_LOGOUT }),
    hidePopupLogout: (payload) => ({ type: actionTypes.HIDE_POPUP_LOGOUT }),
    showPopupChangePassword: (payload) => ({ type: actionTypes.SHOW_POPUP_CHANGEPASSWORD }),
    hidePopupChangePassword: (payload) => ({ type: actionTypes.HIDE_POPUP_CHANGEPASSWORD }),
};

