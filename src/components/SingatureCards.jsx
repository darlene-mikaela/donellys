export default function SignatureCards({ image, title, desc }) {
    return (
        <div className="signature-card">
            <div className="img-container">
                <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}