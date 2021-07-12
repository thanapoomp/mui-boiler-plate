/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
import * as CONST from "../../../../Constant";

export default function Login(props) {
  // const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname;
  return (
          <Button
            size="large"
            onClick={() => {
              let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=300,height=450,left=200,top=200`;
              window.open(CONST.SSO_URL, "login", params);
            }}
          >
            login to siamsmile
          </Button>
  );
}
