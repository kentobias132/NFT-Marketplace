import { UserCircle, Grid2x2Check, Palette, Wallet } from "lucide-react";
import GetStartedReuseableComponent from "./GetStartedReuseableComponent";
import Image from "next/image";

const stats = [
  {
    id: 1,
    icon: <UserCircle size={24} />,
    value: "300k",
    label: "Users Active",
  },
  { id: 3, icon: <Grid2x2Check size={24} />, value: "15,5k", label: "Artists" },
  { id: 2, icon: <Palette size={24} />, value: "52,5k", label: "Artworks" },
  { id: 4, icon: <Wallet size={24} />, value: "35.58", label: "ETH Spent" },
];

const UserStatscard = () => {
  return (
    <div className=" container mx-auto px-6 py-16 my-20 ">
      <div className=" relative rounded-tl-none  rounded-2xl pl-8 pr-0 bg-gradient-to-bl from-[#242533] to-[#0B0C14] w-full">
        <Image
          src="/pleat4.png"
          alt="pleat"
          width={250}
          height={250}
          className="absolute left-0 -top-6"
        />
        <GetStartedReuseableComponent
          overline="Overline"
          buttons={[
            { label: "Get started", variant: "primary" },
            { label: "Learn more", variant: "outline" },
          ]}
          title="Cursus vitae sollicitudin donec nascetur. Join now"
          description="Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt."
          imageSrc="/Users.png"
          reverse={true}
          titleSize="small"
        />
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="pt-24">
      <div className="container mx-auto flex flex-wrap justify-center gap-10 md:gap-20">
        {stats.map(({ id, icon, value, label }) => (
          <div key={id} className="text-center font-sora text-white space-y-2">
            <div className="flex justify-center text-gray-400">{icon}</div>
            <h2 className="text-3xl font-medium">{value}</h2>
            <p className="text-sm text-gray-400">{label}</p>
          </div>
        ))}
      </div>
      <UserStatscard />
    </section>
  );
};

export default StatsSection;
