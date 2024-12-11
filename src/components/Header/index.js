import './index.css'

const Header = () => (
    <div className="header-container">
        <div className="header-img-container">
            <img src="https://sulkurl.com/eBS" alt="logo" className="logo-styles"/>
        </div>
        <div className="header-buttons-container">
            <button type="button" className="btn biz-login-btn">Biz Login</button>
            <button type="button" className="btn login-btn">Login</button>
        </div>
    </div>
)

export default Header
