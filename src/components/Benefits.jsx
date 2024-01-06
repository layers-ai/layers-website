const features = [
  {
    name: "Ease Stress & Anxiety",
    description:
      "Writing about your emotions in a journal helps to manage stress and anxiety by acting as a cognitive release, freeing your mind from persistent worries.",
    emoji: "🍀",
  },
  {
    name: "Sharpen Your Memory",
    description:
      "Journaling acts as an external hard drive, improving memory retention. It aids in revisiting and reflecting on past events, sharpening memory and comprehension.",
    emoji: "🧠",
  },
  {
    name: "Smarter Decisions",
    description:
      "Journaling aids decision-making by providing a platform to clarify and organize thoughts, much like solving complex equations more effectively on paper.",
    emoji: "🔮",
  },
  {
    name: "Goal Achievement",
    description:
      "Keeping a gratitude journal not only fosters a positive mindset but also aids in achieving personal goals by maintaining focus and enhancing motivation.",
    emoji: "🎯",
  },
  {
    name: "Emotional Balance & Stronger Relationships",
    description:
      "Journaling about emotions and relationships allows for better emotional management and understanding, leading to stronger, healthier connections and improved personal interactions.",
    emoji: "❤️",
  },
  {
    name: "Narrative Building",
    description:
      "Regular journaling helps construct a coherent personal narrative, making sense of emotions and experiences and fostering a stronger, more grounded sense of identity and purpose.",
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
