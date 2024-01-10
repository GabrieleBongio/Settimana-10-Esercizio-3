import { useEffect } from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const MovieDetails = (props) => {
  const [filmDetail, setFilmDetail] = useState(null);

  const fetchDetails = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=102ac8fc&i=" + props.movieId);
      if (resp.ok) {
        const fetchedDetails = await resp.json();
        console.log(fetchedDetails);
        setFilmDetail(fetchedDetails);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="mt-5">
      <Row className="justify-content-center">
        {filmDetail && (
          <Col xs={10} className="text-center">
            <h2 className="text-white">{filmDetail.Title}</h2>
            <img src={filmDetail.Poster} alt="copertina" className="img-fluid"></img>
            <p className="text-white mt-2">
              {filmDetail.Year} | {filmDetail.Ratings[0].Value}
            </p>
            <p className="text-white mt-4 text-start">{filmDetail.Plot}</p>
            <p className="text-white mt-4 text-start">{filmDetail.Awards}</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default MovieDetails;
