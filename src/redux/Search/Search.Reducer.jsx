import searchTypes from "./Search.Types";

const INITIAL_STATE = {
  searchVal: "",
  isSendingSearch: true,
  sendSearchState: "",
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchTypes.CHANGE_SEARCH_VAL:
      return {
        ...state,
        searchVal: action.payload,
      };
    case searchTypes.SEND_SEARCH_CLEAR:
      return {
        ...state,
        searchVal: [],
        isSendingSearch: false,
        sendSearchState: "",
      };
    case searchTypes.SEND_SEARCH_START:
      return {
        ...state,
        isSendingSearch: true,
      };
    case searchTypes.SEND_SEARCH_SUCCESS:
      return {
        ...state,
        searchVal: "",
        isSendingSearch: false,
        sendSearchState: action.payload,
      };
    case searchTypes.SEND_SEARCH_FAILED:
      return {
        ...state,
        isSendingSearch: false,
        sendSearchState: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
