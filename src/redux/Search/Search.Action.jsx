import axios from "axios";
import searchTypes from "./Search.Types";

const { REACT_APP_BASE_URL, REACT_APP_APIKEY } = process.env;

const changeSearchVal = (newQuery) => ({
  type: searchTypes.CHANGE_SEARCH_VAL,
  payload: newQuery,
});

const sendSearchStart = () => ({
  type: searchTypes.SEND_SEARCH_START,
});

const sendSearchSuccess = (info) => ({
  type: searchTypes.SEND_SEARCH_SUCCESS,
  payload: info,
});
const clearSearch = () => ({
  type: searchTypes.SEND_SEARCH_CLEAR,
});
const sendSearchFailure = (error) => ({
  type: searchTypes.SEND_SEARCH_FAILED,
  payload: error,
});

const sendsearch = (question) => {
  return (dispatch) => {
    dispatch(sendSearchStart());
    axios({
      method: "get",
      url: `
       ${REACT_APP_BASE_URL}search/movie?api_key=${REACT_APP_APIKEY}&query=${question}`,
    })
      .then((resp) => {
        dispatch(sendSearchSuccess(resp.data.message));
        if (resp.data.status === 200) {
          dispatch(sendSearchSuccess(resp.data.message));
        } else {
          dispatch(sendSearchFailure(resp.data));
        }
      })
      .catch((error) =>
        dispatch(sendSearchFailure(error.response.data.result))
      );
  };
};

export { sendsearch, changeSearchVal, clearSearch };
