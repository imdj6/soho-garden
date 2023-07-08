import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar/NavBar.js";
import RepeatedSection from "@/components/RepeatedSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <RepeatedSection
        description="Welcome to Soho Garden, where we take pride in serving delectable oven-to-plate and woodfire
        dishes , variety of mocktails along with refreshing beverages, that are sure to satisfy your cravings.
        Our carefully curated menu features a tantalizing selection of flavors and textures that will leave you
        wanting more.Whether it's experimenting with unique ingredient combinations or perfecting
        traditional recipes, Our dedication shines through in every plate that leaves our kitchen."
        imagesrc="/assets/IMAGE5.JPG"
        aboutheading
      />
      <RepeatedSection
        description="Experience the magic of our oven-baked creations, where each dish is prepared with love and
        attention to detail. From roasted food to hearty baked pasta dishes, our oven-to-plate specialties are
        crafted to perfection, ensuring a symphony of flavors with every bite. Using the finest ingredients
        and time-honoured cooking techniques, our chefs transform simple ingredients into culinary
        masterpieces that will delight your palate."
        imagesrc="/assets/IMAGE2.JPG"
      />
      <RepeatedSection
        description="Step into our cozy cafe, where you'll be greeted with a warm and inviting atmosphere. The
        comforting aromas of freshly prepared food and sizzling woodfire dishes will envelop you as you
        settle into our welcoming space. Whether you're enjoying a meal with friends, having a romantic
        dinner, or simply seeking a moment of solace, our cafe provides the perfect ambiance to enhance
        your dining experience.
        Our menu also features an exquisite selection of Indian food, Mexican dishes, Italian food ,Chinese
        delicacies, and a variety of mocktails and shakes to quench your thirst. Our chefs use only the
        freshest ingredients to prepare each dish, ensuring that every bite is a burst of flavor."
        imagesrc="/assets/IMAGE4.JPG"
      />
      <RepeatedSection
        description="At Soho Garden, we believe that music enhances the dining experience, which is why we have a
        dedicated stage for live performances by talented musicians & Stand-up comedians. You can enjoy
        the music while you Savor your food, creating an ambiance that's perfect for a casual evening with
        friends or a romantic dinner for two."
        imagesrc="/assets/IMAGE3.JPG"
      />
      <Footer/>
    </>
  );
}
