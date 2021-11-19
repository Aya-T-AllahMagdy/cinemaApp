import React, { useEffect } from "react";
import {
  sendsearch,
  changeSearchVal,
  clearSearch,
} from "./../redux/Search/Search.Action";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
function Search(props) {
  let history = useHistory();
  useEffect(() => {
    props.sendsearch(history.location.state);
    return () => {
      props.clearSearch();
    };
  }, [history.location.state]);
  return <div>search</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
