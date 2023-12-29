import Image from "next/image";

export default function JoinWaitlist() {
  return (
    <div className="bg-white w-full h-screen relative relative">
      <Image
        className="absolute w-full h-full object-cover"
        src="/images/backgrounds/woman-in-field-of-flowers_large_square.png"
        alt=""
        fill
        sizes="100vw"
      />
      <div className="mx-auto w-full sm:px-6 lg:px-8 absolute inset-x-0 top-0">
        <div className="relative isolate overflow-hidden px-6 pt-28 xl:pt-28 sm:px-24">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-savory-800 sm:text-4xl">
            Take care of your mind.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-700">
            Join our waitlist and get notified when we accept new beta testers.
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/90 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-savory-800 px-3.5 py-2.5 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-savory-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
