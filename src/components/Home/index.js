import './index.css';
import {Component} from 'react';
import TechniciansList from '../TechniciansList';

class Home extends Component {
    state = {location:'pune',appliance:'',displayError:false, techniciansList: []};

    onLocationChange = event => {
        this.setState({location: event.target.value});
    }

    onInputChange = event => {
        this.setState({appliance:event.target.value});
    }

    onSearch = async() => {
        const {location, appliance} = this.state
        if(appliance === "ALL" || appliance === "Television" || appliance === "Refrigirator" || appliance === "Air Conditioner"){
            const details = {location, appliance}
            const url = 'https://landing-page-backend-chi.vercel.app/technicians'
            console.log(JSON.stringify(details))
            const options = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)
            }
            try {
                const response = await fetch(url,options)
                const data = await response.json();
                this.setState({techniciansList: data})
            }catch(error){
                console.log('Error:',error.message)
            }
            this.setState({displayError: false});
        }else {
            this.setState({displayError: true});
        }
    }

    render() {
        const {appliance,displayError, techniciansList} = this.state
        console.log(techniciansList)
        return (
            <>
            <div className="home-container">
                <div className="home-text-container">
                    <h1 className="home-heading">Take care of your home needs now!</h1>
                    <p className="paragraph">ServicePro is your one-stop solution to trubleshoot, choose a vendor and take a technician.</p>
                    <select className="dropdown" onChange={this.onLocationChange}>
                        <option className="option" value="pune">Pune</option>
                        <option className="option" value="mumbai">Mumbai</option>
                        <option className="option" value="hyderabad">Hyderabad</option>
                    </select>
                    <div className="search-container">
                        <input type="search" value={appliance} className="search-input-styles" placeholder="Search Home Appliances ex. ALL, Television..." onChange={this.onInputChange}/>
                        <button type="button" className="search-btn" onClick={this.onSearch}>Search</button>
                    </div>
                    {displayError ? <p className='error-msg'>*Enter Valid Input(Example: ALL, Television, Refrigirator, etc...)</p>:<></>}
                </div>
                <div className="home-img-container">
                    <img src="https://sulkurl.com/eCb" alt="home" className="home-img-styles"/>
                </div>
            </div>
            {techniciansList.length === 0 ? <></>:<TechniciansList list={techniciansList}/>}
            </>
        )
    }
}

export default Home
