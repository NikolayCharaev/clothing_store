import AppProvider from '@/components/AppProvider/AppProvider';
import Slider from '@/components/Slider/Slider';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import Categories from '@/components/Categories/Categories';
import Contact from '@/components/Contact/Contact';
export default function Home() {
  return (
    <>
      <AppProvider>
        <Slider />
        <FeaturedProducts type="featured" />
        <Categories />
        <FeaturedProducts type="trending" />
        <Contact />
      </AppProvider>
    </>
  );
}
