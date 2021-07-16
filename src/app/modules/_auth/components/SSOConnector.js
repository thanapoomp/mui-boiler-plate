/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Grid, Paper } from "@material-ui/core";
import * as CONST from "../../../../Constant";
import * as authRedux from "../_redux/authRedux";
import * as authCRUD from "../_redux/authCrud";

function SSOConnector(props) {
  const dispatch = useDispatch();
  const [ssoMessage, setSSOMessage] = React.useState({});
  const authReducer = useSelector(({ auth }) => auth);

  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );

  const handleLoggedIn = (token) => {
    let loginDetail = {};

    //get token
    loginDetail.authToken = token;

    //get user
    loginDetail.user = authCRUD.getUserByToken(token);

    // get exp
    let exp = authCRUD.getExp(token);
    loginDetail.exp = exp;

    //get roles
    loginDetail.roles = authCRUD.getRoles(token);

    dispatch(authRedux.actions.renewToken(loginDetail));
  };

  const handleLoggedOut = () => {
    dispatch(authRedux.actions.logout());
  };

  React.useEffect(() => {
    const handler = (event) => {
      if (event.origin === CONST.SSO_URL) {
        setSSOMessage(JSON.parse(event.data));
      }
    };
    window.addEventListener("message", handler);
    // clean up
    return () => window.removeEventListener("message", handler);
  }, []);

  React.useEffect(() => {
    if (ssoMessage.eventType === "token-updated") {
      if (
        ssoMessage.eventMessage !== "" &&
        ssoMessage.eventMessage !== "null" &&
        ssoMessage.eventMessage !== null
      ) {
        //set login
        if (ssoMessage.eventMessage !== authReducer.authToken) {
          console.log("token-updated:", ssoMessage.eventMessage);
          handleLoggedIn(ssoMessage.eventMessage);
        }
      } else {
        //set logout
        console.log("token-updated:", "logged-out");
        handleLoggedOut();
      }
      console.log("loaded");
    }
  }, [ssoMessage]);

  return (
    <React.Fragment>
      {isAuthorized && props.children}
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          lg={4}
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            elevation={3}
            style={{
              width: isAuthorized ? 400 : 400,
              height: isAuthorized ? 500 : 500,
              marginTop: 30,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="sso"
              src={CONST.SSO_URL}
            />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SSOConnector;
