import { Icons } from "@/components/icons/AppIcons";
import ProductCheckout from "@/components/sidebar/ProductCheckout";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { cn } from "@/lib/utils";
import { closeCart } from "@/store/slices/cartSlice";

import ethereum from "@/assets/ethereum.png";
import Image from "next/image";
import { useEffect } from "react";


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
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",
        !isOpen && "hidden"

      )}
      onClick={handleClose}
      data-open={isOpen}
    >
      <div
        className={cn(
          "relative bg-background rounded-sm shadow-xl w-169.75 h-full right-0 px-7.75 py-15.75 flex flex-col",
          "animate-in zoom-in-95 duration-200",
          !isOpen && "hidden"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-max px-17.5 flex flex-row gap-21 items-center">

          <button className="w-15 h-15 flex items-center justify-center rounded-full bg-[#373737]"
            onClick={handleClose}>
            <Icons.ArrowLeft className="w-8.25 h-8.25 cursor-pointer text-primary" />
          </button>
          <span className="text-2xl font-medium">
            Mochila de Compras
          </span>
        </div>


        <div className="flex flex-col gap-6.75 overflow-y-scroll flex-1">
          {items.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-custom">
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            items.map((item) => (
              <ProductCheckout
                key={item.id}
                item={item}
              />
            ))
          )}
        </div>

        <div className="flex flex-col w-full h-max py-17.5 gap-17.5">

          <div className="flex flex-row w-full justify-between">
            <span>Total</span>
            <div className="flex flex-row gap-2.5 items-center">
              <Image src={ethereum} alt="Ethereum" width={29} height={29} />
              <p className="text-xl font-semibold">{total} ETH</p>
            </div>
          </div>


          <button
            className="w-full bg-primary py-7.25 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            disabled={items.length === 0}
          >
            Finalizar Compra
          </button>
        </div>

      </div>

    </div>
  )
}