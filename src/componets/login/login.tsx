import React, { useState } from "react";
import "./styles.css";
import InputComponent from "../componentsUI/inputUI/inputComponent";
import { CiUser } from "react-icons/ci";

export default function LoginPanel() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [form, setForm] = useState("");

  const handleLogin = () => {
    console.log("Login com:", { email, senha });
    // Aqui vai a lógica de autenticação
  };

  const handleCadastro = () => {
    console.log("Ir para cadastro");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked, files } = e.target as any;
    // setForm((prev) => ({
    //   ...prev,
    //   [name]: type === "checkbox"
    //     ? checked
    //     : name === "foto"
    //       ? files[0]
    //       : value,
    // }));
  };

  return (
    <>
      <div className="login-container">
        <h2>LOGIN</h2>

        
          <InputComponent
            type="text"
            name="Email"
            value=""
            onChange={handleChange}
            label="Nome"
            Icon={CiUser}
          />
          <InputComponent
            type="Password"
            name="senha"
            value=""
            onChange={handleChange}
            label="Nome"
            Icon={CiUser}
          />
          <label>Senha *</label>

          <p>Esqueceu a senha?</p>
          <button className="btn-login" onClick={handleLogin}>
            Entrar
          </button>
        
      </div>
    </>
  );
}
