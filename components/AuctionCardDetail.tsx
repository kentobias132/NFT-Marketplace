import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { Heart, Share2, Book } from "lucide-react";
import { auctionData } from "@/data/auctionData";
import AuctionCard from "./AuctionCard";

interface Props {
  title: string;
  description: string;
  creator: string;
  collection: string;
  price: number;
  endTime: string;
  bidders: { image: string; fallback: string }[];
  bidHistory: { time: string; price: number }[];
  image: string;
}
const AuctionCardDetail = ({
  title,
  description,
  creator,
  collection,
  price,
  endTime,
  bidders,
  bidHistory,
  image,
}: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" mt-32 p-4 relative font-sora  border font-sora border-gray-600 max-w-4xl rounded-3xl container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="rounded-2xl">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className=" flex p-8 flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <div className="flex  justify-between items-center">
              <div className="flex items-center mb-2">
                <Image
                  src={bidders[0].image}
                  alt="img"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
                <div className="flex flex-col justify-center">
                  <span className="text-gray-400 text-xs mr-1">Creator</span>
                  <span className="text-white text-xs">{creator}</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full p-1 w-10 h-10 mr-1 bg-gradient-to-r from-teal-500 to-lime-500"></div>
                <div className=" flex flex-col justify-center">
                  <span className="text-gray-400 text-xs mr-1">Collection</span>
                  <span className="text-white text-xs">{collection}</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-2 p-6 bg-gradient-to-bl rounded-2xl from-[#242533] to-[#0B0C14]">
            <div className="flex items-end justify-between mb-3">
              <div>
                <p className="text-gray-400 text-sm">Current price</p>
                <p className="text-white text-2xl font-semibold">
                  {price} <span className="text-sm text-gray-400">ETH</span>
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm text-left">Time left</p>
                <p className="text-white text-sm font-bold text-left">
                  {endTime}
                </p>
                <p className="text-gray-400 text-xs text-left">
                  (01.01.2022 - 01:40:47)
                </p>
              </div>
            </div>
            <div className="py-2">
              <CustomButton
                label="Place a bid"
                variant="primary"
                width={true}
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-400 text-xs">
              History of bids (12 people are bidding)
            </p>
            <div className="relative h-16 border-l border-gray-600 mt-2">
              {bidHistory.map((bid, index) => (
                <React.Fragment key={index}>
                  <div
                    className="absolute  w-2 h-2 rounded-full bg-green-500"
                    style={{
                      left: `${((index + 1) / bidHistory.length) * 100}%`,
                      bottom: `${(bid.price / (price + 1)) * 100}%`, // scale based on current price
                      transform: "translate(-50%, 50%)",
                    }}
                  ></div>
                  {bidHistory.length > 0 && index === bidHistory.length - 1 && (
                    <span
                      className="absolute  text-white text-xs"
                      style={{
                        left: `${((index + 1) / bidHistory.length) * 100}%`,
                        bottom: `${(bid.price / (price + 1)) * 100}%`, // scale based on current price
                        transform: "translate(-50%, -10px)",
                      }}
                    >
                      {bid.price} ETH
                    </span>
                  )}
                </React.Fragment>
              ))}
              <div className="absolute bottom-0 left-0 w-full  border-b border-gray-600"></div>
            </div>
          </div>
        </div>
        <div className="absolute top-16 text-white -right-4 flex flex-col items-center gap-4">
          <div className="p-2 bg-gray-950 rounded-full border border-gray-700">
            <Heart size={16} className="fill-current text-red-600  " />
          </div>
          <div className="p-2 bg-gray-950 rounded-full border border-gray-700">
            <Book size={16} />
          </div>
          <div className="p-2 bg-gray-950 rounded-full border border-gray-700">
            <Share2 size={16} />
          </div>
        </div>
      </div>

      <div className="mt-20 mb-10">
        <div className="text-center text-white py-10">
          <span className="text-[#7780A1] text-sm font-inter uppercase tracking-wider">
            Overline
          </span>
          <h3 className="font-medium font-sora py-2 text-3xl">
            More form this author
          </h3>
        </div>
        <div className="grid mt-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {auctionData.map((item) => (
            <AuctionCard key={item.id} {...item} />
          ))}
        </div>
        <div className="py-10 text-center">
          <CustomButton label="Show me more" variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default AuctionCardDetail;
