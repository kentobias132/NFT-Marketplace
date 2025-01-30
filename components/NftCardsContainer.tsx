import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import CustomButton from "./CustomButton";
import AuctionCard, { AuctionItemProps } from "./AuctionCard";
import { auctionData } from "@/data/auctionData";
import Image from "next/image";

interface SalesCardProps {
  auctions: AuctionItemProps[];
  heading: string;
  layout?: "grid" | "carousel";
  showMoreButton?: boolean;
}

const SalesCard = ({
  auctions,
  heading,
  layout = "carousel",
  showMoreButton = true,
}: SalesCardProps) => {
  return (
    <div>
      <div className="bg-gray-950 max-w-[400px] border border-gray-800 p-6 rounded-xl">
        <div className="pb-6">
          <h1 className="text-white text-3xl font-semibold font-sora">
            {heading}
          </h1>
        </div>
        {layout === "carousel" ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {auctions.map((item, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/1">
                  <AuctionCard {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none" />
            <CarouselNext className="absolute  right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {auctions.slice(0, 4).map((item, index) => (
              <AuctionCard layout="row" key={index} {...item} />
            ))}
          </div>
        )}
        {showMoreButton && (
          <div className="pt-6 pb-4">
            <CustomButton label="Show me more" variant="outline" width={true} />
          </div>
        )}
      </div>
    </div>
  );
};

const ActionCard = () => {
  return (
    <div className="relative rounded-tl-none flex flex-col  rounded-2xl p-6 bg-gradient-to-bl from-[#242533] to-[#0B0C14] w-full">
      <Image
        src="/pleat.png"
        alt="Decorative"
        width={150}
        height={150}
        className="absolute -top-4 left-0"
      />

      <Image
        src="/hand.png"
        alt="Hand"
        width={350}
        height={350}
        className="-mt-16"
      />

      <div className="mt-4 px-4">
        <h2 className="text-white text-2xl font-semibold">
          Get started creating <br /> & selling your NFTs
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Nunc gravida faucibus netus feugiat <br /> tellus, viverra massa
          feugiat. Mi est sit.
        </p>

        <div className="pt-8">
          <CustomButton label="Get Started" variant="primary" width={true} />
        </div>
      </div>
    </div>
  );
};

function NftCardsContainer() {
  return (
    <div className="container mx-auto px-6 py-20 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <SalesCard
        auctions={auctionData}
        heading="Check Out the Hottest Sales Offer"
        layout="carousel"
      />

      <ActionCard />

      <SalesCard
        auctions={auctionData}
        heading="Top NFT at a Lower Price"
        layout="grid"
      />
    </div>
  );
}

export default NftCardsContainer;
