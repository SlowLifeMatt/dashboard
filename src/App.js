import "./styles.css";
import Navigation from "./Components/Navigation";
import Reviews from "./Components/Reviews";
import Rating from "./Components/Rating";
import Analysis from "./Components/Analysis";
import Visitors from "./Components/Visitors";

export default function App() {
  return (
    <div className="App">
      <h1>SlowLifeMatt's Dashboard</h1>
      <section className="dashboard">      
          <Navigation />
            <Reviews />
            <Rating />
            <Analysis />
            <Visitors />
 
      </section>
    </div>
  );
}
