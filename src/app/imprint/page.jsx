/* eslint-disable @next/next/no-img-element */

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="bg-white">
      {/* <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-savory-800 via-savory-400 to-phlox-500"> */}
      <Header />
      <main>
        <div className="bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Legal
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              layers: Legal
            </h1>
            <div className="mt-10 max-w-2xl">
              <p>
                layers software UG (i.G.)
                <br />
                Maybachufer 11
                <br />
                12047 Berlin
                <br />
                Germany
                <br />
                <br />
              </p>
              <ul role="list" className=" max-w-xl space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-savory-900"
                  />
                  <span>
                    <span class="email">
                      hello@layers<b>layers</b>journal<b>journal</b>.app
                    </span>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PhoneIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-savory-900"
                  />
                  <span>
                    <span class="email">
                      +49 0162<b>17865</b> 8453<b>7653</b>454
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-10 max-w-2xl">
              <p>
                Represented by: Olaf Spaarmann, Sven Ballentin
                <br />
                Entry in the commercial register.
                <br />
                Register court: Berlin-Charlottenburg
                <br />
                Registration number: PENDING
                <br />
                VAT Identification Number according to §27 a of the VAT Act:
                PENDING
                <br />
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
