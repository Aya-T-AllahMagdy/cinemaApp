import MostPopularTypes from "./MostPopular.Types";
import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_APIKEY } = process.env;

const getMostPopularStart = () => ({
  type: MostPopularTypes.GET_MOST_POPULAR_START,
});

const getMostPopularSuccess = (info) => ({
  type: MostPopularTypes.GET_MOST_POPULAR_SUCCESS,
  payload: info.results,
});

const getMostPopularFailure = (error) => ({
  type: MostPopularTypes.GET_MOST_POPULAR_FAILED,
  payload: error,
});

const getMostPopular = () => (dispatch) => {
  dispatch(getMostPopularStart());
  axios({
    method: "get",
    url: `${REACT_APP_BASE_URL}movie/popular?api_key=${REACT_APP_APIKEY}`,
  })
    .then((resp) => {
      if (resp.status === 200) {
        dispatch(getMostPopularSuccess(resp.data));
      } else {
        dispatch(getMostPopularFailure(resp.statusText));
      }
    })
    .catch((error) => dispatch(getMostPopularFailure(error)));
};

export { getMostPopular };
