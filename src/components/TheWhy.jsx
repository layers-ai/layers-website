const features = [
  {
    name: "Voice-Enabled Daily Check-In",
    description:
      "Journaling can be time consuming and requires discipline. Layers makes journaling so easy that it can fit in any schedule, anywhere. Simply speak and the app creates beautiful journal entries for you.",
    href: "#",
    emoji: "🎙️",
  },
  {
    name: "Bespoke prompts",
    description:
      "Facing a blank page can be intimidating. Journaling with Layers is more like having a conversation. The app provides tailored questions, aiding you in self-understanding and adopting new perspectives.",
    href: "#",
    emoji: "🪄",
  },
  {
    name: "Weekly insights",
    description:
      "Nobody has time to read old journal entries, yet they hold valuable insights, thoughts, and ideas. Layers condenses these into weekly insights, which you can even enjoy as a mini podcast.",
    href: "#",
    emoji: "🔮",
  },
];

export default function TheWhy() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-savory-600">
            {/* Focus on what matters */}
            {/* Space for your thoughts */}
            Effortless Self-Discovery
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Journaling has never been easier
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet Layers, your AI-assisted journal. We make journaling
            effortless, so you can delve into self-understanding and nurture a
            happy life.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
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
