import { Col, Row } from "react-bootstrap";
import SvgFacebook from "./SvgFacebook";
import SvgInstagram from "./SvgInstagram";
import SvgTwitter from "./SvgTwitter";
import SvgYoutube from "./SvgYoutube";

const Footer = () => (
  <footer className="my-5">
    <Row className="justify-content-center">
      <Col xs={10} sm={8} lg={6}>
        <div className="fluid">
          <div className="d-flex gap-2 my-3">
            <SvgFacebook></SvgFacebook>
            <SvgInstagram></SvgInstagram>
            <SvgTwitter></SvgTwitter>
            <SvgYoutube></SvgYoutube>
          </div>
          <div className="row">
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Audio and Subtitles
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Audio Description
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Help Center
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Gift Cards
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Media Center
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Investor Relations
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Jobs
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Terms of Use
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Privacy
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Legal Notices
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Cookie Preference
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Corporate Information
              </p>
            </div>
            <div className="col-6 col-sm-4 col-md-3">
              <p className="text-white opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
                Contact Us
              </p>
            </div>
          </div>
          <button
            className="btn btn-black text-white border border-1 border-white opacity-75 rounded-0"
            style={{ fontSize: "0.6rem" }}
          >
            Service Code
          </button>
          <p className="text-white fs-11 my-3 opacity-75 cursor-pointer" style={{ fontSize: "0.6rem" }}>
            &copy; 1997-2019 Netflix, Inc.
          </p>
        </div>
      </Col>
    </Row>
  </footer>
);

export default Footer;
