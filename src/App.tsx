import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import CategoryGrid from "./components/CategoryGrid/CategoryGrid";
import BestsellerGrid from "./components/BestsellerGrid/BestsellerGrid";
import Bestservice from "./components/Bestservices/Bestservice";
import FeaturedPosts from './components/FeaturedPosts/FeaturedPosts';
import TestimonialWithGallery from './components/TestimonialWithGallery/TestimonialWithGallery';
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <CategoryGrid />
      <BestsellerGrid />
      <Bestservice/>
  <FeaturedPosts />
  <TestimonialWithGallery />
  <HeroSection/>
  <Footer/>
  </>
  );
}

export default App;