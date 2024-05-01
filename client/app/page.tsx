import Image from "next/image";
import styles from "./page.module.css";
import AppProvider from "@/components/AppProvider/AppProvider";
import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider/Slider";
import Footer from "@/components/Footer/Footer";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
export default function Home() {
  return (
  <>
      <AppProvider>
      <Navbar />
        <Slider />
        <FeaturedProducts/>
        <Footer />
      </AppProvider>
  </>
  );
}
