import { NavLink } from 'react-router-dom'
import './Dashboard.css'

export default function Dashboard() {


  return (
    <div className='dashboardPageContainer'>
      <div className="navBarTopDashboard"> 
      <p> 
        <NavLink style={({ isActive }) => ({ 
    fontFamily: isActive ? 'monospace' : 'serif' 
  })} to='/'>home</NavLink> <br />
        <NavLink to='/cabins'>cabins</NavLink> <br />
        <NavLink to='/check-in'>check-in</NavLink> <br />
        <NavLink to='/settings'>settings</NavLink> <br />
        <NavLink to='/users'>users</NavLink> <br />
        <NavLink to='/login'>login</NavLink> <br />
        <NavLink to='/account'>account</NavLink> <br />
        <NavLink to='/bookings'>bookings</NavLink>
      
      </p>
      </div>
     <div className='dashboardHeading'>
      Dashboard Heading
     </div>

    </div>
  )
}
