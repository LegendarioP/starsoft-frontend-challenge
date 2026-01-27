import ethereum from "@/assets/ethereum.png";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { addToCart } from "@/store/slices/cartSlice";
import Image from "next/image";


interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: string;
}

export default function ProductCard({ id, title, description, price, imageUrl, createdAt }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const isProductInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name: title,
      description,
      price: price.toString(),
      image: imageUrl,
      createdAt,
    }));
  };

  return (
    <li className="bg-card-background py-6.5 px-6 w-full max-w-86.25 rounded-lg h-max">

      <div className="flex flex-col gap-12.25">

        <div className="bg-slate-custom w-full h-64.5 flex items-center justify-center rounded-lg">
          <Image src={imageUrl} alt={title} width={216} height={216} />
        </div>

        <div className="flex flex-col gap-2.5 ">
          <h3 className="text-lg">{title}</h3>
          <p className="text-gray-custom text-xs font-light truncate">{description}</p>
          <div className="flex flex-col gap-6 pt-5">
            <div className="flex flex-row gap-1.25 items-center">
              <Image src={ethereum} alt="Ethereum" width={29} height={29} />
              <p className="text-xl font-semibold">{price} ETH</p>
            </div>
            <button
              className="w-full py-5.5 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              onClick={!isProductInCart ? handleAddToCart : undefined}
            >
              {isProductInCart ? 'Adicionado ao Carrinho' : 'Comprar'}
            </button>

          </div>
        </div>
      </div>

    </li>
  )
}