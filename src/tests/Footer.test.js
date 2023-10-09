import React from "react";
import Footer from "../Components/Footer";
import { render, screen } from "@testing-library/react"


describe ("Testando componente Footer", () => {

it("Botão do Footer voltar ao topo ativo", () => {  
  render(
    <Footer />
  )
  // const buttonVoltarAoTopo = screen.getByTestId("btn-footer");

  const buttonVoltarAoTopo = screen.getByTestId("btn-footer");
  expect(buttonVoltarAoTopo).not.toBeDisabled();
 //  expect(test).not.toBeDisabled();
})
})