
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Courses from "../components/Courses/Courses"
import ReviewsSection from '../components/ReviewsSection/ReviewsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Courses/>
      <WhyChooseUs/>
      <ReviewsSection/>
    </>
  );
}