// Imports
import { render, screen } from "@testing-library/react";

// To Test
import App from "../App";

// Tests
test("Renders main page correctly", async () => {
  // Setup
  render(<App />);
  const buttonCount = await screen.findByRole("button");
  // Pre Expecations
  expect(buttonCount.innerHTML).toBe("count is 0");
  // Init

  // Post Expectations
  expect(true).toBeTruthy();
});
