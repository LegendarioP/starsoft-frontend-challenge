import brand from "@/assets/brand.png";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { openCart } from "@/store/slices/cartSlice";
import { motion, useAnimation } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Icons } from "../icons/AppIcons";
import SidebarDrawer from "../sidebar/Drawer";
import { BagIcon, CartButton, HeaderContainer } from "./styles";

export default function Header() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const prevTotalItems = useRef(totalItems);
  const controls = useAnimation();

  useEffect(() => {
    if (totalItems > prevTotalItems.current && totalItems > 0) {
      controls.start({
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.4 }
      });
    }
    prevTotalItems.current = totalItems;
  }, [totalItems, controls]);

  return (
    <HeaderContainer>
      <Image src={brand} alt="Starsoft brand" width={101} height={38} />
      <CartButton
        onClick={() => dispatch(openCart())}
        aria-label={`Abrir carrinho de compras. ${totalItems} ${totalItems === 1 ? 'item' : 'itens'} no carrinho`}
      >
        <motion.div animate={controls}>
          <BagIcon>
            <Icons.Bag />
          </BagIcon>
        </motion.div>

        {totalItems > 0 && (
          <motion.p
            key={totalItems}
            initial={{ scale: 0.5, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 15
            }}
          >
            {totalItems}
          </motion.p>
        )}
      </CartButton>
      <SidebarDrawer />
    </HeaderContainer>
  )
}