import Hero from "../components/Hero";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import JoinWaitlist from "../components/JoinWaitlist";
import { PrimaryFeatures } from "../components/PrimaryFeatures";
import TheWhy from "@/components/TheWhy";
import TalkToJournal from "@/components/TalkToJournal";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
import BlogPreviews from "@/components/BlogPreviews";
import Footer from "@/components/Footer";

// bg-gradient-to-b from-gold-100 via-gold-400 to-gold-700

export default function Home() {
  return (
    <div className="bg-white">
      {/* <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-savory-800 via-savory-400 to-phlox-500"> */}
      <Header />
      <main>
        <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-100 via-gold-200 to-savory-600">
          <Hero id="hero" />
          <div className="bg-gradient-to-b from-white/0 via-white/70 to-white/100">
            <TheWhy />
          </div>
        </div>
        <Testimonials />
        <PrimaryFeatures />
        <TalkToJournal />
        <JoinWaitlist />
        <Benefits />
        <Faq />
        <BlogPreviews />
      </main>
      <Footer />
    </div>
  );
}
