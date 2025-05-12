import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main className="home-container">
        <section className="home-hero">
          <h1>Welcome to BookBazaar</h1>
          <p>Your one-stop destination for amazing books at great prices.</p>
          <Link to="/book-list" className="hero-button">
            Browse Books
          </Link>
        </section>

        <section className="home-features">
          <div className="feature-card">
            <h3>Curated Collection</h3>
            <p>Handpicked titles for every reader. Quality guaranteed.</p>
          </div>
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Get your favorite books delivered quickly and safely.</p>
          </div>
          <div className="feature-card">
            <h3>Best Deals</h3>
            <p>Exclusive discounts and offers you won't find anywhere else.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
