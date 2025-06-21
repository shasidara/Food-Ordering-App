import MOCK_DATA from ".././mocks/mockResListData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should render the Body component with search", async () => {
    await act(async () => 
        render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "pizza"}});

    fireEvent.click(searchBtn);
}); 