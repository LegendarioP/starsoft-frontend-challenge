import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      <Header />

      <main className="flex flex-1 flex-row flex-wrap justify-center gap-6.25 px-[8.53125rem] py-47.25">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard key={index} />
        ))}

      </main>
      <Footer />

    </div>
  );
}
