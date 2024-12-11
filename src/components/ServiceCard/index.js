import './index.css'

const ServiceCard = (props) => {
    const {obj} = props;
    const {img, name, description} = obj;

    return (
        <li className="list-item">
            <img src={`${img}`} alt="appliance" className="img-styles"/>
            <h3 className="name">{name}</h3>
            <p className="paragraph">{description}</p>
        </li>
    )
}

export default ServiceCard
