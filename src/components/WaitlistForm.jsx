"use client";

import { useState, useTransition } from "react";
import { useFormState } from "react-dom";
import { createWaitlist } from "@/app/actions";

import WaitlistSuccess from "@/components/WaitlistSuccess";

import { sendGAEvent } from "@next/third-parties/google";

const initialFormState = {
  success: false,
  shareId: "e478da84",
  waitlistCount: 200,
};

export default function WaitlistForm({ className, inHero = false }) {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");

  const [formState, formAction] = useFormState(
    createWaitlist,
    initialFormState
  );

  function handleSubmit(event) {
    let section = inHero ? "hero" : "waitlist_section";
    sendGAEvent({ event: "join_waitlist", section: section });
    startTransition(() => {
      formAction(event);
      setInputValue("");
    });
  }

  return (
    <>
      {inHero && (
        <form className={className} action={handleSubmit} id="HeroWaitlistForm">
          {formState && !formState.success && (
            <div className="flex gap-x-2">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-savory-300 focus:ring-2 focus:ring-inset focus:ring-savory-600 sm:text-md sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                disabled={isPending}
                className="flex-none rounded-md bg-savory-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-savory-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savory-600 tracking-wider"
              >
                {isPending ? "Joining..." : "Join Waitlist"}
              </button>
            </div>
          )}
          {formState && formState.success && (
            <WaitlistSuccess
              waitlistCount={formState.waitlistCount}
              shareId={formState.shareId}
            />
          )}

          {/* <p className="mt-4 text-sm leading-6 font-light text-gold-800">
        We care about your data. Read our{" "}
        <a
          href="#"
          className="font-semibold text-gold-900 hover:text-gold-700"
        >
          privacy&nbsp;policy
        </a>
        .
      </p> */}
        </form>
      )}
      {/* Form for large section */}
      {!inHero && (
        <form
          className={className}
          action={handleSubmit}
          id="SectionWaitlistForm"
        >
          {formState && !formState.success && (
            <>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="min-w-0 bg-white/90 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-md sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                disabled={isPending}
                className="flex-none rounded-md bg-savory-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-savory-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savory-600 tracking-wider"
              >
                {isPending ? "Joining..." : "Join Waitlist"}
              </button>
            </>
          )}
          {formState && formState.success && (
            <WaitlistSuccess
              waitlistCount={formState.waitlistCount}
              shareId={formState.shareId}
            />
          )}
        </form>
      )}
    </>
  );
}
