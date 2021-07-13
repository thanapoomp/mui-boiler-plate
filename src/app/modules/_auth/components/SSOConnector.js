/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as CONST from "../../../../Constant";
import * as authRedux from "../_redux/authRedux";
import * as authCRUD from "../_redux/authCrud";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

function SSOConnector(props) {
  const dispatch = useDispatch();
  const [ssoMessage, setSSOMessage] = React.useState({});
  const [isSSOLoaded, setIsSSOLoaded] = React.useState(false);

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
      if (ssoMessage.eventMessage !== "") {
        //set login
        handleLoggedIn(ssoMessage.eventMessage);
      } else {
        //set logout
        handleLoggedOut();
      }
      setIsSSOLoaded(true);
    }
  }, [ssoMessage]);

  return (
    <React.Fragment>
      <div>{isSSOLoaded && props.children}</div>
      <div>
        {!isSSOLoaded && (
          <React.Fragment>
            <Container style={{ height: 500 }}>
              <Grid
                container
                style={{ height: 500 }}
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item><CircularProgress /></Grid>
                <Grid item>
                  <Typography>Connecting to SSO Auth Service</Typography>
                </Grid>
              </Grid>
            </Container>
          </React.Fragment>
        )}
      </div>
      <iframe
        width="0"
        height="0"
        frameBorder="0"
        title="sso"
        src={CONST.SSO_URL}
      />
    </React.Fragment>
  );
}

export default SSOConnector;
