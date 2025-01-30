"use client";
import AuctionCardDetail from "@/components/AuctionCardDetail";
import Layout from "@/components/Layout";
import { auctions } from "@/data/auctionData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CardDetailProps {
  id: number;
  title: string;
  description: string;
  creator: string;
  collection: string;
  price: number; // price as string, or handle the parsing
  endTime: string; //endTime as String, handle date parsing in the component
  bidHistory: { time: string; price: number }[]; // include the bid history
  bidders: { image: string; fallback: string }[];
  image: string;
}

const CardDetailPage = () => {
  const { id } = useParams();
  const [cardDetail, setCardDetail] = useState<CardDetailProps | null>(null);

  useEffect(() => {
    if (id) {
      // Find the auction card based on the route ID
      const auction = auctions.find(
        (auctionItem) => auctionItem.id === parseInt(id as string)
      );
      setCardDetail(auction || null);
    }
  }, [id]);

  if (!cardDetail) return <div>Loading...</div>;

  return (
    <Layout>
      <AuctionCardDetail {...cardDetail} />
    </Layout>
  );
};

export default CardDetailPage;
