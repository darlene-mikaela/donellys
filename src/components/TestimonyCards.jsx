export default function TestimonyCards({ testi , name }) {
    return (
        <div className="testimony-card">
            <p>{testi}</p>
            <p>- {name}</p>
        </div>
    )
}