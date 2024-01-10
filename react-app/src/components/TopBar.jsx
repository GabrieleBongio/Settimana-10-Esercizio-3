import { Container, DropdownButton, Nav, Navbar } from "react-bootstrap";
import SvgSearch from "./SvgSearch";
import SvgBell from "./SvgBell";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();

  return (
    <Navbar expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="assets/img/netflix_logo.png" alt="Netflix Logo" style={{ maxHeight: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-white">
          <Nav className="me-auto">
            <Link className={`nav-link text-white ${location.pathname === "/" ? "" : "opacity-75"} `} to="/">
              Home
            </Link>
            <Link
              className={`nav-link text-white ${location.pathname === "/tv-shows" ? "" : "opacity-75"} `}
              to="/tv-shows"
            >
              Tv Shows
            </Link>
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
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
            <Link to="/settings" className="dropdown-item">
              Settings
            </Link>
          </DropdownButton>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopBar;
