import ethereum from "@/assets/ethereum.png";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { addToCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import {
  BuyButton,
  CardContainer,
  CardContent,
  Description,
  ImageContainer,
  InfoContainer,
  PriceContainer,
  PriceRow,
  PriceText,
  Title
} from "./styles";


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
    <CardContainer
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <CardContent>
        <ImageContainer>
          <Image src={imageUrl} alt={title} width={216} height={216} />
        </ImageContainer>

        <InfoContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>

          <PriceContainer>
            <PriceRow>
              <Image src={ethereum} alt="Ethereum" width={29} height={29} />
              <PriceText>{price} ETH</PriceText>
            </PriceRow>

            <BuyButton
              onClick={!isProductInCart ? handleAddToCart : undefined}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
              disabled={isProductInCart}
            >
              {isProductInCart ? 'Adicionado ao Carrinho' : 'Comprar'}
            </BuyButton>
          </PriceContainer>
        </InfoContainer>
      </CardContent>
    </CardContainer>
  )
}