import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroFuncionario from "../src/pages/formPage/page";
import LoginPage from "../src/pages/loginPage/page"; 
import UserPage from "../src/pages/userPage/page"; 
import logo from "../src/assets/logoCrud.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroFuncionario />} />
          <Route path="/usuarios" element={<UserPage  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
