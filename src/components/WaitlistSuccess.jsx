/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import copy from "copy-to-clipboard";

export default function WaitlistSuccess({ shareId, waitlistCount }) {
  const [buttonText, setButtonText] = useState("Copy");

  function handleCopy(url) {
    copy(url);
    setButtonText("Copied!");
  }

  return (
    <div className="text-base text-gray-900 bg-zinc-50 p-6 rounded-md border-0">
      <h4 className="font-bold">Your current position: {waitlistCount}.</h4>
      <p className="mb-4 mt-2 text-sm">
        Jump ahead in line! Sharing your unique invite link can speed up your
        progress. The more you share, the quicker you climb! Grab your link
        below and start your ascent.
      </p>
      <div className="flex gap-x-2">
        <input
          id="share-link"
          type="text"
          readOnly
          disabled
          className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-savory-300 focus:ring-2 focus:ring-inset focus:ring-savory-600 sm:text-md sm:leading-6"
          value={`https://layersjournal.app/?inviteID=${shareId}`}
        />
        <button
          type="button"
          className="flex-none rounded-md bg-savory-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-savory-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-savory-600 tracking-wider align-middle"
          onClick={() =>
            handleCopy(`https://layersjournal.app/?inviteID=${shareId}`)
          }
        >
          <span>
            <img
              src="/images/copy-text.svg"
              alt=""
              className="h-[16px] w-[16px] inline mr-1"
              unoptimized
            />{" "}
            {buttonText}
          </span>
        </button>
      </div>
    </div>
  );
}
