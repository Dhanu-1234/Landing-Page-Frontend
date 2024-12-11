import './index.css'

const RequestCard = (props) => {
    const {details} = props;
    const {img, step, description} = details;

    return (
        <li className="request-list-item">
            <img src={`${img}`} alt="pictorial" className="request-list-item-img"/>
            <h3 className="request-item-heading">{step}</h3>
            <p className="paragraph">{description}</p>
        </li>
    )
}

export default RequestCard
