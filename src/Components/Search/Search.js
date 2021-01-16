import React, { useState } from "react";
import classes from "./Search.module.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";
import { useHistory } from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";

const Search = (props) => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const search = (e) => {
    e.preventDefault();
    props.onTermChange(input);
    history.push("/search");
  };
  let InputClass;
  if (props.SearchPage) {
    InputClass = classes.SearchPage;
  } else {
    InputClass = classes.Input;
  }

  return (
    <form className={classes.Search}>
      <div className={InputClass}>
        <SearchIcon className={classes.SearchIcon}></SearchIcon>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <ClearIcon
          className={classes.ClearIcon}
          onClick={() => setInput("")}
        ></ClearIcon>
        <MicIcon></MicIcon>
      </div>
      {!props.hideButtons ? (
        <div className={classes.Buttons}>
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className={classes.Buttons}>
          <Button
            className={classes.hideButton}
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className={classes.hideButton} variant="outlined">
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    input: state.term,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTermChange: (input) =>
      dispatch({ type: actionTypes.SET_TERM, term: input }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
