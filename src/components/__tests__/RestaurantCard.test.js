import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restaurantName = screen.getByText("Pizza Hut");

  expect(restaurantName).toBeInTheDocument();
});

test("should render RestaurantCard component with Promoted Label", () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  render(<PromotedRestaurantCard resData={MOCK_DATA} />);

  const promotedLabel = screen.getByText("Promoted");

  expect(promotedLabel).toBeInTheDocument();
});
