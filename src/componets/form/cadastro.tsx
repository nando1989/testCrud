import React, { useState } from 'react';
import './CadastroForm.css';

export default function CadastroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Cadastrar usuário:', { nome, email, senha });
    // Aqui entra a lógica pra cadastrar no Firebase ou API
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <input
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar senha"
        value={confirmarSenha}
        onChange={e => setConfirmarSenha(e.target.value)}
      />
      <button className="btn-cadastrar" onClick={handleCadastro}>
        Cadastrar
      </button>
    </div>
  );
}
