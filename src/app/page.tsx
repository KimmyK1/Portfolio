import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 md:px-8">
      <Hero />
      { <Portfolio /> }
      { <TechStack /> }
      { <Footer /> }
    </main>
  );
}