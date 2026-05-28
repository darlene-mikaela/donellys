export default function SignatureCards({ image , title , desc }) {
    return (
        <div className="signature-card">
            <img src={image} alt="" className="img-container" />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}