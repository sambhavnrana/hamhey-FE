import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import PropertyGrid from "@/components/property-grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PropertyGrid />
      <Footer />
    </main>
  );
}
