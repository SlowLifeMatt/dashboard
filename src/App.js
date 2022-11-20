import "./styles.css";
import Navigation from "./Navigation";
import Reviews from "./Reviews";

export default function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <section className="dashboard">
        <section className="nav">
          <Navigation />
        </section>
        <section className="reviews">
            <Reviews />
        </section>
      </section>
    </div>
  );
}
