import Home from '../Home'
import Services from '../Services'
import BookRequest from '../BookRequest'
import Vendors from '../Vendors'
import Reviews from '../Reviews'
import './index.css'

const Body = () => (
    <div className="body-container">
        <Home />
        <Services />
        <BookRequest />
        <Vendors />
        <Reviews />
    </div>
)

export default Body