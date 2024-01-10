import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import MovieComments from "./MovieComments";

const MoviePage = () => {
  const params = useParams();

  return (
    <>
      <MovieDetails movieId={params.movieId}></MovieDetails>
      <MovieComments movieId={params.movieId}></MovieComments>
    </>
  );
};

export default MoviePage;
