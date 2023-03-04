import api from "../api";
//thunk에서는 함수가 함수를 리턴하라고 한다
function getMovies() {
  return async (dispatch) => {
    const popularMovie = await api.get(
      `/movie/popular?api_key=${process.env.REACT_APP_MVDB_API_KEY}&language=en-US&page=1`
    );
    console.log(popularMovie);
    const topRelated = await api.get(
      `/movie/top_rated?api_key=${process.env.REACT_APP_MVDB_API_KEY}&language=en-US&page=1`
    );
    const upComing = await api.get(
      `/movie/upcoming?api_key=${process.env.REACT_APP_MVDB_API_KEY}&language=en-US&page=1`
    );
  };
}

export const movieAction = { getMovies };
