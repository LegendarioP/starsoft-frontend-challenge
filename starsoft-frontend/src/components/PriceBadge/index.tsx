import ethereum from "@/assets/ethereum.png";
import Image from "next/image";
import { PriceBadgeContainer, PriceText } from "./styles";


export default function PriceBadge({ price }: { price: number }) {
  return (
    <PriceBadgeContainer>
      <Image src={ethereum} alt="Ethereum" width={29} height={29} />
      <PriceText>{price} ETH</PriceText>
    </PriceBadgeContainer>
  )
}