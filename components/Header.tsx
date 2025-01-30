import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed font-sora top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 px-4">
      <div className=" px-6 flex justify-between items-center py-4">
        <Link href={"/"}>
          <Image src={"/Sygnet.png"} alt="NFT logo" width={30} height={30} />
        </Link>
        <nav className="flex gap-6">
          <a href="#" className="text-gray-300 hover:text-white">
            Auctions
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Roadmap
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Discover
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Community
          </a>
        </nav>
        <div className="flex gap-4">
          <CustomButton label="Contact" variant="outline" />
          <CustomButton label="My Account" variant="primary" />
        </div>
      </div>
    </header>
  );
};

export default Header;
