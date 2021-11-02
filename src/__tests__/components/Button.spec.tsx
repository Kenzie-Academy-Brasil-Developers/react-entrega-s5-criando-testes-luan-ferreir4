import React from "react"
import { render, screen } from "@testing-library/react"

import { Button } from "semantic-ui-react"
// interface IButtonProps {
//     cepNumber: string;
// }
describe("Button testing", ()=>{
    it("should render the button", ()=>{
        render(<Button data-testid="button-search"/>)

        const buttonSearch = screen.getByTestId("button-search")

        expect(buttonSearch).toBeTruthy();
    })

    it("should be disabled when input is empty", ()=>{
        const cepNumber = "" as string;
        render(<Button data-testid="button-search" disabled={!cepNumber}/>)
        const buttonSearch = screen.getByTestId("button-search");

        expect(buttonSearch).toBeDisabled();
    })
})