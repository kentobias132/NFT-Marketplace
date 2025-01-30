import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { auctions } from "@/data/auctionData";
import Link from "next/link";

interface AuctionCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  endTime: string;
  bidders: Array<{
    image: string;
    fallback: string;
  }>;
  likesCount: number;
  biddersCount: number;
  isLiked?: boolean;
}

const auctionsData: AuctionCardProps[] = auctions;

export default function Auction() {
  return (
    <div className="bg-gray-950 font-sora min-h-screen p-8">
      <h2 className="text-white text-center text-2xl lg:text-3xl font-semibold my-16">
        Latest live auctions
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {auctionsData.map((slide, index) => (
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
              <Link key={slide.id} href={`/card-details/${slide.id}`}>
                <Card className="group bg-transparent font-sora p-4 border-zinc-800">
                  <CardContent className="relative p-0">
                    <div className=" relative aspect-[3/4] overflow-hidden rounded-xl">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-start p-0 flex-col gap-4 py-2 ">
                    <div className="flex ">
                      <h3 className=" font-semibold text-white/90 line-clamp-2">
                        {slide.title}
                      </h3>
                      <span className="text-sm h-[60%] bg-[#514CFF]/15 text-[#514CFF] px-3 py-1 rounded-md">
                        {slide.price}ETH
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-4 h-4"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      <span>{slide.endTime} min left</span>
                    </div>
                    <div className="flex items-center border-t border-[#262840] pt-2 justify-between w-full">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          {slide.bidders.map((avatar, index) => (
                            <Avatar
                              key={index}
                              className="border-2 border-zinc-900 w-6 h-6"
                            >
                              <AvatarImage src={avatar.image} />
                              <AvatarFallback className="text-xs">
                                {avatar.fallback}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <span className="text-xs text-white/60">
                          {slide.biddersCount} people are looking
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart
                          className={cn(
                            "w-4 h-4 ",
                            slide.isLiked
                              ? "text-red-600 fill-red-500"
                              : "text-white/60"
                          )}
                        />
                        <span className="text-xs text-white/60">
                          {slide.likesCount}
                        </span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none" />
      </Carousel>
    </div>
  );
}
