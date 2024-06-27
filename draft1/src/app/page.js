import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";

export default function Home() {
  return (
    <main className="mx-12 my-5">
      <Navbar />
      <Hero />
      <Events />
    </main>
  );
}
