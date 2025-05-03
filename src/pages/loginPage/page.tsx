import "./styles.css";
import logo from "../../assets/logoCrud.png";
import LoginPanel from "../../componets/login/login";

function App() {
  return (
    
    <div className="home">
     <div className="container-logo">
        <img src={logo} alt="Logo do sistema" />
        <h2>Plataforma completa para registro e controle de funcionários</h2>
      </div>
      <div className="container-login">
        <LoginPanel/>
      </div>
    </div>
  );
}

export default App;