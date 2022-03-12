/*
|--------------------------------------------------------------------------
| Importation 
|--------------------------------------------------------------------------
*/

import { Routes, Route } from "react-router-dom";
import Annoncement from "./Components/Annoncement/Annoncement";
import Navbar from './Components/Navbar/Navbar'


/*
|--------------------------------------------------------------------------
|Pages Connexion et S'enregistrer
|--------------------------------------------------------------------------
*/

import Senregistrer from './Pages/Senregistrer/Senregistrer'
import Connexion from './Pages/Connexion/Connexion'
import Accueil from "./Pages/Accueil"




function App() {

  return (
    <div>
      <Annoncement />
      <Navbar />
 
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/Senregistrer' element={<Senregistrer />} />
          <Route path='/Connexion' element={<Connexion />} />
        </Routes>
   
     
    </div>
  )
}

export default App