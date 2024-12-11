import './index.css'
import ServiceCard from '../ServiceCard'

const servicesList = [
    {
        id: 1,
        img: 'https://sulkurl.com/eCv',
        name: 'Fridge',
        description: 'We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others hand.'
    },
    {
        id: 2,
        img: 'https://sulkurl.com/eCw',
        name: 'Air Conditioner',
        description: 'We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others hand.'
    },
    {
        id: 3,
        img: 'https://sulkurl.com/eCy',
        name: 'Television',
        description: 'We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others hand.'
    },
    {
        id: 4,
        img: 'https://sulkurl.com/eCz',
        name: 'Gas Stove',
        description: 'We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others hand.'
    },
    {
        id: 5,
        img: 'https://sulkurl.com/eCw',
        name: 'Air Conditioner',
        description: 'We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others hand.'
    },
    {
        id: 6,
        img: 'https://sulkurl.com/eCy',
        name: 'Television',
        description: 'We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others hand.'
    }
]

const Services = () => (
    <div className="services-container">
        <h1 className="services-heading">All Services</h1>
        <p className="paragraph">The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
        <ul className="services-list">
            {servicesList.map(eachObj => <ServiceCard key={eachObj.id} obj={eachObj}/>)}
        </ul>
    </div>
)

export default Services
