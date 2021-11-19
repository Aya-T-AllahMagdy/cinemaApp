import MostPopularTypes from "./MostPopular.Types";
const INITIAL_STATE = {
  mostPopularMovies: "",
  isFetchingMostPopularMovies: true,
  mostPopularMoviesFailure: null,
};

const mostPopularMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MostPopularTypes.GET_MOST_POPULAR_START:
      return {
        ...state,
        isFetchingMostPopularMovies: true,
      };
    case MostPopularTypes.GET_MOST_POPULAR_SUCCESS:
      return {
        ...state,
        mostPopularMovies: action.payload,
        isFetchingMostPopularMovies: false,
        mostPopularMoviesFailure: false,
      };
    case MostPopularTypes.GET_MOST_POPULAR_FAILED:
      return {
        ...state,
        isFetchingMostPopularMovies: false,
        mostPopularMoviesFailure: false,
      };
    default:
      return state;
  }
};

export default mostPopularMoviesReducer;
