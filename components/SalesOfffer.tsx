import React from "react";
import GetStartedReuseableComponent from "./GetStartedReuseableComponent";
import NftCardsContainer from "./NftCardsContainer";

function SalesOfffer() {
  return (
    <div>
      <GetStartedReuseableComponent
        overline="Overline"
        title="Sapien ipsum scelerisque convallis fusce"
        description="Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo."
        buttons={[
          { label: "Get started", variant: "primary" },
          { label: "Learn more", variant: "outline" },
        ]}
        imageSrc="/RightImage.png"
        reverse={true}
      />

      <NftCardsContainer />

      <GetStartedReuseableComponent
        overline="Overline"
        title="Habitant tristique aliquam in vel scelerisque"
        description="Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo."
        buttons={[
          { label: "Get started", variant: "primary" },
          { label: "Learn more", variant: "outline" },
        ]}
        imageSrc="/LeftImage.png"
        featureCards={[
          {
            title: "Sollicitudin sapien",
            subtitle: "Cursus fermentum",
          },
          {
            title: "Pulvinar metus",
            subtitle: "Nunc sed",
          },
        ]}
      />
    </div>
  );
}

export default SalesOfffer;
