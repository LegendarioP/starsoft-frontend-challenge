import { Icons } from "@/components/icons/AppIcons";
import ProductCheckout from "@/components/sidebar/ProductCheckout";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { closeCart } from "@/store/slices/cartSlice";
import { AnimatePresence } from "motion/react";

import ethereum from "@/assets/ethereum.png";
import Image from "next/image";
import { useEffect } from "react";
import {
  BackButton,
  CheckoutButton,
  DrawerPanel,
  EmptyCart,
  Footer,
  Header,
  ItemsContainer,
  Overlay,
  Title,
  TotalLabel,
  TotalPrice,
  TotalRow,
  TotalValue
} from "./styles";


export default function SidebarDrawer() {
  const dispatch = useAppDispatch();
  const { items, isOpen } = useAppSelector((state) => state.cart);

  const handleClose = () => dispatch(closeCart());

  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
          data-open={isOpen}
        >
          <DrawerPanel
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Header>
              <BackButton onClick={handleClose}>
                <Icons.ArrowLeft className="w-8.25 h-8.25 cursor-pointer text-primary" />
              </BackButton>
              <Title>Mochila de Compras</Title>
            </Header>

            <ItemsContainer>
              {items.length === 0 ? (
                <EmptyCart>
                  <p>Seu carrinho está vazio</p>
                </EmptyCart>
              ) : (
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <ProductCheckout
                      key={item.id}
                      item={item}
                    />
                  ))}
                </AnimatePresence>
              )}
            </ItemsContainer>

            <Footer>
              <TotalRow>
                <TotalLabel>Total</TotalLabel>
                <TotalPrice>
                  <Image src={ethereum} alt="Ethereum" width={29} height={29} />
                  <TotalValue>{total} ETH</TotalValue>
                </TotalPrice>
              </TotalRow>

              <CheckoutButton disabled={items.length === 0}>
                Finalizar Compra
              </CheckoutButton>
            </Footer>
          </DrawerPanel>
        </Overlay>
      )}
    </AnimatePresence>
  )
}