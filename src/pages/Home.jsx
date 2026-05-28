import { Link, NavLink } from "react-router";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import Menus from "./Menus";
import SignatureCards from "../components/SingatureCards";
import TestimonyCards from "../components/TestimonyCards";

export default function Home() {
    return (<>
        <SiteHeader />
        <div className="intro">
            <h1 className="headline">Freshly Baked Happiness</h1>
            <p className="sub-headline">...</p>
            <NavLink to="/menu"><button>Explore Our Menu</button></NavLink>
        </div>
        <div className="signature">
            <h2>Our Signature Creations</h2>
            <SignatureCards image={"../images/nastar2.webp"} title={"Nastar Jumbo"} desc={""}/>
            <SignatureCards image={"../images/macaroni.webp"} title={"Macaroni Schotel"} desc={""}/>
            <NavLink to="/menu"><button>See Full Menu and Pricing</button></NavLink>
        </div>
        <div className="packaging">
            <h2>Different Occasions, Different Packagings!</h2>
            <img src="../images/nastar-idulfitri.webp" alt="dus nastar idul fitri" />
            <img src="../images/nastar-nataru.webp" alt="dus nastar natal tahun baru" />
            <img src="../images/nastar-imlek.webp" alt="dus nastar imlek" />
        </div>
        <div className="testimony-container">
            <h2>What Our Customers Are Saying</h2>
            <TestimonyCards testi={"Nastarnya uenak poll, muantep"} name={"Ani"}/>
            <TestimonyCards testi={"Macaroni Schotelnya cocok buat bagi-bagi pas kumpul sama keluarga"} name={"Budi"}/>
        </div>
        <Footer />
    </>);
}