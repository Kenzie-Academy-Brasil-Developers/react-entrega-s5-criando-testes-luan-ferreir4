import React from "react"
import { render, screen } from "@testing-library/react"
import Search from "../../components/Search"

describe("Button testing", ()=>{
    it("should render the button", ()=>{
      render(<Search/>)

        const InputSearch = screen.getByPlaceholderText("Insira o CEP")

        expect(InputSearch).toBeTruthy();
    })

})