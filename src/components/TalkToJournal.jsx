import Image from "next/image";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Special moments",
    description:
      "Revisit the moment you first fell in love with your partner, or discover all the magical times you celebrated with friends.",
    icon: CloudArrowUpIcon,
    emoji: "🎉",
  },
  {
    name: "Insights and ideas",
    description:
      "Uncover that elusive idea you only vaguely recall, or effortlessly access a complete list of your thoughtful insights on any topic.",
    icon: LockClosedIcon,
    emoji: "✨",
  },
  {
    name: "People in your life",
    description:
      "Revisit conversations and key memories with loved ones to gain a deeper understanding of your relationships.",
    icon: ServerIcon,
    emoji: "❤️",
  },
];

export default function TalkToJournal() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Chat with Layers
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your personal historian
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                You can simply ask Layers questions about your past entries, and
                it responds with detailed answers, helping you connect with and
                understand your personal history like never before.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      /> */}
                      <span className="text-xl mr-2">{feature.emoji}</span>
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            // src="/images/screenshots/dummy-mockup-single-feature.png"
            src="/images/man-sitting-contemplating-2.png"
            alt="Product screenshot"
            className="hidden xl:block w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          <Image
            // src="/images/screenshots/dummy-mockup-single-feature.png"
            src="/images/man-sitting-contemplating-mobile-small.png"
            alt="Product screenshot"
            className="xl:hidden w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
