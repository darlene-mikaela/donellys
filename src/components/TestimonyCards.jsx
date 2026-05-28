export default function TestimonyCards({ testi , name }) {
    return (
        <div className="testimony-card">
            <h5>{testi}</h5>
            <p>- {name}</p>
        </div>
    )
}