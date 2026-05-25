import { Link } from "react-router";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
    <SiteHeader/>
    <section className="notfound-card">
      <h1>404</h1>
      <p>Doesn't exist</p>
    </section>
    <Footer/>
    </>
  );
}