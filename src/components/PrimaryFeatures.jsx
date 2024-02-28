"use client";

import Image from "next/image";

import { Fragment, useEffect, useId, useRef, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useDebouncedCallback } from "use-debounce";

import { AppScreen } from "@/components/AppScreen";
import { Container } from "@/components/Container";
import { PhoneFrame } from "@/components/PhoneFrame";

import { sendGAEvent } from "@next/third-parties/google";

import { BarChart2, AudioLines, Heart } from "lucide-react";

const features = [
  {
    name: "Journal effortlessly and go deeper.",
    description:
      "Talk it out using voice-to-text, then dive into your thoughts with tailored prompts that spark meaningful reflection.",
    icon: AudioLines,
    screen: VoiceScreen,
  },
  {
    name: "Discover the patterns shaping your mood.",
    description:
      "Track your emotional ups and downs, and get data-driven insights into what drives your best and most challenging days.",
    icon: BarChart2,
    screen: MoodChartScreen,
  },
  {
    name: "Understand your emotional landscape.",
    description:
      "Go beyond surface-level feelings. Explore the 'why' behind your emotions for greater self-awareness and personal growth.",
    icon: Heart,
    screen: EmotionChartScreen,
  },
];

function VoiceScreen(props) {
  return (
    <AppScreen className="w-full">
      <Image
        src="/images/screenshots/follow-up-prompt.png"
        alt="accurate voice recognition"
        width={318}
        height={686}
        priority
      />
    </AppScreen>
  );
}

function EmotionChartScreen(props) {
  return (
    <AppScreen className="w-full">
      <Image
        src="/images/screenshots/weekly-emotion-chart.png"
        alt="insightful queries"
        width={318}
        height={686}
        priority
      />
    </AppScreen>
  );
}

function MoodChartScreen(props) {
  return (
    <AppScreen className="w-full">
      <Image
        src="/images/screenshots/weekly-mood-chart.png"
        alt="weekly insights"
        width={318}
        height={686}
        priority
      />
    </AppScreen>
  );
}

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0);
  let [selectedIndex, setSelectedIndex] = useState(0);
  let prevIndex = usePrevious(selectedIndex);
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

  const GaEventMapping = ["checkin", "mood_chart", "emotional_landscape"];

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      // Start GA Tracking
      let slide = GaEventMapping[selectedIndex];
      sendGAEvent("event", "select_content", {
        content_id: slide,
        content_type: "primary_feature",
      });
      // End GA Tracking
      setSelectedIndex(selectedIndex);
      setChangeCount((changeCount) => changeCount + 1);
    },
    100,
    { leading: true }
  );

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-savory-superdark-lighter/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-savory-superdark-lighter"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-6 w-6 text-savory-100" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left focus:outline-none focus-visible:outline-none ui-not-focus-visible:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-base text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  );
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0);
  let slideContainerRef = useRef(null);
  let slideRefs = useRef([]);

  const GaEventMapping = ["checkin", "mood_chart", "emotional_landscape"];

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            // Start GA Tracking
            let slide = GaEventMapping[slideRefs.current.indexOf(entry.target)];
            sendGAEvent("event", "select_content", {
              content_id: slide,
              content_type: "primary_feature",
            });
            // End GA Tracking
            setActiveIndex(slideRefs.current.indexOf(entry.target));
            break;
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    );

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide);
      }
    }

    return () => {
      observer.disconnect();
    };
  });

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => ref && (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-savory-superdark-lighter px-5 py-6">
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-savory-superdark-lighter/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              "relative h-0.5 w-4 rounded-full",
              featureIndex === activeIndex ? "bg-gray-300" : "bg-gray-500"
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: "nearest",
                inline: "nearest",
              });
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  );
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-savory-superdark py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            {/* Discover the layers within you. */}
            {/* Discover the transformative power of self-understanding. */}
            Discover the power of self-understanding.
            {/* More than a journal. Your assistant for well-being. */}
            {/* A life coach. In your pocket. */}
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            {/* Imagine a book that writes itself. Not with fictional stories, but
            with chapters of your own life, offering new perspectives and
            opportunities to grow each time you speak. Pure magic. */}
            {/* Imagine a coach that appears anytime, anywhere on the press of a
            button. Who you can reflect on your life, your thoughts and
            challenges with. And who delivers a detailed report every week. */}
            Imagine a coach at your fingertips – a companion for reflection,
            anytime, anywhere. Effortless journaling, life-changing insights.
            That&apos;s the magic of layers.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
