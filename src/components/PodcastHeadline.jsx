export default function PodcastHeadline() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-100/25 via-gold-200/50 to-savory-600/25">
      <div className="mx-auto max-w-2xl text-center">
        {/* <p className="text-base font-semibold leading-7 text-indigo-600">Get the help you need</p> */}
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-savory-superdark sm:text-6xl">
          But There is More
        </h2>
        <p className="mt-6 text-xl leading-8 text-savory-superdark">
          Sure, charts are nice, summaries are useful… but wouldn&apos;t it be
          amazing if you could experience your week in a whole new way? Imagine
          a personalized podcast, delivered right to you each Monday.
        </p>
      </div>
    </div>
  );
}
