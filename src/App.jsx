import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Booking from './pages/Booking'
import Cabins from './pages/Cabins'
import Checkin from './pages/Checkin'
import Settings from './pages/Settings'
import Users from './pages/Users'
import Login from './pages/Login'
import Account from './pages/Account'
import { QueryClient } from '@tanstack/react-query'


const queryClient = new QueryClient({})


export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/bookings' element={<Booking />} />
        <Route path='/cabins' element={<Cabins />} />
        <Route path= 'check-in' element={<Checkin />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/users' element={<Users />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<Account />} />
    </Routes>
  
  )
}
