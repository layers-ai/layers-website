// import Features from "./components/features";
import Hero from "../components/Hero";
import Header from "../components/Header";
import HowStart from "../components/HowStart";
import Testimonials from "../components/Testimonials";
import JoinWaitlist from "../components/JoinWaitlist";
// import { PrimaryFeatures } from "../components/PrimaryFeatures";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-100 via-gold-200 to-savory-600">
        {/* <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-savory-800 via-savory-400 to-phlox-500"> */}
        <Header />
        <main>
          <Hero id="hero" />
          <div className="bg-gradient-to-b from-white/0 via-white/50 to-white/100">
            <HowStart />
          </div>
          <Testimonials />
          {/* <PrimaryFeatures /> */}
          <JoinWaitlist />
        </main>
      </div>
    </div>
  );
}
