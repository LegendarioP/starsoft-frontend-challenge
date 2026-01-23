import ethereum from "@/assets/ethereum.png";
import Image from "next/image";


interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ title, description, price, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-card-background py-6.5 px-6 w-full max-w-86.25 rounded-lg h-max">

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
            <button className="w-full py-5.5 bg-primary rounded-lg">
              Comprar
            </button>

          </div>
        </div>
      </div>

    </div>
  )
}