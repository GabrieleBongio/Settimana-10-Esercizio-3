import { Button, Col, Container, Row } from "react-bootstrap";
import TopBar from "./components/TopBar";
import SvgPaypal from "./components/SvgPaypal";

const Settings = () => (
  <>
    <Container fluid className="bg-white">
      <Row>
        <Col xs={12} md={9} className="offset-md-2 mt-5">
          <h1 className="display-4 border-bottom border-1 pb-3 mb-0">Account</h1>
          <div className="border-bottom py-2">
            <Row>
              <Col xs={12} sm={4}>
                <div className="mb-3 mb-sm-0">
                  <h4 className="text-uppercase text-secondary opacity-50">Membership & billing</h4>
                  <Button
                    variant="light"
                    className="border border-1 border-secondary border-opacity-50 rounded-0 text-black"
                  >
                    Cancel Membership
                  </Button>
                </div>
              </Col>
              <Col xs={12} sm={8}>
                <div className="d-sm-flex justify-content-between" style={{ fontSize: "0.9rem" }}>
                  <p className="my-1">student@strive.school</p>
                  <a href="#" className="text-info text-decoration-none d-block my-1 text-end">
                    Change account email
                  </a>
                </div>
                <div className="d-sm-flex justify-content-between" style={{ fontSize: "0.9rem" }}>
                  <p className="opacity-50 my-1">Password: *********</p>
                  <a href="#" className="text-info text-decoration-none d-block my-1 text-end">
                    Change password
                  </a>
                </div>
                <div
                  className="d-sm-flex justify-content-between pb-1 border-bottom mb-1"
                  style={{ fontSize: "0.9rem" }}
                >
                  <p className="opacity-50 my-1">Phone: 3210441279</p>
                  <a href="#" className="text-info text-decoration-none d-block my-1 text-end">
                    Change phone number
                  </a>
                </div>
                <div className="d-sm-flex justify-content-between" style={{ fontSize: "0.9rem" }}>
                  <p className="my-1">
                    <SvgPaypal></SvgPaypal>
                    PayPal admin@strive.school
                  </p>
                  <a href="#" className="text-info text-decoration-none d-block my-1 text-end">
                    Change payment info
                  </a>
                </div>
                <div className="d-flex justify-content-between pb-1 border-bottom mb-1" style={{ fontSize: "0.9rem" }}>
                  <p className="opacity-50 my-1"></p>
                  <a href="#" className="text-info text-decoration-none d-block my-1">
                    Billing details
                  </a>
                </div>
                <div className="d-flex justify-content-between" style={{ fontSize: "0.9rem" }}>
                  <p className="my-1"></p>
                  <a href="#" className="text-info text-decoration-none d-block my-1">
                    Redeem gift card or promo code
                  </a>
                </div>
                <div className="d-flex justify-content-between" style={{ fontSize: "0.9rem" }}>
                  <p className="opacity-50 my-1"></p>
                  <a href="#" className="text-info text-decoration-none d-block my-1">
                    Where to buy gift cards
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="border-bottom py-2">
            <Row>
              <Col xs={12} sm={4}>
                <div className="mb-3 mb-sm-0">
                  <h4 className="text-uppercase text-secondary opacity-50 mb-0">Plan Details</h4>
                </div>
              </Col>
              <Col xs={12} sm={8}>
                <div className="d-flex justify-content-between" style={{ fontSize: "0.9rem" }}>
                  <p className="my-1">
                    Premium <span className="border border-2">ULTRA HD</span>
                  </p>
                  <a href="#" className="text-info text-decoration-none d-block my-1">
                    Change plan
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="border-bottom py-2">
            <Row>
              <Col xs={12} sm={4}>
                <div className="mb-3 mb-sm-0">
                  <h4 className="text-uppercase text-secondary opacity-50">Settings</h4>
                </div>
              </Col>
              <Col xs={12} sm={8}>
                <div style={{ fontSize: "0.9rem" }}>
                  <a href="#" className="text-info text-decoration-none d-block my-1">
                    Parental controls
                  </a>
                  <a href="#" className="text-info text-decoration-none d-block my-1">
                    Test partecipation
                  </a>
                  <a href="#" className="text-info text-decoration-none d-block my-1">
                    Manage download devices
                  </a>
                  <a href="#" className="text-info text-decoration-none d-block my-1">
                    Activate a device
                  </a>
                  <a href="#" className="text-info text-decoration-none d-block my-1">
                    Recent device streaming activity
                  </a>
                  <a href="#" className="text-info text-decoration-none d-block my-1">
                    Sign out of all devices
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="border-bottom py-2">
            <Row>
              <Col xs={12} sm={4}>
                <div className="mb-3 mb-sm-0">
                  <h4 className="text-uppercase text-secondary opacity-50 mb-0">My Profile</h4>
                </div>
              </Col>
              <Col xs={12} sm={8}>
                <div className="d-flex justify-content-between" style={{ fontSize: "0.9rem" }}>
                  <p className="my-1">
                    <img
                      src="assets/img/avatar.jpg"
                      alt="immagine profilo"
                      className="me-1"
                      style={{ maxHeight: "40px" }}
                    />
                    Strive Student
                  </p>
                  <div>
                    <a href="#" className="text-info text-decoration-none d-block">
                      Manage profile
                    </a>
                    <a href="#" className="text-info text-decoration-none d-block">
                      Add profile email
                    </a>
                  </div>
                </div>
                <Row>
                  <Col xs={6}>
                    <div>
                      <a href="#" className="text-info text-decoration-none d-block my-1">
                        Language
                      </a>
                      <a href="#" className="text-info text-decoration-none d-block my-1">
                        Playback settings
                      </a>
                      <a href="#" className="text-info text-decoration-none d-block my-1">
                        Subtitle appearance
                      </a>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div>
                      <a href="#" className="text-info text-decoration-none d-block my-1">
                        Viewing activity
                      </a>
                      <a href="#" className="text-info text-decoration-none d-block my-1">
                        Ratings
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default Settings;
