import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase";
import "./styles.css"; 
import MenuLateral from "../../componets/MenuLateral/menuLateral";

interface Usuario {
  id: string;
  nome: string;
  email: string;
  cargo: string;
  foto?: string;
}

const UsuariosPage = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUsuarios = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "usuarios")); // ou "funcionarios"
  //       const lista: Usuario[] = querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       })) as Usuario[];
  //       setUsuarios(lista);
  //     } catch (error) {
  //       console.error("Erro ao buscar usuários:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUsuarios();
  // }, []);

  

  return (<>
    <MenuLateral/>
    <div className="usuarios-container">
      <h2>Funcionários Cadastrados</h2>
      <div className="usuarios-grid">
        {usuarios.map((usuario) => (
          <div key={usuario.id || "Não informado"} className="card-usuario">
            <img
              src={usuario.foto || "/assets/default-user.png"}
              alt={usuario.nome || "Não informado"}
              className="card-foto"
            />
            <div className="card-info">
            <h3>{usuario.nome || "Não informado"}</h3>
              <p>{usuario.email || "Não informado"}</p>
              <span>{usuario.cargo || "Não informado"}</span>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
};

export default UsuariosPage;
