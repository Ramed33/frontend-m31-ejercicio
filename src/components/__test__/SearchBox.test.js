import {fireEvent, render, screen} from "@testing-library/react";
import SearchBox from "../SearchBox";

describe('SearchBox', () => {
    it('updates the searching when there is a year', () => {
        render(<SearchBox/>);

        const inputElement = screen.getByRole('textbox');

        fireEvent.change(inputElement, {target: {value: "1976"}});

        const updatedText = screen.getByText(/Winner of the year 1976/i);
        expect(updatedText).toBeInTheDocument();
    })
})