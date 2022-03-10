import { Routes, Route } from "react-router-dom";
import Annoncement from "./Components/Annoncement/Annoncement";
import Navbar from './Components/Navbar/Navbar'

import Senregistrer from './Components/Senregistrer/Senregistrer'
import Connexion from './Components/Connexion/Connexion'

function App() {

  return (
    <div>
      <Annoncement />
      <Navbar /> 
      <Routes>
        <Route path='/Senregistrer' element={<Senregistrer />} />
        <Route path='/Connexion' element={<Connexion />} />
      </Routes>
    </div>
  )
}

export default App