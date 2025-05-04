import React, { useState } from "react";
import "./styles.css";
import { MdAlternateEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FiCreditCard } from "react-icons/fi";
import { MdHome } from "react-icons/md"
import { TbMapPinCode } from "react-icons/tb"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { FaCity } from "react-icons/fa"
import { MdPublic } from "react-icons/md"
import { MdCalendarToday } from "react-icons/md";
import placeholderImg from "../../assets/noImg.webp";
import InputComponent from "../../componets/componentsUI/inputUI/inputComponent";
import MenuLateral from "../../componets/MenuLateral/menuLateral";






interface Funcionario {
  ativo: boolean;
  foto: File | null;
  nome: string;
  email: string;
  dataContratacao: string;
  cpf: string;
  rua: string;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
}

const CadastroFuncionario: React.FC = () => {
  const [form, setForm] = useState<Funcionario>({
    ativo: true,
    foto: null,
    nome: "",
    email: "",
    dataContratacao: "",
    cpf: "",
    rua: "",
    cep: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [produtoSelecionado, setProdutoSelecionado] = useState({
    imageUrl: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked, files } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox"
        ? checked
        : name === "foto"
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Funcionário cadastrado:", form);
    alert("Funcionário cadastrado com sucesso!");
  };

  return (<>
    <MenuLateral/>
    <form className="form-funcionario" onSubmit={handleSubmit}>
      <h2>Cadastro de Funcionário</h2>
      <div className="container-img">
        
        <div className="image-upload-section">
          <label className="image-upload-label">
            <div className="image-preview-container">
              <img
                src={imagePreview || produtoSelecionado?.imageUrl || placeholderImg}
                alt="Preview"
                className="image-preview"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="image-upload-input"
                style={{ display: "none" }}
                id="input-imagem-produto"
              />
              <label htmlFor=".input-image-product" className="btn-upload-image">
                {imagePreview || produtoSelecionado.imageUrl ? "Alterar Imagem" : "Adicionar Imagem"}
              </label>
            </div>
          </label>
          <div>
            <label>
              <input
                type="checkbox"
                name="ativo"
                checked={form.ativo}
                onChange={handleChange}
              />
              Ativo
            </label>
          </div>
        </div>

      </div>

      <div className="container-form-all">
        <div className="container-form">
            <InputComponent
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              label="Nome"
              Icon={CiUser}
            />
            <InputComponent
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              label="Email"
              Icon={MdAlternateEmail }
            />
           
        

          <div className="input-group-form">
            <FiCreditCard className="input-icon" />
            <input
              type="number"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>CPF</label>
          </div>

          <div className="input-group-form">
            <MdCalendarToday className="input-icon" />
            <input
              type="date"
              name="dataContratacao"
              value={form.dataContratacao}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Data de Contratação </label>
          </div>


        </div>

        <div className="container-form">
          <div className="input-group-form">
            <MdHome className="input-icon" />
            <input
              type="text"
              name="rua"
              value={form.rua}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Rua</label>
          </div>

          <div className="input-group-form">
            <TbMapPinCode className="input-icon" />
            <input
              type="number"
              name="cep"
              value={form.cep}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>CEP</label>
          </div>

          <div className="input-group-form">
            <HiOutlineOfficeBuilding className="input-icon" />
            <input
              type="text"
              name="bairro"
              value={form.bairro}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Bairro</label>
          </div>

          <div className="input-group-form">
            <FaCity className="input-icon" />
            <input
              type="text"
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label>Cidade</label>
          </div>

          <div className="input-group-form">
            <MdPublic className="input-icon" />
            <input
              type="text"
              name="estado"
              value={form.estado}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label> Estado</label>
          </div>
        </div>
      </div>


      <button className="btn-submit" type="submit">Cadastrar</button>
    </form></>
  );
};

export default CadastroFuncionario;
