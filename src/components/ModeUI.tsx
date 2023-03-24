"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function ModeUI() {
  return (
    <div className="flex chatRow">
      <SunIcon className="h-4 w-4" />
      <h2>Light Mode</h2>
    </div>
  );
}

export default ModeUI;
