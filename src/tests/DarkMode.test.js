import Navbar from "../Components/Navbar"
import { screen,fireEvent, render} from "@testing-library/react"

describe ("", () => {
  it("Ativa a troca de Modo para Dark-mode. Iníciou em modo Light-mode", () => {
    render( <Navbar />)
    const button = screen.getByTestId ("btn-darkMode");
    expect(button).toHaveTextContent("🌙");
})

  it("Desativa modo Dark-mode, ativa o Light-mode", () => {

    render(<Navbar />)
    const button = screen.getByTestId("btn-darkMode");
    fireEvent.click(button)
    expect(button).toHaveTextContent("☀")
  })
})