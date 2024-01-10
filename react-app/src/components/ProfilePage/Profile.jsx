import { Button, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import SpanMatita from "./components/SpanMatita";

const Profile = () => (
  <Container fluid>
    <Row>
      <Col xs={10} sm={9} md={7} className="offset-1 offset-sm-2 offset-md-3">
        <h1 className="text-white border-bottom border-1 border-white border-opacity-25 display-1">Edit Profile</h1>
        <div className="pb-4 border-bottom border-1 border-white border-opacity-25">
          <Row>
            <Col xs={12} sm={3}>
              <div className="position-relative d-flex align-items-start gap-2 mb-3 mb-sm-0 d-sm-block">
                <div className="flex-shrink-1">
                  <img src="assets/img/avatar.jpg" alt="immagine profilo" className="img-fluid" />
                </div>
                <SpanMatita></SpanMatita>
                <p className="fs-4 bg-secondary px-3 py-1 mb-4 d-sm-none flex-grow-1 flex-shrink-0">Strive Student</p>
              </div>
            </Col>
            <Col xs={12} sm={9}>
              <div className="pe-sm-5">
                <p className="text-white fs-4 bg-secondary px-3 py-1 mb-4 d-none d-sm-block">Strive Student</p>
                <p className="text-white opacity-75">Language:</p>
                <DropdownButton variant="secondary" menuVariant="dark" drop="down-center" title="English">
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Italiano</Dropdown.Item>
                  <Dropdown.Item>Francois</Dropdown.Item>
                  <Dropdown.Item>Deutsch</Dropdown.Item>
                  <Dropdown.Item>Español</Dropdown.Item>
                  <Dropdown.Item>中国人</Dropdown.Item>
                  <Dropdown.Item>日本語</Dropdown.Item>
                </DropdownButton>
                <p className="text-white mt-3 opacity-75 border-top border-1 border-white border-opacity-25 pt-3">
                  Maturity Settings:
                </p>
                <p
                  className="text-white d-inline-block bg-secondary text-uppercase px-2 py-1"
                  style={{ fontSize: "0.8rem" }}
                >
                  All Maturity Ratings
                </p>
                <p className="text-white">
                  Show titles of <span className="fw-medium">all maturity ratings</span> for this profile.
                </p>
                <Button
                  variant="dark"
                  className="text-white border border-1 border-white opacity-75 text-uppercase rounded-0 px-4 py-1"
                >
                  Edit
                </Button>
                <div className="border-bottom border-1 border-white border-opacity-25 py-3"></div>
                <p className="text-white mt-4 fs-5 mb-0 opacity-75">Autoplay controls</p>
                <div className="form-check d-flex align-items-center gap-2">
                  <input
                    className="opacity-75 form-check-input rounded-0 p-3 bg-dark border-white border-opacity-25"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked
                  />
                  <label className="text-white opacity-75 form-check-label" for="flexCheckDefault">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div className="form-check d-flex align-items-center gap-2">
                  <input
                    className="form-check-input rounded-0 p-3 bg-dark border-white border-opacity-25 opacity-75"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className="text-white form-check-label opacity-75" for="flexCheckChecked">
                    Autoplay previous while browsing on all devices.
                  </label>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="mt-4 mb-5 g-2">
          <Col xs={6} sm={3}>
            <Button variant="light" className="bg-white text-black text-uppercase fw-semibold rounded-0 w-100 py-2">
              Save
            </Button>
          </Col>
          <Col sx={6} sm={4}>
            <Button
              variant="dark"
              className="text-white border border-1 border-opacity-50 border-white text-uppercase fw-semibold rounded-0 w-100 py-2 opacity-50"
            >
              Cancel
            </Button>
          </Col>
          <Col sx={12} sm={5}>
            <Button
              variant="dark"
              className="text-white border border-1 border-opacity-50 border-white text-uppercase fw-semibold rounded-0 w-100 py-2 opacity-50"
            >
              Delete Profile
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Profile;
