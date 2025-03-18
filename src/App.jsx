import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Supongamos que tienes estos componentes definidos
import {NavBar} from './Components/NavBar'; // Asegúrate de que la ruta sea correcta
import {Cuerpo} from "./Components/Body"; // Asegúrate de que la ruta sea correcta
import {Pagina3} from './Screens/pagina3'; // Asegúrate de que la ruta sea correcta
import { Exercises } from './Screens/Exercises';
import Novedades from './Screens/novedades';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/"/>
        <Route path="/pagina3" element={<Pagina3 />} />
        <Route path="/Exercises" element={<Exercises />} />
        <Route path="/Novedades" element={<Novedades />} />
        <Route path="/pagina5" element={<pagina5 />} />
      </Routes>
    </Router>
  );
}

export default App;