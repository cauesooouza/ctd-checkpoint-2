



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