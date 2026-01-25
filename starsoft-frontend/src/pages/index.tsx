import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import SidebarDrawer from "@/components/sidebar/Drawer";
import { getProducts } from "@/services/products";
import { ProductFilters, ProductListResponse } from "@/types/product";
import { GetServerSideProps } from "next";

interface HomeProps {
  initialData: ProductListResponse;
}

export default function Home({ initialData }: HomeProps) {
  console.log(initialData);

  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      <Header />

      <main className="flex-1 px-[8.53125rem] py-47.25">
        <ul className="flex flex-row flex-wrap justify-center gap-6.25">
          {initialData.products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              description={product.description}
              price={parseFloat(product.price)}
              imageUrl={product.image}
            />
          ))}
        </ul>

      </main>

      <Footer />

      <SidebarDrawer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const filters: ProductFilters = {
    page: 1,
    rows: 8,
    sortBy: "id",
    orderBy: "ASC",
  };

  try {
    const data = await getProducts(filters);

    return {
      props: {
        initialData: data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return {
      props: {
        initialData: {
          products: [],
          count: 0,
        },
      },
    };
  }
};
