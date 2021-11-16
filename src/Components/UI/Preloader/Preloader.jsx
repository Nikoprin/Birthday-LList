import React from "react";
import classes from "./Preloader.module.css";
export default function Preloader() {
  return <div className={classes.lds_dual_ring}></div>;
}
