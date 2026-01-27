import { GetServerSideProps } from "next";
import { MainContainer } from "./styles";

interface ProductDetailsProps {
  productID: string;
}

export default function ProductPage({ productID }: ProductDetailsProps) {
  return (
    <MainContainer>
      Pagina de detalhes do produto com ID: {productID}
    </MainContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  return {
    props: {
      productID: id,
    },
  };
};
