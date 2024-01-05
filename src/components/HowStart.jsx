const steps = [
  {
    id: "step-1",
    title: "Daily check-in",
    text: "Layers asks you a few bespoke questions each day. Respond with ease via voice or text, wherever life takes you. Journaling has never been this effortless.",
    emoji: "🎙️",
  },
  {
    id: "step-2",
    title: "Receive Weekly Insights",
    text: "Learn more about your mood, stress level, and emotional landscape. Revisit key moments, reflect on learnings, and enhance your self-awareness.",
    emoji: "🔮",
  },
  {
    id: "step-3",
    title: "Create your own narrative",
    text: "Capture treasured moments and thoughts. Nurture your well-being, and strengthen your relationships to others by truly understanding yourself.",
    emoji: "🪄",
  },
  // More people...
];

export default function HowStart() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8 lg:pb-32 lg:pt-4">
      <div className="p-4 text-center">
        <h2 className="text-3xl pb-8 font-bold tracking-tight text-savory-600 sm:pb-12 sm:text-4xl">
          How it works
        </h2>
      </div>
      <ul role="list" className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {steps.map((step) => (
          <li
            key={step.id}
            className="col-span-1 rounded-lg bg-zinc-100 hover:bg-zinc-50 drop-shadow-md"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1">
                <div className="flex justify-center items-center text-2xl rounded-full w-[50px] h-[50px] bg-zinc-200 mb-4">
                  {step.emoji}
                </div>
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-1 font-light text-gray-900">{step.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
