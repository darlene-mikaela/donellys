import { Link } from "react-router";
import { NavLink } from "react-router";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <SiteHeader />
      <section className="not-found">
        <h1>404</h1>
        <p>Page not found.</p>
        <NavLink to="/"><button>Go to Our Homepage</button></NavLink>
      </section>
      <Footer />
    </div>
  );
}