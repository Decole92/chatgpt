"use client";
import {
  ArrowRightOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import NewChat from "./NewChat";
import ChatRow from "./ChatRow";
import LogOut from "./LogOut";
import Buttons from "./Buttons";
import DeleteAll from "./DeleteAll";
import ModeUI from "./ModeUI";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";

export default function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );
  const { data: open } = useSWR("open", {
    fallbackData: false,
  });
  return (
    <div className={`${open === true ? "inline " : "hidden"} md:inline`}>
      <div className="flex flex-col p-2 h-screen">
        <div className="flex-1">
          <div>
            <NewChat />
            <div className="hidden sm:inline">
              <ModelSelection />
            </div>
          </div>
          <div className="scrollbar-thin scrollbar-track-hidden scrollbar-thumb-inherit h-[400px]">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chat...</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow id={chat.id} key={chat.id} />
            ))}
          </div>
          <div className="border-t border-t-gray-700/50">
            <DeleteAll />
            <ModeUI />
            <Buttons Title="OpenAl Discord" Icon={CpuChipIcon} />
            <Buttons Title="Updates & FAQ" Icon={ArrowTopRightOnSquareIcon} />
            <LogOut />
          </div>
        </div>
      </div>
    </div>
  );
}
