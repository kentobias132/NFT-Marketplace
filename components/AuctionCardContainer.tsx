// import React from "react";
// import { Heart } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Image from "next/image";

// interface AuctionItem {
//   id: number;
//   title: string;
//   image: string;
//   time: string;
//   eth: string;
//   viewers: number;
//   liked: boolean;
// }

// const categories = [
//   { id: "architecture", label: "Architecture" },
//   { id: "photography", label: "Photography" },
//   { id: "games", label: "Games" },
//   { id: "music", label: "Music" },
// ];

// export const LiveAuctionCard = ({
//   id,
//   eth,
//   image,
//   liked,
//   time,
//   title,
//   viewers,
// }: AuctionItem) => {
//   return (
//     <Card key={id} className="bg-transparent border-0 overflow-hidden">
//       <CardContent className="p-0">
//         <div className="rounded-xl">
//           {/* <img src={image} alt={title} className="object-cover  h-1/2" /> */}
//           <Image src={image} alt="action image" height={160} width={160} />
//         </div>
//       </CardContent>
//       <CardFooter className="p-2">
//         <div className="space-y-4 w-full">
//           <h3 className="text-sm text-white/90 truncate max-w-[18ch]">
//             {title}
//           </h3>
//           <div className="flex justify-between space-x-3">
//             <div className="flex items-center space-x-2 text-sm text-gray-400">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="w-4 h-4"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <circle cx="12" cy="12" r="10" />
//                 <path d="M12 6v6l4 2" />
//               </svg>
//               <span className="text-xs">{time}</span>
//             </div>
//             <span className="text-xs bg-[#514CFF]/15 text-[#514CFF] px-1 py-1 rounded-md">
//               {eth}
//             </span>
//           </div>

//           <div className="flex border-t border-t-gray-600 items-center justify-between">
//             <span className="text-xs text-white/60">
//               {viewers} people are looking
//             </span>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="hover:bg-transparent"
//             >
//               <Heart
//                 className={cn(
//                   "w-4 h-4",
//                   liked ? "text-red-500 fill-red-500" : "text-white/60"
//                 )}
//               />
//             </Button>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// };

// const LiveAuction = () => {
//   const auctionItems: AuctionItem[] = [
//     {
//       id: 1,
//       title: "Faucibus habitasse id et placerat massa mauris",
//       image: "/Item3.png",
//       time: "22:59",
//       eth: "2:55 ETH",
//       viewers: 101,
//       liked: false,
//     },
//     {
//       id: 2,
//       title: "Diam purus sagittis nisl erat mauris",
//       image: "/Item4.png",
//       time: "22:59",
//       eth: "2:55 ETH",
//       viewers: 101,
//       liked: false,
//     },
//     {
//       id: 3,
//       title: "Nascetur mauris viverra vel id sed",
//       image: "/Item5.png",
//       time: "22:59",
//       eth: "2:55 ETH",
//       viewers: 101,
//       liked: false,
//     },
//     {
//       id: 4,
//       title: "Velit fusce id non dui amet eget maecenas",
//       image: "/Item6.png",
//       time: "22:59",
//       eth: "2:55 ETH",
//       viewers: 101,
//       liked: true,
//     },
//     {
//       id: 5,
//       title: "Tellus duis neque rhoncus pulvinar gravida",
//       image: "/Item7.png",
//       time: "22:59",
//       eth: "2:55 ETH",
//       viewers: 101,
//       liked: false,
//     },
//     {
//       id: 6,
//       title: "Odio lacus neque ultrices purus eget",
//       image: "/Item8.png",
//       time: "22:59",
//       eth: "2:55 ETH",
//       viewers: 101,
//       liked: false,
//     },
//   ];

//   return (
//     <div className="bg-gray-950 font-sora min-h-screen p-8">
//       <div className="max-w-7xl mx-auto space-y-8">
//         <div className="text-center space-y-6">
//           <h2 className="text-2xl font-semibold text-white">
//             Most popular live auctions
//           </h2>
//           <Tabs defaultValue="architecture" className="w-full">
//             <TabsList className="bg-transparent border border-white/10 rounded-full h-12 p-1">
//               {categories.map((category) => (
//                 <TabsTrigger
//                   key={category.id}
//                   value={category.id}
//                   className="rounded-full px-6 text-white/60 data-[state=active]:bg-white/10 data-[state=active]:text-white"
//                 >
//                   {category.label}
//                 </TabsTrigger>
//               ))}
//             </TabsList>
//           </Tabs>
//         </div>

//         <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
//           {auctionItems.map((item) => (
//             <LiveAuctionCard {...item} />
//           ))}
//         </div>

//         <div className="text-center">
//           <Button
//             variant="outline"
//             className="rounded-full px-8 py-2 text-white border-white/10 bg-transparent hover:bg-white/5"
//           >
//             Show me more
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveAuction;

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
