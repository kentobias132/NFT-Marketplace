import Hero from "@/components/Hero";
import LatestAuctions from "@/components/Auction";
import Layout from "@/components/Layout";
import AuctionCardContainer from "@/components/AuctionCardContainer";
import SalesOfffer from "@/components/SalesOfffer";
import StatsSection from "@/components/UsersStats";
import FloatingNfts from "@/components/FloatingNfts";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <LatestAuctions />
      <SalesOfffer />
      <AuctionCardContainer />
      <StatsSection />
      <FloatingNfts />
    </Layout>
  );
}
