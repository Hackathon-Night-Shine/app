import './App.css'
import { RetreatManagementPage } from './admin/pages/RetreatManagementPage'
import { Audience } from './audience'
import { PatientFilesPage } from './admin/pages/PatientFilesPage'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Home = () => { 
  return (
    <RetreatManagementPage />
  )
}
const Patients = () => {
  return (
    <PatientFilesPage />
  )
}
const AudiencePage = () => {
  return (
    <Audience />
  )
}
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/audience" element={<AudiencePage />} />
        <Route path="/old-route" element={<Navigate to="/about" replace />} />
    </Routes>
  </Router>
  )
}

export default App
