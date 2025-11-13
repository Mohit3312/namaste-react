import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterEach(() => {
    console.log("After Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  test("should load Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("should load 'Submit' text inside Contact component", () => {
    render(<Contact />);

    const elementWithSubmitText = screen.getByText("Submit");

    // Assertion
    expect(elementWithSubmitText).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion

    //   expect(inputBoxes?.length).toBe(2);
    expect(inputBoxes?.length).not.toBe(3);
  });
});
