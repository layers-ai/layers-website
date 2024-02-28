import Image from "next/image";

const featuredTestimonial = {
  body: "layers has helped me build a deeper, more trusting relationship with myself. That's priceless.",
  author: {
    name: "Michael Bohmeyer",
    handle: "Entrepreneur & Activist",
    imageUrl: "/images/testimonials/michael-bohmeyer.jpg",
  },
};
const testimonials = [
  [
    [
      // Left column
      // left 1
      {
        body: "I never felt like a 'journal person.' layers helps me understand my emotions without feeling overwhelmed.",
        author: {
          name: "Giselle Babtiste",
          handle: "Teacher",
          imageUrl: "/images/testimonials/giselle-babtiste.jpg",
        },
      },
      // left 2

      {
        body: "It's like having a wise friend who remembers everything for you - the good, the bad, and the lessons.",
        author: {
          name: "Vicky Etherington",
          handle: "CPO & Coach",
          imageUrl: "/images/testimonials/vicky-etherington.jpg",
        },
      },
      // More testimonials...
    ],
    [
      // bottom left
      {
        body: "layers helps me connect with myself amidst life changes. It's like quick, insightful therapy sessions tailored to my day.",
        author: {
          name: "Burcu Gürbüz",
          handle: "MD",
          imageUrl: "/images/testimonials/burcu-guerbuez.jpeg",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      // bottom right
      {
        body: "Like a personal growth tracker - I see changes in my mood, mindset, and behaviors. Super motivating!",
        author: {
          name: "Lars Andersen",
          handle: "Yoga Instructor",
          imageUrl: "/images/testimonials/lars-andersen.jpg",
        },
      },
      // More testimonials...
    ],
    [
      // Right column
      // right 1
      {
        body: "I love the personalized podcast! It highlights my strengths and blind spots - powerful fuel for my Monday mornings.",
        author: {
          name: "Niclas Rohrwacher",
          handle: "Founder & Podcast Host",
          imageUrl: "/images/testimonials/niclas-rohrwacher.jpg",
        },
      },

      // right 2
      {
        body: "No more vague self-help! layers offers data-driven insights tailored to my life - that's what makes the difference.",
        author: {
          name: "Tabea Wolf",
          handle: "Artist & Author",
          imageUrl: "/images/testimonials/tabea-wolf.jpg",
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="relative isolate bg-white pb-32 pt-24 sm:pt-32"
    >
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-savory-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What our beta testers are saying about journaling with layers
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <Image
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
                width="80"
                height="80"
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600">{`${featuredTestimonial.author.handle}`}</div>
              </div>
              {/* <img
                className="h-10 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
              /> */}
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                          width={80}
                          height={80}
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
