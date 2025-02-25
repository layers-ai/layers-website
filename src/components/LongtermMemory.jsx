import Image from "next/image";
import DownloadButton from "@/components/DownloadButton";
const features = [
  {
    name: "Understand your patterns",
    description:
      "layers detects the consistent threads in your reflections, so you can see what repeatedly influences your mood and behavior.",
    emoji: "🔎",
  },
  {
    name: "Connect the dots",
    description:
      "It links related moments from different sessions, revealing connections that might otherwise go unnoticed.",
    emoji: "🔗",
  },
  {
    name: "Empower Your Self-Reflection",
    description:
      "By highlighting these insights, layers gives you a clearer view of your journey—so you can make decisions that lead to a better, more balanced future.",
    emoji: "💪",
  },
];

export default function LongtermMemory() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:mr-auto lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Connecting the dots
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Long-term memory
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                layers remembers every reflection you record and finds the
                hidden connections in your story. Discover recurring themes,
                revisit those key moments, and see how your past shapes your
                present.
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
              <div className="mt-10">
                <DownloadButton section="longterm-memory" size="medium" />
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center lg:justify-start">
            <Image
              src="/images/photo_woman_turquoise.png"
              alt="Long-term memory"
              className="hidden xl:block w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
            <Image
              src="/images/photo_woman_turquoise.png"
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
