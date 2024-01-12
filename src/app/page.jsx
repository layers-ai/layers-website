import Hero from "../components/Hero";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import JoinWaitlist from "../components/JoinWaitlist";
import { PrimaryFeatures } from "../components/PrimaryFeatures";
import TheWhy from "@/components/TheWhy";
import TalkToJournal from "@/components/TalkToJournal";
import Benefits from "@/components/Benefits";
import Faq from "@/components/Faq";
// import BlogPreviews from "@/components/BlogPreviews";
import Footer from "@/components/Footer";
import PersonalPodcast from "@/components/PersonalPodcast";

// Start Amplify
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";

import config from "@/amplifyconfiguration.json";

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

async function countWaitlist() {
  "use server";
  // Fetch count
  const { data, errors } = await cookiesClient.graphql({
    query: queries.listWaitlists,
  });

  const users = data.listWaitlists.items;

  return users && users.length > 0 && !errors ? users.length : 0;
}

async function createWaitlist(formData) {
  "use server";
  const { data } = await cookiesClient.graphql({
    query: mutations.createWaitlist,
    variables: {
      input: {
        email: formData.get("email")?.toString() ?? "",
      },
    },
  });

  console.log("Created Waitlist: ", data?.createWaitlist);

  let userCount = await countWaitlist();
  console.log(`You are number ${5400 + userCount} on the waitlist!`);

  revalidatePath("/");
}
// End Amplify

export default async function Home() {
  return (
    <div className="bg-white">
      {/* <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-savory-800 via-savory-400 to-phlox-500"> */}
      <Header />
      <main>
        <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-100 via-gold-200 to-savory-600">
          <Hero id="hero" handleWaitlist={createWaitlist} />
          <div className="bg-gradient-to-b from-white/0 via-white/70 to-white/100">
            <TheWhy />
          </div>
        </div>
        <Testimonials />
        <PrimaryFeatures />
        <TalkToJournal />
        <PersonalPodcast />
        <JoinWaitlist />
        <Benefits />
        <Faq />
        {/* <BlogPreviews /> */}
      </main>
      <Footer />
    </div>
  );
}
