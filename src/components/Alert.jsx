export default function Alert({ onClose, confirmDelete }) {
    return (
        <div className="alert-overlay">
            <div className="alert-content">
                <h4>Are you sure you want to delete this item?</h4>
                <div className="options">
                    <button className="no" onClick={onClose}>Cancel</button>
                    <button className="yes" onClick={confirmDelete}>Yes</button>
                </div>
            </div>
        </div>
    )
}