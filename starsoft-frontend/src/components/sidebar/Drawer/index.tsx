import { Icons } from "@/components/icons/AppIcons";
import ProductCheckout from "@/components/sidebar/ProductCheckout";
import { cn } from "@/lib/utils";

import ethereum from "@/assets/ethereum.png";
import Image from "next/image";


export default function SidebarDrawer() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 hidden!"
    // onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        className={cn(
          "relative bg-background rounded-sm shadow-xl w-169.75 h-full right-0 px-7.75 py-15.75 flex flex-col",
          "animate-in zoom-in-95 duration-200",
        )}
      >
        <div className="w-full h-max px-17.5 flex flex-row gap-21 items-center">

          <button className="w-15 h-15 flex items-center justify-center rounded-full bg-[#373737]">
            <Icons.ArrowLeft className="w-8.25 h-8.25 cursor-pointer text-primary" />
          </button>
          <span className="text-2xl font-medium">
            Mochila de Compras
          </span>
        </div>


        <div className="flex flex-col gap-6.75 overflow-y-scroll flex-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductCheckout
              key={index}
              title={`Produto ${index + 1}`}
              description="Descrição do produto que pode ser um pouco longa para testar o truncamento."
              price={0.5 + index * 0.1}
              imageUrl="https://softstar.s3.amazonaws.com/items/star-wand.png"
            />
          ))}
        </div>

        <div className="flex flex-col w-full h-max py-17.5 gap-17.5">

          <div className="flex flex-row w-full justify-between">
            <span>Total</span>
            <div className="flex flex-row gap-2.5 items-center">
              <Image src={ethereum} alt="Ethereum" width={29} height={29} />
              <p className="text-xl font-semibold">44 ETH</p>
            </div>
          </div>


          <button className="w-full bg-primary py-7.25 rounded-lg">
            Finalizar Compra
          </button>
        </div>

      </div>

    </div>
  )
}