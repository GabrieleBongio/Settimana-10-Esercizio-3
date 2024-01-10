import { Link } from "react-router-dom";

const GallerySon = (props) => (
  <div
    className={
      props.index < 2
        ? "col-6 col-sm-4 col-md-3 col-xl-2"
        : props.index < 3
        ? "col-6 col-sm-4 col-md-3 col-xl-2 d-none d-sm-block"
        : props.index < 4
        ? "col-6 col-sm-4 col-md-3 col-xl-2 d-none d-md-block"
        : props.index < 6
        ? "col-6 col-sm-4 col-md-3 col-xl-2 d-none d-xl-block"
        : "d-none"
    }
  >
    <div>
      <Link to={`/movie-details/${props.movieId}`}>
        <img className="img-fluid cursor-pointer" src={props.cover} alt={props.title} />
      </Link>
    </div>
  </div>
);

export default GallerySon;
