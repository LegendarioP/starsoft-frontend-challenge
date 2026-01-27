import brand from "@/assets/brand.png";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { openCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import { Icons } from "../icons/AppIcons";
import SidebarDrawer from "../sidebar/Drawer";
import { CartButton, HeaderContainer } from "./styles";

export default function Header() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderContainer>
      <Image src={brand} alt="Starsoft brand" width={101} height={38} />
      <CartButton onClick={() => dispatch(openCart())}>
        <Icons.Bag className="text-primary" />
        <p>{totalItems}</p>
      </CartButton>
      <SidebarDrawer />
    </HeaderContainer>
  )
}