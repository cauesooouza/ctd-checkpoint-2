import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../Api/loginService.js";
import styles from "./Form.module.css";
import { themeContext } from "../context/darkMode.jsx";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { darkMode } = useContext(themeContext); // Use o contexto do dark mode
  const navigate = useNavigate();

  // todo: verificar validação login
  async function handleSubmit(e) {
    e.preventDefault();

    const token = await loginService(username, password);
    console.log(token);
    localStorage.setItem("user-token", token);
    navigate("/");
    alert("Bem vindo ao Sistema!");

    // enviar os dados do formulário e enviá-los no corpo da requisição
    // para a rota da api que faz o login /auth
    // lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    // no localstorage para ser usado em chamadas futuras
    // Com tudo ocorrendo corretamente, o usuário deve ser redirecionado à página principal, com react-router
    // Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  }

  return (
    <>
      <div
        className={`text-center card container ${
          styles.card
        } ${darkMode ? styles.dark : ""}`} // Use styles.dark para aplicar o tema escuro
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing}`}
              type="text"
              placeholder="username"
              name="username"
              value={username}
              minLength="5"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={`form-control ${styles.inputSpacing}`}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={username === "" && password === ""}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
