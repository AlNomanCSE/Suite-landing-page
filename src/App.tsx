import "./App.css";
import Cards from "./Components/Cards";
import ClientReview from "./Components/ClientReview";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Hero />
      <Cards />
      <ClientReview />
    </div>
  );
}

export default App;
