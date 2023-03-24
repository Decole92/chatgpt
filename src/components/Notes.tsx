import React from "react";
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function Notes() {
  return (
    <div className="md:flex h-[500px] space-x-3 scrollbar-thin scrollbar-track-none scrollbar-thumb-inherit ">
      <div>
        <div className="space-y-3 flex flex-col items-center justify-center mb-5">
          {/*sun Icon */}
          <SunIcon className="h-8 w-8" />
          <h2>Examples</h2>
        </div>
        <div className="space-y-2">
          <p className="info-Text">
            &ldquo;Explain quantum computing in simple terms&ldquo; →
          </p>
          <p className="info-Text">
            &ldquo;Got any creative ideas for a 10 year old&apos;s
            birthday?&ldquo; →
          </p>
          <p className="info-Text">
            &ldquo;How do I make an HTTP request in Javascript?&ldquo; →
          </p>
        </div>
      </div>

      <div>
        <div className="flex space-y-3 flex-col items-center justify-center mb-5">
          {/*Bolt Icon */}
          <BoltIcon className="h-8 w-8" />
          <h2>Capabilities</h2>
        </div>
        <div className="space-y-2">
          <p className="info-Text">
            Remembers what user said earlier in the conversation
          </p>
          <p className="info-Text">
            Allows user to provide follow-up corrections
          </p>
          <p className="info-Text">Trained to decline inappropriate requests</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col space-y-3 items-center justify-center mb-5">
          {/*TriangleIcon Icon */}
          <ExclamationTriangleIcon className="h-8 w-8" />
          <h2>Limitations</h2>
        </div>
        <div className="space-y-2">
          <p className="info-Text">
            May occasionally generate incorrect information
          </p>
          <p className="info-Text">
            May occasionally produce harmful instructions or biased content
          </p>
          <p className="info-Text">
            Limited knowledge of world and events after 2021
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notes;
