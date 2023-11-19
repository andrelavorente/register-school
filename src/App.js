import Sidebar from "./Componentes/SideBar/Sidebar.jsx";
import Headers from "./Componentes/Headers/Headers.jsx";
import CadastroFuncionario from "./pages/CadastroFuncionario/CadastroFuncionario.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import CadastroTurma from "./pages/CadastroTurma/CadastroTurma.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/funcionario" element={<CadastroFuncionario />} />
        <Route path="/turma" element={<CadastroTurma />} />
      </Routes>
      <Sidebar />
    </Router>
  );
}

export default App;
