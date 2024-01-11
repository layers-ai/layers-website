"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What's the method behind layers?",
    answer:
      "Layers is grounded in Positive Psychology principles, a psychology field that studies positive human functioning and flourishing, focusing on strengths, well-being, and happiness.",
  },
  {
    question: "How much will layers cost?",
    answer:
      "We're still finalizing pricing, but we're aiming for approximately $13 monthly or $100 annually.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. We enforce rock solid data security and follow leading industry standards for medical data. All data in our databases is encrypted at rest. Layers is built to keep your information private, safe and secure. ",
  },
  {
    question: "How is my data handled?",
    answer:
      "We process your data exclusively in our cloud infrastructure in Germany and with our data processing partners to deliver our service. We guarantee your data is never sold or shared with others.",
  },

  {
    question: "I want to work with you. Where can I apply?",
    answer:
      "While we're keeping our team compact during layers' initial development, we're always open to collaborating with talented individuals. Reach out to us at hello@layersjournal.app for opportunities.",
  },
];

export default function Faq() {
  return (
    <div id="faq" className="bg-savory-superdark">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
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
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
