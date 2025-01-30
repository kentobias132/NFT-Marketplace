import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auctionData, categoriesData } from "@/data/auctionData";
import CustomButton from "./CustomButton";
import AuctionCard from "./AuctionCard";

const CategoryTabs = () => (
  <Tabs defaultValue="architecture" className="w-full">
    <TabsList className="bg-transparent border border-white/10 rounded-full h-12 p-1">
      {categoriesData.map((category) => (
        <TabsTrigger
          key={category.id}
          value={category.id}
          className="rounded-full px-6 text-white/60 data-[state=active]:bg-white/10 data-[state=active]:text-white"
        >
          {category.label}
        </TabsTrigger>
      ))}
    </TabsList>
  </Tabs>
);

const AuctionCardContainer = () => {
  return (
    <div className="font-sora border-t border-t-gray-800 p-20 pb-0">
      <div className="max-w-7xl mx-auto space-y-10 pb-20 border-b border-gray-800">
        <div className="text-center space-y-6">
          <span className="text-[#7780A1] text-sm font-inter uppercase tracking-wider">
            overline
          </span>
          <h2 className="text-2xl font-semibold text-white">
            Most popular live auctions
          </h2>
          <CategoryTabs />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {auctionData.map((item) => (
            <AuctionCard key={item.id} {...item} />
          ))}
        </div>
        <div className="text-center">
          <CustomButton label="Show me more" variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default AuctionCardContainer;
