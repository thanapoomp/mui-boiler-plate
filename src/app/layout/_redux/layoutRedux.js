import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  UPDATE_DRAWER_OPEN: "[UPDATE_DRAWER_OPEN] Action",
  UPDATE_DARK_MODE: '[UPDATE_DARK_MODE] Action'
};

const initialAuthState = {
  drawerOpen: false,
  darkMode: false
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

      default:
        return state;
    }
  }
);

export const actions = {
    updateDrawerOpen: (payload) => ({ type: actionTypes.UPDATE_DRAWER_OPEN,payload }),
    updateDarkMode: (payload) => ({ type: actionTypes.UPDATE_DARK_MODE,payload }),
};

