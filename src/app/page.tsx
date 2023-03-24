"use client";
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import ChatInput from "@/components/ChatInput";
import { v4 as uuid } from "uuid";
import Notes from "@/components/Notes";

function HomePage() {
  const id = uuid();
  return (
    <div className="md:h-screen flex text-white flex-col items-center md:justify-center px-2">
      <div className="flex-1">
        <h1 className="text-5xl -mt-5 md:mb-20 md:pt-10 mb-5 text-white text-center font-bold">
          ChatGPT
        </h1>
        <Notes />
      </div>
      <ChatInput chatId={id} />
    </div>
  );
}
export default HomePage;
