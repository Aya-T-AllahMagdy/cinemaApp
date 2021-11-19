import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Spinner, Form, Button } from "react-bootstrap";
import axios from "axios";
import { debounce, result } from "lodash";
import {
  sendsearch,
  changeSearchVal,
  clearSearch,
} from "./../../redux/Search/Search.Action";
import { NavLink, Link, useHistory } from "react-router-dom";
import CardComponent from "../CardComponent/CardComponent";
function SearchComponent(props) {
  const [search, setSearch] = useState();
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push(`/search/${search}`, search);
  };
  useEffect(() => {
    props.sendsearch(search);
    return () => {
      props.clearSearch();
    };
  }, [search]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          id="filled-basic"
          value={search}
          label="Search a Word"
          onChange={(e) => [e.preventDefault(), setSearch(e.target.value)]}
        />
      </form>
      {
        props.isSendingSearch ? (
          ""
        ) : (
          <CardComponent sendSearchState={props.sendSearchState?.results} />
        )
        // props.sendSearchState?.results.map((data) => <div>{data.title}</div>)
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchVal: state.search.searchVal,
  isSendingSearch: state.search.isSendingSearch,
  sendSearchState: state.search.sendSearchState,
});

const mapDispatchToProps = (dispatch) => ({
  sendsearch: (question) => dispatch(sendsearch(question)),
  changeSearchVal: (newQuery) => dispatch(changeSearchVal(newQuery)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
