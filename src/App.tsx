import "./App.css";
import LoginComponent from "./componets/login/login";
import logo from "../src/assets/logoCrud.png";

function App() {
  return (
    <div className="App">
      <div className="container-logo">
        <img src={logo} alt="Logo do sistema" />
        <h2>Plataforma completa para registro e controle de funcionarios</h2>
      </div>
      <div className="container-login">
        <LoginComponent />
      </div>
    </div>
  );
}

export default App;
