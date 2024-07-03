import React from "react";
import Header from "../Header";
import {render, screen} from "@testing-library/react";

describe('Header components', () => {
    it('should shows header components', () => {
        render(<Header/>);

        const titleText = screen.getByText('Oscar Winners');
        expect(titleText).toBeInTheDocument();
    })
})