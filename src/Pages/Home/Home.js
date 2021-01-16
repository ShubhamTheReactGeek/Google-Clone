import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import Search from "../../Components/Search/Search";

const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.Header}>
        <div className={classes.HeaderLeft}>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className={classes.HeaderRight}>
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon className={classes.AppIcon}></AppsIcon>
          <Avatar></Avatar>
        </div>
      </div>
      <div className={classes.Body}>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        ></img>
        <div className={classes.InputContainer}>
          <Search hideButtons={false}></Search>
        </div>
      </div>
    </div>
  );
};

export default Home;
