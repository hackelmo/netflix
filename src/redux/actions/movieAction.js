import api from "../api";
//thunk에서는 함수가 함수를 리턴하라고 한다
function getMovies() {
  return async (dispatch) => {
    const popular = api.get(
      `/movie/popular?api_key=${process.env.REACT_APP_MVDB_API_KEY}&language=en-US&page=1`
    );

    const topRelated = api.get(
      `/movie/top_rated?api_key=${process.env.REACT_APP_MVDB_API_KEY}&language=en-US&page=1`
    );
    const upComing = api.get(
      `/movie/upcoming?api_key=${process.env.REACT_APP_MVDB_API_KEY}&language=en-US&page=1`
    );

    const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      popular,
      topRelated,
      upComing,
    ]);

    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popularMovies: popularMovies.data,
        topRatedMovies: topRatedMovies.data,
        upcomingMovies: upcomingMovies.data,
      },
    });
  };
}

export const movieAction = { getMovies };
