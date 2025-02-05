// cardDetails.test.tsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useParams } from "next/navigation";
import CardDetailPage from "@/app/card-details/[id]/page";

type ImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  placeholder?: "blur" | "empty";
  sizes?: string;
};

// Mock the next/image component as it's hard to test directly
jest.mock("next/image", () => {
  return ({ src, alt, ...props }: ImageProps) => {
    return <img src={src} alt={alt} {...props} />;
  };
});
//Mock the next/navigation hook
jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
}));
//Mock layout component
jest.mock("../components/Layout", () => {
  return ({ children }: any) => (
    <div data-testid="mocked-layout">{children}</div>
  );
});
describe("CardDetailPage Component", () => {
  const mockParams = { id: "1" };
  (useParams as jest.Mock).mockReturnValue(mockParams);

  it("renders loading state and then auction card detail", async () => {
    render(<CardDetailPage />);

    // Check initial loading state
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      // Assert the layout is rendered
      const layoutElement = screen.getByTestId("mocked-layout");
      expect(layoutElement).toBeInTheDocument();
      //Assert card detail component is rendered
      const cardDetails = screen.getByRole("article");
      expect(cardDetails).toBeInTheDocument();
      // Assert that the card detail content is displayed
      expect(
        screen.getByRole("heading", { name: /Auction 1/i })
      ).toBeInTheDocument();
      expect(screen.getByText(/1.5ETH/i)).toBeInTheDocument();
      expect(screen.getByText(/10 min left/i)).toBeInTheDocument();
      expect(screen.getByText(/3 people are looking/i)).toBeInTheDocument();
    });
  });
});
