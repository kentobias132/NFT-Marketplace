import React from "react";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface NFTCardProps {
  position: string;
  imageUrl: string;
}

const NFTCard = ({ position, imageUrl }: NFTCardProps) => (
  <div className={`absolute   ${position} animate-float`}>
    <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg relative group">
      <img src={imageUrl} alt="NFT" className="w-full h-full object-cover" />
    </div>
  </div>
);

const HeroSection = () => {
  const nfts = [
    {
      position: "left-60 top-1/3",
      imageUrl: "/Square1.png",
    },
    {
      position: "right-60 top-1/3",
      imageUrl: "/Square2.png",
    },
    {
      position: "left-36 bottom-1/4",
      imageUrl: "/Square3.png",
    },
    {
      position: "right-36 bottom-1/4",
      imageUrl: "/Square4.png",
    },
    {
      position: "right-2/3 bottom-20",
      imageUrl: "/Square5.png",
    },
    {
      position: "left-2/3 bottom-20",
      imageUrl: "/Square3.png",
    },
  ];

  return (
    <div className="bg-[#060714]">
      <div className="relative font-sora min-h-screen bg-[url('/Background.png')] bg-cover bg-center text-white px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Floating NFT Cards */}
        {nfts.map((nft, index) => (
          <NFTCard
            key={index}
            position={nft.position}
            imageUrl={nft.imageUrl}
          />
        ))}

        {/* Main Content */}
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="">
            <div>
              <p className="text-gray-400 font-inter text-sm pb-4">
                NON FUNGIBLE TOKENS
              </p>
              <div className="flex items-center">
                <h1 className="text-7xl font-semibold mb-2">A new NFT </h1>
                <img
                  src="/Frame1.png"
                  alt="nft"
                  className="w-6 h-12 object-contain "
                />
              </div>
              <div className="flex items-center ml-10">
                <img
                  src="/Frame.png"
                  alt="nft"
                  className="w-10 h-12 object-contain mr-2 "
                />
                <h1 className="text-7xl font-bold mb-2">Experience</h1>
              </div>

              <p className="text-gray-400 font-inter text-lg mb-8">
                Discover, collect and sell
              </p>

              {/* Search Bar */}
              <div className="flex gap-2">
                <div className="flex justify-center items-center space-x-2 text-black bg-white py-2 px-4 rounded-xl">
                  <div className="border-r-2 py-1 my-1">
                    <input
                      type="text"
                      placeholder="Items, collections and creators"
                      className="w-72 px-2 focus:outline-none border-none bg-white"
                    />
                  </div>

                  <Select>
                    <SelectTrigger className="w-36 focus:outline-none focus:ring-0 border-none border-r-8 border-red-500 ">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="art">Art</SelectItem>
                      <SelectItem value="collectibles">Collectibles</SelectItem>
                      <SelectItem value="music">Music</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                    </SelectContent>
                  </Select>

                  <Search
                    className=" text-gray-400 hover:cursor-pointer"
                    height={20}
                    width={20}
                  />
                </div>
                <div className="flex-1 relative"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Brand Logos */}
        <div className="absolute bottom-5">
          <div className=" flex justify-center items-center gap-12">
            <Image
              src={"/RitterSport.png"}
              alt="nike logo"
              width={60}
              height={60}
            />
            <Image src={"/Nike.png"} alt="Nike logo" width={60} height={60} />
            <Image
              src={"/Adidas.png"}
              alt="Adidas logo"
              width={60}
              height={60}
            />
            <Image
              src={"/NewHolland.png"}
              alt="New Holland logo"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
