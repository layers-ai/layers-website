import Image from "next/image";

const features = [
  {
    name: "Understand your narrative",
    description:
      "Humans are storytellers by nature. When we understand and take control of our own narrative, we can shape our future.",
    emoji: "🎯",
  },
  {
    name: "Insights for better choices",
    description:
      "Reflect on how your decisions shaped your week and optimize for better outcomes.",
    emoji: "✨",
  },
  {
    name: "Remember what matters",
    description:
      "Rediscovere and relive the impactful events and emotions that have shaped your story.",
    emoji: "❤️",
  },
];

export default function PersonalStory() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                {/* There is more */}
                Review your week
                {/* Discover the story of your week. */}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Story of Your Life
                {/* A personalized weekly podcast */}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {/* Our AI creates a personalized weekly podcast for you. Enjoy
                content that captures your day-to-day activities, achievements,
                and challenges, turning your life into an engaging story. */}
                layers transforms your weekly reflections into a personalized
                story. Learn about what influenced your mood, the people who
                mattered, and the &apos;aha&apos; moment that nearly slipped
                away.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline text-lg font-semibold text-gray-900">
                      {/* <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      /> */}
                      <span className="text-xl mr-2">{feature.emoji}</span>
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline text-lg">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="/images/your-weekly-story-desktop.jpg"
              alt="Your Weekly Story"
              className="hidden xl:block w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
            <Image
              src="/images/your-weekly-story-mobile.jpg"
              alt="Your Weekly Story"
              className="xl:hidden w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
