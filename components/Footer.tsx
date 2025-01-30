import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-10 py-12 px-6 md:px-16">
      <div className="border font-sora border-gray-600 rounded-3xl container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-between flex-col p-8">
          <div className="flex items-center space-x-2">
            <Link href={"/"}>
              <Image
                src={"/Sygnet.png"}
                alt="NFT logo"
                width={30}
                height={30}
              />
            </Link>
            <h2 className="text-xl font-semibold">NFT Market</h2>
          </div>
          <div className="mt-4 flex space-x-6 text-gray-400 text-sm">
            <Link href="#" className="hover:text-white">
              Support
            </Link>
            <Link href="#" className="hover:text-white">
              Term of Service
            </Link>
            <Link href="#" className="hover:text-white">
              License
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-x border-gray-600 p-8">
          <ul className="space-y-3">
            <li>
              <Link href="#" className="hover:text-white">
                Auctions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Roadmap
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Discover
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Community
              </Link>
            </li>
          </ul>

          <div className=" py-8">
            <CustomButton label="My account" variant="primary" />
          </div>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4 text-gray-400">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
            <Github className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="p-8 flex flex-col justify-between">
          <p className="text-gray-400 text-sm">
            Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
            velit, sed egestas in. Id nam semper dolor tellus vulputate eget
            turpis.
          </p>
          <div className="mt-4 flex items-center space-x-2 bg-white p-2 rounded-lg">
            <Input
              type="email"
              placeholder="Newsletter"
              className="bg-transparent border-none text-black bg-white focus:outline-none"
            />
            <Button className="bg-white text-black hover:bg-gray-300">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
