import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import Menus from "./Menus";

export default function Home() {
    return (<>
        <SiteHeader />
        <div className="intro">
            <h1 className="headline">Made with Love, Baked to Perfection</h1>
            <p className="sub-headline">Welcome to Do Nellys, where comforting savories meet irresistible sweets! We specialize in crafting the ultimate comfort food experience, bringing you everything from rich, bubbling lasagnas and perfectly baked macaronis to the golden, melt-in-your-mouth sweetness of our signature pineapple cakes. Every single dish is baked fresh using the finest ingredients and a whole lot of love, ensuring that every bite feels like home. Whether you are gathering around the table for a cozy family meal or treating yourself to a well-deserved dessert, we are here to satisfy your cravings. Explore our menu today and bring the warmth of our kitchen into your home!</p>
        </div>
        <div className="signature">
            <h2>Our Signature Product</h2>
            <p>Sweet and savory nastar, perfect for any occasion</p>
        </div>
        <div className="packaging">
            <h2>Different Occasions, Different Packagings!</h2>
            <img src="../images/nastar-idulfitri.webp" alt="dus nastar idul fitri" />
            <img src="../images/nastar-nataru.webp" alt="dus nastar natal tahun baru" />
            <img src="../images/nastar-imlek.webp" alt="dus nastar imlek" />
        </div>
        <div className="testi"></div>
        <Footer />
    </>);
}