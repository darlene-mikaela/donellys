export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <h5>Contact Us</h5>
                <p className="small">Follow our social media to get recent updates!</p>
                <div className="sosmed">
                    <a href="https://www.instagram.com/do_nellys" target="_blank" className="fa fa-instagram"></a>
                    <a href="https://www.instagram.com/buttersweetcakes.surabaya/" target="_blank" className="fa fa-instagram"></a>
                    <a href="https://wa.me/6285100604342?text=Halo%20Kak👋,%20mau%20tanya%20dong%21" target="_blank" className="fa fa-whatsapp"></a>
                </div>
                <div className="halal-footer">
                    <img src={`${import.meta.env.BASE_URL}images/halal.png`} alt="Halal Indonesia Certification" className="halal-badge" />
                    <p>Certified Halal</p>
                </div>
                <p className="slogan">- One bite is never enough -</p>
            </div>
        </footer>
    )
}