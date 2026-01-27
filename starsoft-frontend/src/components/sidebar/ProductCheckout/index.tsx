import ethereum from "@/assets/ethereum.png";
import { Icons } from "@/components/icons/AppIcons";
import { useAppDispatch } from "@/hooks/useRedux";
import { CartItem, decrementQuantity, incrementQuantity, removeFromCart } from "@/store/slices/cartSlice";
import Image from "next/image";


interface ProductCheckoutProps {
  item: CartItem;
}

export default function ProductCheckout({ item }: ProductCheckoutProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full px-7.5 py-5 flex flex-row gap-7.75 bg-[#2B2B2B] rounded-lg">

      <div className="flex">
        <div className="w-40.25 h-40.25 flex items-center justify-center bg-slate-custom rounded-lg">
          <Image src={item.image} alt={item.name} width={139} height={139} />
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-center min-w-0">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-medium">{item.name}</span>
          <p className="text-xs font-light tracking-normal text-gray-custom truncate">
            {item.description}
          </p>
        </div>

        <div className="flex flex-row gap-2.5 items-center">
          <Image src={ethereum} alt="Ethereum" width={29} height={29} />
          <p className="text-xl font-semibold">{parseFloat(item.price).toFixed(2)} ETH</p>
        </div>

        <div className="w-full flex flex-row justify-between">

          <div className="flex flex-row bg-background rounded-lg max-w-28.75">
            <button
              className="px-2 py-4 cursor-pointer group"
              onClick={() => dispatch(decrementQuantity(item.id))}
            >
              <Icons.Minus className="group-hover:text-primary" />
            </button>
            <input
              type="text"
              className="ring-0 outline-none w-full text-center bg-transparent"
              value={item.quantity}
              readOnly
            />
            <button
              className="px-2 py-4 cursor-pointer group"
              onClick={() => dispatch(incrementQuantity(item.id))}
            >
              <Icons.Plus className="group-hover:text-primary" />
            </button>
          </div>

          <button
            className="w-10.75 h-10.75 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            <Icons.TrashCan className="text-white w-6.25 h-6.25" />
          </button>
        </div>

      </div>

    </div>
  )
}