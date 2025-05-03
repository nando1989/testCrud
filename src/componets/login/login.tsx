import React, { useState } from "react";
import "./styles.css";

export default function LoginPanel() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.log("Login com:", { email, senha });
    // Aqui vai a lógica de autenticação
  };

  const handleCadastro = () => {
    console.log("Ir para cadastro");
  };

  return (
    <>
    <div className="login-container">
    <h2>LOGIN</h2>
      <div className="input-group">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email *</label>
      </div>

      <div className="input-group">
        <input
          type="password"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <label>Senha *</label>

        <p>Esqueceu a senha?</p>
      <button className="btn-login" onClick={handleLogin}>
        Entrar
      </button>
      </div></div>
    </>
  );
}
