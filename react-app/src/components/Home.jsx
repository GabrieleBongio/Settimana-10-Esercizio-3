import Gallery from "./Gallery";
import TopSection from "./TopSection";

const Home = () => (
  <>
    <TopSection></TopSection>
    <Gallery search="Harry Potter"></Gallery>
    <Gallery search="Lord of The Rings"></Gallery>
    <Gallery search="Star Wars"></Gallery>
  </>
);

export default Home;
