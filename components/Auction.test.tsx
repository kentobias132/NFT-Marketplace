// Inside your test file (e.g., auction.test.tsx or cardDetails.test.tsx)

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Auction from "../components/Auction";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import { ImageProps } from "@/types";
// import {ImageProps} from ""

// Mock the next/image component as it's hard to test directly
jest.mock("next/image", () => {
  return ({ src, alt, ...props }: ImageProps) => {
    return <img src={src} alt={alt} {...props} />;
  };
});

// Mock the next/link component as it's hard to test directly
jest.mock("next/link", () => {
  return ({ children, href }: any) => {
    return (
      <a href={href} data-testid="mocked-link">
        {children}
      </a>
    );
  };
});

// Mock useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Auction Component", () => {
  it("renders the component with auction data", async () => {
    render(<Auction />);

    await waitFor(() => {
      // Assert the carousel content is rendered
      const carouselContent = screen.getByRole("list");
      expect(carouselContent).toBeInTheDocument();

      //Assert the title of the component
      const headingElement = screen.getByRole("heading", {
        name: /latest live auctions/i,
      });
      expect(headingElement).toBeInTheDocument();
      // Assert that the cards are present
      const cardElements = screen.getAllByRole("article");
      expect(cardElements).toHaveLength(2);

      // Assert that the mocked link is being called with the correct route
      const links = screen.getAllByTestId("mocked-link");
      expect(links[0]).toHaveAttribute("href", "/card-details/1");
      expect(links[1]).toHaveAttribute("href", "/card-details/2");

      // Check if the correct content is present in each card
      expect(screen.getByText(/Auction 1/i)).toBeInTheDocument();
      expect(screen.getByText(/1\.5ETH/i)).toBeInTheDocument();
      expect(screen.getByText(/10 min left/i)).toBeInTheDocument();
      expect(screen.getByText(/3 people are looking/i)).toBeInTheDocument();
      expect(screen.getByText(/5/i)).toBeInTheDocument();
      expect(screen.getByText(/Auction 2/i)).toBeInTheDocument();
      expect(screen.getByText(/2\.5ETH/i)).toBeInTheDocument();
      expect(screen.getByText(/20 min left/i)).toBeInTheDocument();
      expect(screen.getByText(/7 people are looking/i)).toBeInTheDocument();
      expect(screen.getByText(/10/i)).toBeInTheDocument();
      //Assert that the previous and next buttons are present
      const prevButton = screen.getByRole("button", {
        name: /previous slide/i,
      });
      const nextButton = screen.getByRole("button", { name: /next slide/i });
      expect(prevButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });
  });
});
