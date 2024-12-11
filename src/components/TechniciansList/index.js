import './index.css'
import TechnicianCard from '../TechnicianCard'

const TechniciansList = (props) => {
    const {list} = props
    return (
        <div className='technicians-container'>
            <h1 className='technician-heading'>Technicians List</h1>
            <ul className='technicians-list'>
                {list.map(eachObj => <TechnicianCard key={eachObj.id} details={eachObj}/>)}
            </ul>
        </div>
    )
}

export default TechniciansList
