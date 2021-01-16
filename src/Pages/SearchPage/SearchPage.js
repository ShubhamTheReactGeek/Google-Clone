import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import useGoogleSearch from "../../useGoogleSearch";
import classes from "./SearchPage.module.css";
import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SearchPage = (props) => {
  const redirectHandler = () => {
    <Redirect to="/"></Redirect>;
  };

  const data = useGoogleSearch(props.term);
  return (
    <div className={classes.SearchPage}>
      <div className={classes.Header}>
        <Link to="/">
          <img
            className={classes.SearchLogo}
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          ></img>
        </Link>
        <div className={classes.HeaderBody}>
          <Search hideButtons SearchPage></Search>
          <div className={classes.Options}>
            <div className={classes.OptionsLeft}>
              <div className={classes.Option}>
                <SearchIcon />
                <Link to="/all" onClick={redirectHandler}>
                  All
                </Link>
              </div>
              <div className={classes.Option}>
                <DescriptionIcon />
                <Link to="/news" onClick={redirectHandler}>
                  News
                </Link>
              </div>
              <div className={classes.Option}>
                <ImageIcon />
                <Link to="/images" onClick={redirectHandler}>
                  Images
                </Link>
              </div>
              <div className={classes.Option}>
                <LocalOfferIcon />
                <Link to="/shopping" onClick={redirectHandler}>
                  Shopping
                </Link>
              </div>
              <div className={classes.Option}>
                <RoomIcon />
                <Link to="/maps" onClick={redirectHandler}>
                  Maps
                </Link>
              </div>
              <div className={classes.Option}>
                <MoreVertIcon />
                <Link to="/more" onClick={redirectHandler}>
                  More
                </Link>
              </div>
            </div>
            <div className={classes.OptionsRight}>
              <div className={classes.Option}>
                <Link to="/settings" onClick={redirectHandler}>
                  Settings
                </Link>
              </div>
              <div className={classes.Option}>
                <Link to="/tools" onClick={redirectHandler}>
                  Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data.data && props.term ? (
        <div className={classes.Results}>
          <p className={classes.ResultCount}>
            About {data?.data.searchInformation.formattedTotalResults} results (
            {data?.data.searchInformation.formattedSearchTime}seconds) for{" "}
            {props.term}
          </p>
          {data?.data.items.map((item) => {
            return (
              <div key={item.link} className={classes.Result}>
                <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className={classes.ResultImage}
                        src={item.pagemap?.cse_image[0]?.src}
                        alt=""
                      ></img>
                    )}
                  {item.displayLink}
                </a>
                <a className={classes.ResultTitle} href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className={classes.ResultSnippet}>{item.snippet}</p>
              </div>
            );
          })}
        </div>
      ) : (
        props.term && <div class={classes.loader}>Loading...</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    term: state.term,
  };
};
export default connect(mapStateToProps)(SearchPage);
