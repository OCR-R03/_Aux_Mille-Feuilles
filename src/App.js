import { Routes, Route } from "react-router-dom";
import Accueil from "./Components/Accueil/Accueil"
import Services from './Components/Services/Services'
import Profile from './Components/Profile/Profile'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/profil/:id" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App