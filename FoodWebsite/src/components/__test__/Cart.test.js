import MENU from "../../mocks/mockMenu.json";
import Menu from "../Menu";
import Header from "../Header";
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU),
  });
});

test("should load restaurant menu", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <Menu />
      </Provider>
    );
  });

  const accordionHeading = screen.getByText("Milkshakes (7)");

  fireEvent.click(accordionHeading);

//   const dishes = screen.getAllByTestId("dish");

  const addBtns = screen.getAllByRole("button", {name: "ADD"})

//   expect(addBtns.length).toBe(7);

  fireEvent.click(addBtns[0]);

  const headerCart = screen.getByText(/🛒- 1/);

  expect(headerCart).toBeInTheDocument();


});
