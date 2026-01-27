import { Icons } from "@/components/icons/AppIcons";
import { useAppDispatch } from "@/hooks/useRedux";
import { CartItem, decrementQuantity, incrementQuantity, removeFromCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import PriceBadge from "../../PriceBadge";
import {
  ActionsRow,
  CheckoutContainer,
  ContentWrapper,
  ImageContainer,
  ImageWrapper,
  InfoSection,
  ProductDescription,
  ProductName,
  QuantityButton,
  QuantityControl,
  QuantityInput,
  RemoveButton,
  TrashIcon
} from "./styles";


interface ProductCheckoutProps {
  item: CartItem;
}

export default function ProductCheckout({ item }: ProductCheckoutProps) {
  const dispatch = useAppDispatch();

  return (
    <CheckoutContainer
      layout
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      <ImageWrapper>
        <ImageContainer>
          <Image src={item.image} alt={item.name} width={139} height={139} />
        </ImageContainer>
      </ImageWrapper>

      <ContentWrapper>
        <InfoSection>
          <ProductName>{item.name}</ProductName>
          <ProductDescription>{item.description}</ProductDescription>
        </InfoSection>

        <PriceBadge price={parseFloat(item.price)} />

        <ActionsRow>
          <QuantityControl>
            <QuantityButton onClick={() => dispatch(decrementQuantity(item.id))}>
              <Icons.Minus />
            </QuantityButton>
            <QuantityInput
              key={item.quantity}
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              type="text"
              value={item.quantity}
              readOnly
            />
            <QuantityButton onClick={() => dispatch(incrementQuantity(item.id))}>
              <Icons.Plus />
            </QuantityButton>
          </QuantityControl>

          <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
            <TrashIcon>
              <Icons.TrashCan />
            </TrashIcon>
          </RemoveButton>
        </ActionsRow>
      </ContentWrapper>
    </CheckoutContainer>
  )
}