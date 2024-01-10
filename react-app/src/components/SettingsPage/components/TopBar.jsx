import { Container, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
import SvgSearch from "./SvgSearch";
import SvgBell from "./SvgBell";

const TopBar = () => (
  <Navbar expand="md" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img src="assets/img/netflix_logo.png" alt="Netflix Logo" style={{ maxHeight: "40px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-white">
        <Nav className="me-auto">
          <Nav.Link className="text-white opacity-75" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="text-white" href="#tvshows">
            Tv Shows
          </Nav.Link>
          <Nav.Link className="text-white opacity-75" href="#movies">
            Movies
          </Nav.Link>
          <Nav.Link className="text-white opacity-75" href="#recentlyAdded">
            Recently Added
          </Nav.Link>
          <Nav.Link className="text-white opacity-75" href="#myList">
            My List
          </Nav.Link>
        </Nav>
        <div className="d-flex align-items-center gap-2 d-sm-none mb-2 mb-sm-0">
          <SvgSearch></SvgSearch>
          <p className="m-0 text-white">KIDS</p>
          <SvgBell></SvgBell>
        </div>
      </Navbar.Collapse>
      <div className="d-flex align-items-center gap-2">
        <div className="align-items-center gap-2 d-none d-sm-flex">
          <SvgSearch></SvgSearch>
          <p className="m-0 text-white">KIDS</p>
          <SvgBell></SvgBell>
        </div>
        <DropdownButton
          menuVariant="dark"
          drop="down-centered"
          variant="dark"
          title={
            <img
              src="assets/img/avatar.jpg"
              alt="immagine profilo"
              className="border border-1 border-white"
              style={{ maxHeight: "40px" }}
            />
          }
        >
          <Dropdown.Item eventKey="#">Profile</Dropdown.Item>
          <Dropdown.Item eventKey="#">Settings</Dropdown.Item>
        </DropdownButton>
      </div>
    </Container>
  </Navbar>
);

export default TopBar;
