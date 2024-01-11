const features = [
  {
    name: "Ease Stress & Anxiety",
    description:
      "Verbalizing your emotions helps to manage stress and anxiety by acting as a cognitive release, freeing your mind from persistent worries.",
    emoji: "🍀",
  },
  {
    name: "Sharpen Your Memory",
    description:
      "Revisiting and reflecting on past events sharpens your memory and comprehension.",
    emoji: "🧠",
  },
  {
    name: "Smarter Decisions",
    description:
      "A regular self-reflection practice clarifies and organizes your thoughts and helps you make better decisions.",
    emoji: "🔮",
  },
  {
    name: "Goal Achievement",
    description:
      "Keeping a gratitude journal fosters a positive mindset and enhances your motivation and goal achievement.",
    emoji: "🎯",
  },
  {
    name: "Stronger Relationships",
    description:
      "Reflecting relationships allows for better understanding, leading to stronger, healthier connections and improved personal interactions.",
    emoji: "❤️",
  },
  {
    name: "Narrative Building",
    description:
      "Building a coherent narrative and making sense of emotions and experiences fosters a stronger, more grounded sense of identity and purpose.",
    emoji: "🖋️",
  },
];

export default function Benefits() {
  return (
    <div id="benefits" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proven Benefits Backed by Science
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Embrace regular journaling: Unlock a world of scientifically proven
            benefits for a healthier, more fulfilled life.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-gray-900">
                <span className="mr-2 text-xl">{feature.emoji}</span>
                {feature.name}
              </dt>
              <dd className="mt-1 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
