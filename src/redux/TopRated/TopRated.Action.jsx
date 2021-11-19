import TopRatedTypes from "./TopRated.Types";
import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_APIKEY } = process.env;

const getTopRatedStart = () => ({
  type: TopRatedTypes.GET_TOP_RATED_START,
});

const getTopRatedSuccess = (info) => ({
  type: TopRatedTypes.GET_TOP_RATED_SUCCESS,
  payload: info.results,
});

const getTopRatedFailure = (error) => ({
  type: TopRatedTypes.GET_TOP_RATED_FAILED,
  payload: error,
});

const getTopRated = () => (dispatch) => {
  dispatch(getTopRatedStart());
  axios({
    method: "get",
    url: `${REACT_APP_BASE_URL}movie/top_rated?api_key=${REACT_APP_APIKEY}`,
  })
    .then((resp) => {
      if (resp.status === 200) {
        dispatch(getTopRatedSuccess(resp.data));
      } else {
        dispatch(getTopRatedFailure(resp.statusText));
      }
    })
    .catch((error) => dispatch(getTopRatedFailure(error)));
};

export { getTopRated };
