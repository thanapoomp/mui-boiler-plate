import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from '@material-ui/core/Divider'
import List from "@material-ui/core/List";
import MenuItem from "./components/MenuItem";
import ParentsMenu from "./components/ParentsMenu";
import {ROLES} from '../../Constant'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function ASideMenuList() {
  const classes = useStyles();

  return (
    <List
      dense
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListSubheader component="div" id="nested-list-subheader">
        Menu
      </ListSubheader>
      <Divider/>

      <MenuItem iconName="home" text="Home" path="/"></MenuItem>
      
      {/* Demo */}
      <ParentsMenu iconName="star" text="Demo">
        <MenuItem iconName="star" text="OnlyAdmin" path="/onlyAdmin" roles={[ROLES.admin]}></MenuItem>
        <MenuItem iconName="star" text="Alert" path="/demo/alert"></MenuItem>
        <MenuItem iconName="star" text="Form Components" path="/demo/formDemo"></MenuItem>
        <MenuItem iconName="star" text="Data Table" path="/demo/datatableList"></MenuItem>
        <MenuItem iconName="star" text="Pdf Generate" path="/demo/pdfGenerrate"></MenuItem>
        <MenuItem iconName="star" text="QR Generate" path="/demo/QRGenerateDemo"></MenuItem>
        <MenuItem iconName="star" text="QR Reader" path="/demo/QRReaderDemo"></MenuItem>
        <MenuItem iconName="star" text="Chart Basic" path="/demo/apexcharts"></MenuItem>
        <MenuItem iconName="star" text="Chart DrillDown" path="/demo/chartDrillDown"></MenuItem>
        <MenuItem iconName="star" text="Print Component" path="/demo/PrintComponent"></MenuItem>
        <MenuItem iconName="star" text="Barcode Generate" path="/demo/BarcodeGenerateDemo"></MenuItem>
        <MenuItem iconName="star" text="Redux Basic" path="/demo/reduxDemo"></MenuItem>
        <MenuItem iconName="star" text="Tab Basic" path="/demo/tabBasic"></MenuItem>
      </ParentsMenu>
      {/* End demo */}

    </List>
  );
}
