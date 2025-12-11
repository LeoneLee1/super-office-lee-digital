import Navbar from "@/components/Navbar";
import CitiesSections from "@/features/cities/sections/CitiesSections";
import FreshSpaceSections from "@/features/offices/sections/FreshSpaceSections";
import BenefitSections from "@/components/BenefitSections";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CitiesSections />
      <BenefitSections />
      <FreshSpaceSections />
    </>
  );
}
