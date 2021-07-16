import React from "react";
import {Dialog,Grid,Paper} from "@material-ui/core/";
import Slide from "@material-ui/core/Slide";
import { useSelector, useDispatch } from "react-redux";
import * as layoutRedux from '../_redux/layoutRedux'
import * as CONST from '../../../Constant'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopupLogout() {
  const dispatch = useDispatch();
  const layoutReducer = useSelector(({ layout }) => layout);

  const handleClose = () => {
    dispatch(layoutRedux.actions.hidePopupLogout())
  };

  return (
    <div>
      <Dialog
        open={layoutReducer.popupLogout}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
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
          lg={12}
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Paper
            elevation={3}
            style={{
              width: 400,
              height: 500,
            }}
          >
            <iframe
              width="400"
              height="480"
              frameBorder="0"
              title="sso"
              src={CONST.SSO_URL_LOGOUT}
            />
          </Paper>
        </Grid>
      </Grid>
      </Dialog>
    </div>
  );
}
