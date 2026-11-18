import { About } from "@/components/About";
import { BottomNav } from "@/components/BottomNav";
import { Catalog } from "@/components/Catalog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { products } from "@/data/products";
import { uniqueCategories } from "@/lib/category-config";

export default function HomePage() {
  const categories = uniqueCategories(products.map((product) => product.category));

  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <div className="bg-ink px-4 py-2 text-center text-xs font-bold text-white sm:text-sm">
          Projeto demonstrativo da Orbitamos · Produtos e preços ilustrativos · Não há vendas neste site
        </div>
        <Hero />
        <Catalog products={products} categories={categories} />
        <About />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
