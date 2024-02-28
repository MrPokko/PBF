import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <div>
       <h2 className="text-center font-bold mb-4">Ilmuwan Yang Luar Biasa</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center">
          <Profile></Profile>
        </div>
        <div className="flex justify-center">
          <Profile></Profile>
        </div>
        <div className="flex justify-center">
          <Profile></Profile>
        </div>
      </div>
    </div>
  );
}