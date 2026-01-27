import brand from "@/assets/brand.png";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "../icons/AppIcons";
import SidebarDrawer from "../sidebar/Drawer";
import { CartButton, HeaderContainer } from "./styles";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Image src={brand} alt="Starsoft brand" width={101} height={38} />
      <CartButton onClick={() => setIsOpen(true)}>
        <Icons.Bag className="text-primary" />
        <p>0</p>
      </CartButton>
      <SidebarDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </HeaderContainer>
  )
}