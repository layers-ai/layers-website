import Image from "next/image";

export default function Story() {
  return (
    <div id="story" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Journaling, Reimagined.
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What if Your Journal Could Understand You?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ever have a moment of profound clarity, only to lose it in the
                chaos of everyday life? Those forgotten insights, buried within
                old notebooks, hold the potential for growth and change. With
                layers, your reflections become an ongoing conversation.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Effortlessly capture those fleeting thoughts, get insightful
                prompts for greater self-awareness, and rediscover the forgotten
                wisdom within your own words. Transform your journaling into a
                journey of self-discovery, powered by the magic of AI.
              </p>
            </div>
          </div>
          <Image
            src="/images/man-sitting-contemplating-desktop.jpg"
            alt="Product screenshot"
            className="hidden xl:block w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          <Image
            src="/images/man-sitting-contemplating-mobile.jpg"
            alt="Product screenshot"
            className="xl:hidden w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
