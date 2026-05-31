import { Link, NavLink } from "react-router";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import Menus from "./Menus";
import SignatureCards from "../components/SingatureCards";
import TestimonyCards from "../components/TestimonyCards";

export default function Home() {
    return (<>
        <SiteHeader />
        <div className="home-content">
            <div className="intro">
                <div className="container">
                    <span className="announcement">📢 Next Pre-Order Batch Opens Friday, 10:00 AM</span>
                    <h1 className="headline">Freshly Baked Happiness</h1>
                    <p className="sub-headline">Indulge in our premium artisan pastries, classic golden Nastar, and savory Macaroni Schotel. Crafted with love, rich premium butter, and the finest ingredients delivered straight to your doorstep.</p>
                    <NavLink to="/menu"><button>Explore Our Menu</button></NavLink>
                </div>
            </div>
            <div className="signature">
                <h2>Our Signature Creations</h2>
                <div className="container">
                    <SignatureCards image={import.meta.env.BASE_URL + "images/nastar2.webp"} title={"Nastar Jumbo"} desc={"Oversized, premium golden pastries made with real Wijsman butter and packed with rich, homemade pineapple jam. They literally melt in your mouth!"} />
                    <SignatureCards image={import.meta.env.BASE_URL + "images/macaroni.webp"} title={"Macaroni Schotel"} desc={"A rich, comforting blend of savory macaroni, premium smoked beef, and a velvety, melted cheese crust. Baked fresh daily and served warm in a shared pan."} />
                </div>
                <NavLink to="/menu"><button>See Full Menu and Pricing</button></NavLink>
            </div>
            <div className="packaging">
                <h2>Different Occasions, Different Packagings!</h2>
                <div className="container">
                    <img src={`${import.meta.env.BASE_URL}images/nastar-imlek.webp`} alt="dus nastar imlek" className="img-container" />
                    <img src={`${import.meta.env.BASE_URL}images/nastar-idulfitri.webp`} alt="dus nastar idul fitri" className="img-container" />
                    <img src={`${import.meta.env.BASE_URL}images/nastar-nataru.webp`} alt="dus nastar natal tahun baru" className="img-container" />
                </div>
            </div>
            <div className="testimony">
                <h2>What Our Customers Are Saying</h2>
                <div className="container">
                    <TestimonyCards testi={"Nastarnya uenak poll. Bahkan bisa di bawa ke luar negeri buat oleh-oleh."} name={"Andre"} />
                    <TestimonyCards testi={"Macaroni Schotelnya cocok buat bagi-bagi pas kumpul sama keluarga."} name={"Nunung"} />
                    <TestimonyCards testi={"Pelayanan oke banget, selalu dibalas dengan cepat dan tepat."} name={"Sule"} />
                </div>
            </div>
        </div>
        <Footer />
    </>);
}