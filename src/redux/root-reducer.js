import { combineReducers } from "redux";
import mostPopularMoviesReducer from "./MostPopular/MostPopular.Reducer";
import topRatedsReducer from "./TopRated/TopRated.Reducer";
import searchReducer from "./Search/Search.Reducer";
const rootReducer = combineReducers({
  mostPopularMovies: mostPopularMoviesReducer,
  topRated: topRatedsReducer,
  search: searchReducer,
});

export default rootReducer;
