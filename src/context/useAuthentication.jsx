import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const response = localStorage.getItem("username");
    setUsername(response);
  }, []);

  function saveUsername(username) {
    setUsername(username);
    localStorage.setItem("user_name", username);
  }

  function saveToken(token) {
    localStorage.setItem("token", token);
  }

  function removeUserStorage() {
    
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{ username, saveUsername, removeUserStorage, saveToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



// const navigate = useNavigate();
//   const {saveName, saveToken } = useContext(AuthContext);

//   async function handleSubmit(e){
//     e.preventDefault();

//     const username = e.target[0].value
//     const password = e.target[1].value

//     if(username.length < 5){
//       alert("Verifique as suas informações ");
//       console.error("menor que 5 caracteres");
//     } else {
//       try {
//         const response = await api.post("/auth", {"username": username, "password": password});
//         saveName(username);
//         saveToken(response.data.token);
//         navigate("/home");
//       } catch (error) {
//         alert("Verifique suas informações novamente");
//         console.error("erro ao logar");
//         console.log(error);
//       }
//     }

//   };