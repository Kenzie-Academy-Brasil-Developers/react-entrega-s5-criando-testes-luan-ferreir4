import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import api from "../../services";
import App from "../../App";
import {LocateCepProvider} from "../../providers/CepProvider";
const apiMock = new MockAdapter(api);

describe("Search for a CEP", () => {
  it("should be able to search for a CEP", async () => {

   apiMock.onGet("70040010").replyOnce(200, {
      bairro: "Asa Norte",
      cep: "70040010",
      cidade: "Brasília",
      cidade_info: { area_km2: "5779,999", codigo_ibge: "5300108" },
      estado: "DF",
      estado_info: {
        area_km2: "5.779,999",
        codigo_ibge: "53",
        nome: "Distrito Federal",
      },
      logradouro: "SBN Quadra 1",
    });

    render(
      <LocateCepProvider>
        <App/>
      </LocateCepProvider>
    )
    
    const inputSearch = screen.getByPlaceholderText("Insira o CEP");
    const buttonSearch = screen.getByTestId("button-search");
    
    fireEvent.change(inputSearch, {
      target: {
        value: 70040010,
      }
    });
    
    fireEvent.click(buttonSearch);
    
    await waitFor(()=>{
      expect(screen.getByTestId("form-results")).toBeInTheDocument();
    })

    
  });
});
