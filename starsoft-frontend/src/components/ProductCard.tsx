import ethereum from "@/assets/ethereum.png";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="bg-card-background py-6.5 px-6 w-full max-w-86.25 rounded-lg h-max">

      <div className="flex flex-col gap-12.25">

        <div className="bg-slate-custom w-full h-64.5 flex items-center justify-center rounded-lg">
          <Image src="https://softstar.s3.amazonaws.com/items/star-wand.png" alt="Star Wand" width={216} height={216} />
        </div>

        <div className="flex flex-col gap-2.5 ">
          <h3 className="text-lg">Star Wand</h3>
          <p className="text-gray-custom text-xs font-light truncate">Uma varinha esculpida de madeira de freixo e incrustada com estrelas brilhantes. Concede ao usuário o poder de conjurar magias estelares e controlar a energia das constelações.</p>
          <div className="flex flex-col gap-6 pt-5">
            <div className="flex flex-row gap-1.25 items-center">
              <Image src={ethereum} alt="Ethereum" width={29} height={29} />
              <p className="text-xl font-semibold">32 ETH</p>
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