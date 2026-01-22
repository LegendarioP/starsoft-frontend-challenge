import brand from "@/assets/brand.png";
import Image from "next/image";
import { Icons } from "../components/icons/AppIcons";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-full px-10.75 py-5.75 border-b border-white/21 h-max">
      <Image src={brand} alt="Starsoft brand" width={101} height={38} />
      <button className="flex flex-row items-center justify-center gap-2.25 text-white p-2.5 cursor-pointer">
        <Icons.Bag className="text-primary" />
        <p>0</p>
      </button>
    </div>
  )
}