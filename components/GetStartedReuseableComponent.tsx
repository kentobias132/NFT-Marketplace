import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface FeatureCard {
  title: string;
  subtitle: string;
}

interface ButtonProps {
  label: string;
  variant: "primary" | "outline";
}

interface GetStartedComponentProps {
  overline: string;
  title: string;
  titleSize?: "big" | "small";
  description: string;
  buttons: ButtonProps[];
  imageSrc: string;
  featureCards?: FeatureCard[];
  reverse?: boolean;
}

const GetStartedReuseableComponent = ({
  overline,
  title,
  description,
  titleSize = "big",
  buttons,
  imageSrc,
  featureCards = [],
  reverse = false,
}: GetStartedComponentProps) => {
  return (
    <div>
      <div
        className={`container mx-auto px-6 py-20 flex items-center ${
          reverse ? "flex-row-reverse" : ""
        } ${titleSize === "small" ? "-mr-10" : ""}`}
      >
        <div className="w-1/2 flex justify-center">
          <Image
            src={imageSrc}
            alt="sales image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="w-1/2 space-y-6">
          {/* Overline */}
          {overline && (
            <span className="text-[#7780A1] text-sm font-inter uppercase tracking-wider">
              {overline}
            </span>
          )}

          {/* Title */}
          <h1
            className={`${
              titleSize === "big" ? "text-4xl lg:text-6xl" : "text-4xl"
            } font-sora font-semibold text-white leading-tight`}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-[#7780A1] text-lg max-w-md">{description}</p>
          )}

          {/* Feature Cards */}
          {featureCards.length > 0 && (
            <div className="flex gap-8 mt-6">
              {featureCards.map((card, index) => (
                <div key={index} className="text-white">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-gray-400">{card.subtitle}</p>
                </div>
              ))}
            </div>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <div className="flex gap-4">
              {buttons.map((btn, index) => (
                <CustomButton
                  key={index}
                  label={btn.label}
                  variant={btn.variant}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStartedReuseableComponent;
