import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Movies />} path="/movies" />
        <Route element={<MovieDetail />} path="/movies/:id" />
      </Routes>
    </>
  );
}

export default App;
