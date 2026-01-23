import brand from "@/assets/brand.png";
import Image from "next/image";
import { Icons } from "../icons/AppIcons";
import { CartButton, HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={brand} alt="Starsoft brand" width={101} height={38} />
      <CartButton>
        <Icons.Bag className="text-primary" />
        <p>0</p>
      </CartButton>
    </HeaderContainer>
  )
}