import { FaArrowRightLong } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import './index.css'

const Footer = () => (
    <div className="footer-container">
        <div className="footer-content">
            <div className="footer-text-container">
                <div className="footer-card">
                    <div className="contact-container">
                        <p>Get in touch with us</p>
                        <div className="footer-input-container">
                            <input placeholder="Email address" className="footer-input"/>
                            <button type="button" className="footer-btn"><FaArrowRightLong/></button>
                        </div>
                    </div>
                    <p className="footer-description">
                        Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
                    </p>
                </div>
                <button className="service-btn">Book a Service</button>
                <div className="terms-container">
                    <p className="footer-text">Terms</p>
                    <p className="footer-text">Policy</p>
                    <p className="footer-text">Cookies</p>
                    <p className="footer-text">Bussiness Login</p>
                </div>
            </div>
            <hr className="line"/>
            <div className="footer-navbar">
                <div>
                    <img src="https://sulkurl.com/eBS" alt="logo"/>
                </div>
                <div>
                    <TiSocialLinkedinCircular size={25}/>
                    <CiFacebook size={25}/>
                    <TiSocialTwitterCircular size={25}/>
                </div>
            </div>
        </div>
    </div>
)

export default Footer
