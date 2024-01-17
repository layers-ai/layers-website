import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

export default function JoinWaitlist() {
  return (
    <div className="bg-white w-full h-screen relative relative">
      <Image
        className="absolute w-full h-full object-cover"
        src="/images/backgrounds/woman-in-field-of-flowers_large_square.jpg"
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
          <WaitlistForm className="mx-auto mt-10 flex max-w-md gap-x-4" />
        </div>
      </div>
    </div>
  );
}
