import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import TopSection from "./components/TopSection";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/ProfilePage/Profile";
import Settings from "./components/SettingsPage/Settings";
import TvShows from "./components/TvShows";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark" style={{ minHeight: "100vh" }}>
        <TopBar></TopBar>
        <Container>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/tv-shows" element={<TvShows></TvShows>} />
            <Route path="/settings" element={<Settings></Settings>} />
            <Route path="/profile" element={<Profile></Profile>} />
            <Route path="/movie-details/:movieId" element={<MoviePage></MoviePage>} />
          </Routes>
          <Footer></Footer>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
