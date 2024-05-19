import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { DriversPage } from './pages/Drivers.jsx'
import { TeamsPage } from './pages/Teams.jsx'
import { CalendarPage } from './pages/Calendar.jsx'
import { TeamFormPage } from './pages/FormTeam.jsx'
import { DriverFormPage } from './pages/FormDriver.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/drivers' element={<DriversPage/>}/>
        <Route path='/teams' element={<TeamsPage/>}/>
        <Route path='/calendar' element={<CalendarPage/>}/>
        <Route path='/newteam' element={<TeamFormPage/>}/>
        <Route path='/newdriver' element={<DriverFormPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
