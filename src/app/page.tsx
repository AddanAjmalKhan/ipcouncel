import Hero from "@/components/sections/home/Hero";
import CommitmentSection from "@/components/sections/home/CommitmentSection";
import PracticeAreasSection from "@/components/sections/home/PracticeAreasSection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CommitmentSection />
      <PracticeAreasSection />
      <IndustriesSection />
      <CtaBanner />
    </>
  );
}
