import TopSection from "./TopSection";
import { Form, Row, Col } from "react-bootstrap";

const TvShows = () => {
  return (
    <>
      <TopSection></TopSection>
      <div className="mt-5">
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default TvShows;
