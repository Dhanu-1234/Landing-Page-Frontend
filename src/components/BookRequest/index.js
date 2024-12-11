import './index.css';
import RequestCard from '../RequestCard';

const requestSteps = [
    {
        id: 1,
        img: "https://sulkurl.com/eDd",
        step: "Provide your appliance details",
        description: "Let us know your appliance details and your issue."
    },
    {
        id: 2,
        img: "https://sulkurl.com/eDe",
        step: "Choose your technician",
        description: "Choose from a wise variety of technicians and vendors."
    },
    {
        id: 3,
        img: "https://sulkurl.com/eDg",
        step: "Get it fixed!",
        description: "The technician will arrive at your doorstep shortly to fix it."
    }
]

const BookRequest = () => (
    <div className="book-request-container">
        <h1 className="book-request-heading">Book a request in 3 simple steps</h1>
        <ul className="request-steps-list">
            {requestSteps.map(eachObj => <RequestCard key={eachObj.id} details={eachObj} />)}
        </ul>
    </div>
)

export default BookRequest
