import { Component } from "react";
import { Row } from "react-bootstrap";
import GallerySon from "./GallerySon";
import Loading from "./Loading";
import Error from "./Error";

class Gallery extends Component {
  state = {
    searchSubject: this.props.search.split(" ").join("%20"),
    films: [],
    loading: false,
    error: false,
  };

  fetchFilms = async () => {
    this.setState({ loading: true });
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=102ac8fc&s=" + this.state.searchSubject);
      if (resp.ok) {
        const films = await resp.json();
        //console.log(films.Search);
        this.setState({ films: films.Search, loading: false });
      }
    } catch (err) {
      this.setState({ error: true, loading: false });
    }
  };

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    return (
      <>
        <h4 className="mt-4 fw-lighter text-white">{this.props.search}</h4>
        <Row className="g-1">
          {this.state.loading ? (
            <Loading></Loading>
          ) : this.state.error ? (
            <Error></Error>
          ) : (
            this.state.films.map((film, index) => (
              <GallerySon
                key={film.title}
                movieId={film.imdbID}
                index={index}
                cover={film.Poster}
                title={film.Title}
              ></GallerySon>
            ))
          )}
        </Row>
      </>
    );
  }
}

export default Gallery;
