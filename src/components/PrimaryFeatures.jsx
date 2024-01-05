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

const features = [
  {
    name: "Talk to your journal",
    description:
      "People don't talk the way they write. Layers' advanced speech-to-text not only eliminates disfluencies like 'uh' and 'hm' but also cuts out repetitions and incomplete sentences, all while keeping your unique choice of words and style intact.",
    icon: MicrophoneIcon,
    screen: InvestScreen,
  },
  {
    name: "Discover yourself",
    description:
      "Imagine a magical journal that listens to the stories of your days, then mirrors them back with insights and truths you hadn't seen before. Layers is that journal, revealing the unseen layers of your life every week.",
    icon: BulbIcon,
    screen: InviteScreen,
  },
  {
    name: "Your life in a podcast",
    description:
      "Receive a weekly podcast of your life's highlights and reflections. Sit back, listen, and uncover key moments, challenges, and joys, unraveling not just how you feel but why.",
    icon: SpeakerIcon,
    screen: StocksScreen,
  },
];

function BulbIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#DCDDFA"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  );
}

function MicrophoneIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#DCDDFA"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
      />
    </svg>
  );
}

function SpeakerIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#DCDDFA"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
      />
    </svg>
  );
}

function InviteScreen(props) {
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

function StocksScreen(props) {
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

function InvestScreen(props) {
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
            className="relative rounded-2xl transition-colors hover:bg-[#282948]/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-[#282948]"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
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
            <div className="relative transform overflow-hidden rounded-2xl bg-[#282948] px-5 py-6">
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-[#282948]/95 p-6 backdrop-blur sm:p-10">
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
      className="bg-[#171835] py-20 sm:py-32"
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
