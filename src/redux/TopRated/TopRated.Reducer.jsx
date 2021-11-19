import TopRatedTypes from "./TopRated.Types";
const INITIAL_STATE = {
  topRated: "",
  isFetchingtopRated: true,
  topRatedFailure: null,
};
const topRatedsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TopRatedTypes.GET_TOP_RATED_START:
      return {
        ...state,
        isFetchingtopRated: true,
      };
    case TopRatedTypes.GET_TOP_RATED_SUCCESS:
      return {
        ...state,
        topRated: action.payload,
        isFetchingtopRated: false,
        topRatedFailure: false,
      };
    case TopRatedTypes.GET_TOP_RATED_FAILED:
      return {
        ...state,
        isFetchingtopRated: false,
        topRatedFailure: false,
      };
    default:
      return state;
  }
};

export default topRatedsReducer;
