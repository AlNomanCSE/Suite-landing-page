import "./App.css";
import Cards from "./Components/Cards";
import ClientReview from "./Components/ClientReview";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import PicturesGrid from "./Components/PicturesGrid";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Hero />
      <Cards />
      <ClientReview />
      <PicturesGrid />
      <Footer />
    </div>
  );
}

export default App;
