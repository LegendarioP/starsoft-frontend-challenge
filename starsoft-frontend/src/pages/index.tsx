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
  const percent = (initialData.products.length / initialData.count) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      <Header />

      <main className="flex-1 px-[8.53125rem] py-47.25 flex flex-col gap-47.25">
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

        <div className="flex justify-center">

          <div className="flex flex-col gap-2.75 w-max">

            <div className="flex w-full h-2.5 bg-[#393939] rounded-lg">
              <div className="bg-primary rounded-lg" style={{ width: `${percent}%` }} />
            </div>

            <button className="px-31.75 py-7.5 w-max bg-[#393939] rounded-lg text-xl leading-6.5 font-semibold">
              Carregar mais
            </button>
          </div>
        </div>

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
