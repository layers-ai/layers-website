import Image from "next/image";

import VoiceAssistant from "@/images/voice-assistant.svg";
import BespokePrompts from "@/images/bespoke-prompts.svg";
import WeeklyInsights from "@/images/weekly-insights.svg";

const features = [
  {
    name: "Daily Check-In",
    description:
      "Reflect on what’s important each day. Layers asks you three simple questions. Answer via voice or text and start your journey towards a happier life.",
    href: "#",
    emoji: "🎙️",
    illustration: VoiceAssistant,
  },
  {
    name: "Partner for Self-Reflection",
    description:
      "Layers provides you with bespoke follow-up questions that help you take on new perspectives and gain a deeper understanding of yourself.",
    href: "#",
    emoji: "🪄",
    illustration: BespokePrompts,
  },
  {
    name: "Weekly insights",
    description:
      "Layers automatically distills your daily check-ins into a weekly report about your mental state, essential thoughts and insights and what happened in your life.",
    href: "#",
    emoji: "🔮",
    illustration: WeeklyInsights,
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
            Effortless Self-Discovery
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A coach at your fingertips
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A companion you can always talk to. Who helps you reflect on your
            life and thoughts. And who supports you in nurturing a happy life.
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
