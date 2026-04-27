import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function ProductsStandalonePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <ProductGrid />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
