import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import BrandStorySection from "@/components/home/BrandStorySection";
import QualitySection from "@/components/home/QualitySection";
import ProductsSection from "@/components/home/ProductsSection";
import GallerySection from "@/components/home/GallerySection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandStorySection />
        <QualitySection />
        <ProductsSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
