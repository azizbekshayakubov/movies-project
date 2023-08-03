import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import axios from "axios";

const Movie = () => {
  const [state, setState] = useState({
    isFetched: false,
    data: [],
    error: false,
  });
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "073fc8abaf5a1d219a0356d164958204",
        },
      })
      .then((res) => res)
      .then((data) => {
        setState({
          isFetched: true,
          data: data.data.results,
          error: false,
        }).catch((err) => {
          setState({
            isFetched: true,
            data: [],
            error: err.message,
          });
        });
      });
  }, []);
  console.log(state.data, "ssss");
  return (
    <div className="container mx-auto grid grid-cols-4 p-4">
      {state?.data?.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          date={movie.release_date}
          img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        />
      ))}
    </div>
  );
};

export default Movie;
