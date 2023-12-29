import Features from "./components/features";
import Hero from "./components/hero";
import Header from "./components/header";
import HowStart from "./components/how_start";
import Testimonials from "./components/testimonials";
import JoinWaitlist from "./components/join_waitlist";

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
          <JoinWaitlist />
        </main>
      </div>
    </div>
  );
}
