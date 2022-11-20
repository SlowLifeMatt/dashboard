import "./styles.css";
import Navigation from "./Navigation";
import Reviews from "./Reviews";
import Rating from "./Rating";
import Analysis from "./Analysis";
import Visitors from "./Visitors";

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
