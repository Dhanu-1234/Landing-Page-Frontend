import './index.css'

const TechnicianCard = props => {
    const {details} = props
    const {photo, name, specialization, location, rating, description} = details

    return (
        <li className="technician-list-item">
            <img src={`${photo}`} alt="technician" className="technician-img-styles"/>
            <h3 className="technician-name">{name}</h3>
            <p className="specialization">Specialization: <span className="highlight">{specialization}</span></p>
            <div className="technician-details-container">
                <div className="technician-rating-container">
                <p>Rating: {rating}</p>
                    <img src="https://sulkurl.com/eGZ" alt="star" className="star"/>
                </div>
                <p className="location">Location: {location}</p>
            </div>
            <p className="paragraph">{description}</p>
            <button className="contact-btn">contact</button>
        </li>
    )
}

export default TechnicianCard