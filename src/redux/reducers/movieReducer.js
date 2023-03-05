const initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  genreListMovies: {},
  loading: true,
};

function movieReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreListMovies: payload.genreListMovies,
      };
    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
