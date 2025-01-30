import React from "react";
import { Button } from "./ui/button";

interface CustomButtonProps {
  label: string;
  variant: "primary" | "outline";
  width?: boolean;
}

function CustomButton({ label, variant, width = false }: CustomButtonProps) {
  return (
    <Button
      className={`${
        variant === "primary"
          ? "text-white bg-blue-600 hover:bg-blue-800 rounded"
          : "border border-gray-600 bg-transparent text-gray-400 hover:bg-gray-800 hover:text-white"
      }, ${width ? "w-full" : ""} px-8 py-5 rounded-lg`}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
