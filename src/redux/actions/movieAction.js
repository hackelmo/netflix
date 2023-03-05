import api from "../api";
//thunk에서는 함수가 함수를 리턴하라고 한다
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popular = api.get(
        `/movie/popular?api_key=${process.env.REACT_APP_MVDB_API_KEY}&language=en-US&page=1`
      );

      const topRelated = api.get(
        `/movie/top_rated?api_key=${process.env.REACT_APP_MVDB_API_KEY}&language=en-US&page=1`
      );
      const upComing = api.get(
        `/movie/upcoming?api_key=${process.env.REACT_APP_MVDB_API_KEY}&language=en-US&page=1`
      );

      const genreList = api.get(
        `/genre/movie/list?api_key=${process.env.REACT_APP_MVDB_API_KEY}&language=en-US`
      );

      const [popularMovies, topRatedMovies, upcomingMovies, genreListMovies] =
        await Promise.all([popular, topRelated, upComing, genreList]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          genreListMovies: genreListMovies.data.genres,
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
        },
      });
    } catch (err) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

export const movieAction = { getMovies };
