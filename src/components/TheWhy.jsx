const features = [
  {
    name: "Daily Check-In",
    description:
      // "Effortlessly answer thought-provoking prompts tailored to you. Explore deeper with personalized follow-up questions.",
      "Effortlessly answer three questions using your voice and engage deeper with topics through personalised follow-up prompts.",
    href: "#",
    emoji: "☀️",
    // illustration: VoiceAssistant,
  },
  {
    name: "Automatic Analysis",
    description:
      "Get the most out of journaling with layers’ automatic analysis. Uncover what influences your life, whether beneficial or challenging.",
    href: "#",
    emoji: "🪄",
    // illustration: BespokePrompts,
  },
  {
    name: "Weekly insights",
    description:
      "Receive a weekly report, highlighting mental trends, key thoughts, and decisive moments to empower your choices and and create positive change.",
    href: "#",
    emoji: "🔮",
    // illustration: WeeklyInsights,
  },
];

export default function TheWhy() {
  return (
    <div id="product" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-savory-600">
            {/* Focus on what matters */}
            {/* Space for your thoughts */}
            How it works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            layers reveals the patterns in your life to help you become your
            best self.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {/* A companion that helps with your personal development. Who helps you
            reflect on your life and thoughts. And who supports you in nurturing
            a happy life. */}
            An AI-powered journaling assistant that automatically turns your
            entries into actionable insights and helps you live a balanced and
            self-determined life.
            {/* An AI-powered journaling assistant that automatically turns your
            entries into actionable insights. Discover the patterns that shape
            your life and create positive change. */}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                {/* <div className="w-full mb-8">
                  <Image
                    src={feature.illustration}
                    alt="illustration"
                    width="300"
                    height="300"
                  />
                </div> */}
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="text-2xl">{feature.emoji}</div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
