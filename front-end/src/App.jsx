import './App.css'
import SideBar from '../components/Side-bar'
import HomePage from '../components/HomePage'
import CrewmateMaker from '../components/Crewmate_Maker'
import CrewMate from '../components/CrewmateGallery'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="flex h-screen bg-[#121212]">
      <SideBar />
      <div className="flex-1 flex flex-col items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CrewmateMaker />} />
          <Route path="/gallery" element={<CrewMate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
