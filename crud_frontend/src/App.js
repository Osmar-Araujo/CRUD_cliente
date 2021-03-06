import React, {useState} from "react";
import './App.css';
import Axios from "axios";

function App() {
  const [values,setValues] = useState();
  const handleChangeValues = (value) =>{
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/api/clientes",{
    nome: values.nome,
    cpf: values.cpf,
    tel: values.tel,
    email: values.email,
    dataNasc: values.dataNasc,
    genero: values.genero,
    senha: values.senha
  }).then((res) => {
    console.log(res);
  });
  };
  return (
    <div className="app--container">
      <div className='register--container'>
          <h1 className="register--title">Criar uma Conta</h1>
          <input
            type="text"
            name="nome"
            className="register--input"
            placeholder="Nome"
            onChange={handleChangeValues}
            required
          ></input>
           <input
            type="text"
            name="cpf"
            className="register--input"
            placeholder="CPF"
            onChange={handleChangeValues}
            required
          ></input>
           <input
            type="tel"
            name="tel"
            pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
            className="register--input"
            placeholder="11-99508-5696"
            onChange={handleChangeValues}
            required
          ></input>       
          <input
            type="email"
            name="email"
            className="register--input"
            placeholder="E-mail"
            onChange={handleChangeValues}
            required
          ></input>
          <input
            type="date"
            name="dataNasc"
            className="register--input"
            placeholder="Data de Nascimento"
            onChange={handleChangeValues}
            required
          ></input>
          <select  name="genero" className="register--input" onChange={handleChangeValues}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
          <input
            type="password"
            name="senha"
            className="register--input"
            placeholder="Senha"
            onChange={handleChangeValues}
            required
          ></input>
          <input
            type="password"
            name="confSenha"
            className="register--input"            
            placeholder="Confirme a senha"
            onChange={handleChangeValues}
            required
          ></input>
          <button className="register--button" type="submit" onClick={() => handleClickButton()}>
            Cadastrar
          </button>
        
      </div>
    </div>
  );
}

export default App;
