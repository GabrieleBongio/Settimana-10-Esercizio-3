import { useEffect } from "react";
import { useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

const MovieComments = (props) => {
  const [filmComments, setFilmComments] = useState(null);

  const fetchComments = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.movieId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzc4ZDBkOGEyMDAwMThhNDhhMzYiLCJpYXQiOjE3MDQ3MTk0NjMsImV4cCI6MTcwNTkyOTA2M30.oMBXsd2e5xf8MtNXwcZiUmrBOrsAm8adped1kKCNq9w",
        },
      });
      if (resp.ok) {
        const fetchedComments = await resp.json();
        console.log(fetchedComments);
        setFilmComments(fetchedComments);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} className="text-center">
          <h4 className="text-white">Commenti:</h4>
          <ListGroup>
            {filmComments &&
              filmComments.map((comment) => (
                <ListGroup.Item key={`${comment._id} - ${comment.elementId}`}>
                  <p className="m-0 text-start">
                    {comment.rate} <br></br> {comment.comment}
                  </p>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default MovieComments;
