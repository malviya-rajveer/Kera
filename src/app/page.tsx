import { Companies } from "@/components/Companies";
import { OurFeatures } from "@/components/features";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { OurChip } from "@/components/OurChip";
import { CenteredContent } from "@/components/ui/centeredContent";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-black">
      <CenteredContent>
        <Navbar />
        <HeroSection />
        <Companies />
        <OurChip />
        <OurFeatures />
        <Footer />
      </CenteredContent>
    </div>
  );
}
