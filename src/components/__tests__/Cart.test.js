import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import { RES_MENU_MOCK_RESPONSE } from "../../utils/constants";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RES_MENU_MOCK_RESPONSE),
  })
);

test("Should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Indian Platter (10)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItem").length).toBe(10);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(12);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItem").length).toBe(10);

  expect(
    screen.getByText("Cart is empty. Add Items to the cart.")
  ).toBeInTheDocument();
});

const renderApp = async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
};

describe("Restaurant Menu and Cart Functionality", () => {
  beforeEach(async () => {
    await renderApp();
  });

  test("should load Restaurant Menu components with items", () => {
    const accordionHeader = screen.getByText("Indian Platter (10)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItem").length).toBe(10);
  });

  test("should show empty cart initially", () => {
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
  });

  test("should add items to cart correctly", () => {
    const accordionHeader = screen.getByText("Indian Platter (10)");
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button", { name: "ADD" });

    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    // After adding items, total visible items = original 10 + 2 added to cart
    expect(screen.getAllByTestId("foodItem").length).toBe(12);
  });

  test("should clear the cart properly", async () => {
    const accordionHeader = screen.getByText("Indian Platter (10)");
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button", { name: "ADD" });

    fireEvent.click(addBtns[2]);
    fireEvent.click(addBtns[3]);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItem").length).toBe(10);
    expect(
      screen.getByText("Cart is empty. Add Items to the cart.")
    ).toBeInTheDocument();
  });
});
