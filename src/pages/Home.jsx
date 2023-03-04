import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return <div></div>;
}
