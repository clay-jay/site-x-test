import React from "react"
import { Divider, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import DeliveryIcon from "../../images/deliveryIcon.svg"
import DeliveryCards from "../delivery"
import "@fontsource/inter"

const useStyles = makeStyles({
  container: {
    padding: "16px",
    display: "flex",
    alignItems: "center",
  },

  title: {
    margin: "0px",
    fontFamily: "Inter",
    fontSize: 36,
    fontWeight: "700",
    color: "black",
    "@media (max-width:767px)": {
      fontSize: 20,
    },
  },

  icon: {
    marginRight: "10px",
    marginBottom: "0px",
    "@media (max-width:767px)": {
      width: "22.22px",
      height: "24px",
    },
  },

  divider: {
    backgroundColor: "#BDBDC6",
    margin: "0 16px 16px 16px",

  },
})

export default function DescriptionBlock(props) {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <img src={props.icon} className={classes.icon} />
          <Typography className={classes.title}>{props.title}</Typography>
        </div>
        <Divider className={classes.divider} />
      </div>
    </>
  )
}
