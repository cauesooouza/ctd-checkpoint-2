import Login from "../Routes/Login"
import { render } from "@testing-library/react"

describe ("Realizando teste de renderização do login", () => {

  it("Componente renderizou corretamente", () => {
    const contextoGlobal = {theme: " dark", data: []}
    render(
        <Login />,
        contextoGlobal
    );
  })


  it("Componente renderizou corretamente junto com o componente children LoginForm", () => {

    const contextoGlobal = { theme: "dark", data: [] }
    render(
        <Login/>,
        contextoGlobal
    );
  })
}) 