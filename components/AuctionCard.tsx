import React from "react";
import { Heart, Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface AuctionItemProps {
  id: number;
  viewers: number;
  title: string;
  time: string;
  eth: string;
  image: string;
  image2?: string;
  liked: boolean;
  layout?: "column" | "row";
}

const AuctionCard = ({
  id,
  eth,
  image,
  image2 = "",
  liked,
  time,
  title,
  viewers,
  layout = "column",
}: AuctionItemProps) => {
  return (
    <div key={id} className="bg-transparent overflow-hidden">
      {layout === "column" ? (
        <div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={150}
              height={150}
              className="object-cover w-full rounded-xl"
            />
          </div>
          <div className="pt-2">
            <div className="space-y-3 w-full">
              <h3 className="text-sm text-white/90 truncate max-w-[25ch]">
                {title}
              </h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Timer size={16} /> <span className="text-xs">{time}</span>
                </div>
                <span className="text-xs bg-[#514CFF]/15 text-[#514CFF] px-2 py-1 rounded-md">
                  {eth}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-600 pt-2">
                <span className="text-xs text-white/60">
                  {viewers} people are bidding
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-transparent"
                >
                  <Heart
                    className={cn(
                      "w-4 h-4",
                      liked ? "text-red-500 fill-red-500" : "text-white/60"
                    )}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="w-[30%] rounded-lg overflow-hidden">
            <Image
              src={image2}
              alt={title}
              width={100}
              height={100}
              className="object-contain w-full"
            />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-sm text-white/90">{title}</h3>
            <div className="flex justify-between items-center text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Timer size={16} /> <span>{time}</span>
              </div>
              <span className="bg-[#514CFF]/15 text-[#514CFF] px-2 py-1 rounded-md">
                {eth}
              </span>
            </div>
            <div className="flex pt-1 items-center justify-between ">
              <span className="text-xs text-white/60">
                {viewers} people are bidding
              </span>
              <button>
                <Heart
                  className={cn(
                    "w-4 h-4",
                    liked ? "text-red-500 fill-red-500" : "text-white/60"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuctionCard;
