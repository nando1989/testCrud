import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { GiArchiveRegister } from "react-icons/gi";
import placeholderImg from "../../assets/noImg.webp";
import './styles.css';


const MenuLateral = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();
  const [produtoSelecionado, setProdutoSelecionado] = useState({
    imageUrl: "",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  return (
    <div className="conteudo-menu">
      <ul className="menu-admin">
        <img
          src={imagePreview || produtoSelecionado?.imageUrl || placeholderImg}
          alt="Preview"
          className="image-preview"
        />
        <li>
          <Link to={`/cadastro`}>
          <span className="texto-menu">Cadastrar</span>
            <GiArchiveRegister size={18} style={{ marginRight: 8 }} />
          </Link>
        </li>
        <li>
          <Link to={`/usuarios`}> 
          <span className="texto-menu">Funcionarios</span>
            <CiUser size={18} style={{ marginRight: 8 }} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default MenuLateral;