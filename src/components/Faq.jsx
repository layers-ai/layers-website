"use client";

import { Disclosure } from "@headlessui/react";
import { sendGAEvent } from "@next/third-parties/google";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "How does layers help me discover more about myself?",
    answer:
      "layers transforms your reflections into a powerful tool for self-understanding. It uses AI to analyze your entries to uncover patterns, identify key themes, and highlight important insights. Plus, our insightful prompts guide you deeper, fostering a rich understanding of your thoughts, emotions, and goals.",
    ga_key: "discover_more_about_myself",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. Your privacy is paramount to us. We encrypt your data at rest and implement strict security protocols to ensure your reflections remain completely confidential. Rest assured, your data will never be shared or sold.",
    ga_key: "data_safety",
  },
  {
    question: "What sets layers apart from other journaling apps?",
    answer:
      "layers is more than just a journal. layers transforms journaling from a blank page into a guided conversation with your reflection companion. Effortlessly record your reflections using voice-to-text, unlock deeper insights with personalized prompts, and uncover patterns in your life with AI-powered analysis. Plus, our approach is rooted in positive psychology, ensuring a focus on self-understanding, growth, and well-being.",
    ga_key: "what_sets_layers_apart",
  },

  {
    question: "Can I try layers before subscribing?",
    answer:
      "Of course! We will offer a free trial so you can experience the transformative power of layers for yourself.",
    ga_key: "try_layers",
  },

  {
    question: "I’m new to journaling. Will layers help me get started?",
    answer:
      "Definitely! layers makes journaling incredibly easy. Forget about blank pages – our voice-to-text feature and guided prompts help you get your thoughts flowing. You'll be amazed at how quickly it becomes a natural part of your routine.",
    ga_key: "new_to_journaling",
  },
];

export default function Faq() {
  const handleOpen = (ga_key) => {
    sendGAEvent("event", "select_content", {
      content_type: "faq",
      content_id: ga_key,
    });
  };

  return (
    <div id="faq" className="bg-savory-superdark">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure
                as="div"
                key={faq.question}
                className="pt-6"
                onClick={() => handleOpen(faq.ga_key)}
              >
                {({ open }) => {
                  return (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <Minus className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <Plus className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-300">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  );
                }}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
