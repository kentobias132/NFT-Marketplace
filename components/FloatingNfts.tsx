import { nftData } from "@/data/auctionData";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const FloatingNfts = () => {
  return (
    <Marquee speed={80} autoFill>
      <div className="flex gap-4">
        {nftData.map((nft) => (
          <div key={nft.id} className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden">
              <Image
                src={nft.image}
                alt="NFT"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <span className="text-xs text-gray-400 mt-2">{nft.price}</span>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default FloatingNfts;
