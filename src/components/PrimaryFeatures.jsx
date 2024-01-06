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

import {
  LightBulbIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Talk to your journal",
    description:
      "People don't talk the way they write. Layers' advanced speech-to-text not only eliminates disfluencies like 'uh' and 'hm' but also cuts out repetitions and incomplete sentences, all while keeping your unique choice of words and style intact.",
    icon: MicrophoneIcon,
    screen: VoiceScreen,
  },
  {
    name: "Discover yourself",
    description:
      "Imagine a magical journal that listens to the stories of your days, then mirrors them back with insights and truths you hadn't seen before. Layers is that journal, revealing the unseen layers of your life every week.",
    icon: LightBulbIcon,
    screen: InsightScreen,
  },
  {
    name: "Your life in a podcast",
    description:
      "Receive a weekly podcast of your life's highlights and reflections. Sit back, listen, and uncover key moments, challenges, and joys, unraveling not just how you feel but why.",
    icon: SpeakerWaveIcon,
    screen: PodcastScreen,
  },
];

function VoiceScreen(props) {
  return (
    <AppScreen className="w-full">
      <Image
        src="/images/screenshots/check-in-voice.png"
        alt="podcast screen"
        width={318}
        height={686}
        priority
      />
    </AppScreen>
  );
}

function InsightScreen(props) {
  return (
    <AppScreen className="w-full">
      <Image
        src="/images/screenshots/home-screen-filled-no-status-bar.png"
        alt="home screen"
        width={318}
        height={686}
        priority
      />
    </AppScreen>
  );
}

function PodcastScreen(props) {
  return (
    <AppScreen className="w-full">
      <Image
        src="/images/screenshots/play-podcast-no-status-bar.png"
        alt="podcast screen"
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

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
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
              <p className="mt-2 text-sm text-gray-400">
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

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
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
  }, [slideContainerRef, slideRefs]);

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
            More than a journal. Your companion for well-being.
            {/* A life coach. In your pocket. */}
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Imagine a book that writes itself. Not with fictional stories, but
            with chapters of your own life, offering new perspectives and
            opportunities to grow each time you speak. Pure magic.
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
