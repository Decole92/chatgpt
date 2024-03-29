"use client";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

type Props = {
  id: string;
};
function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const { data: session } = useSession();

  const [messages, loading, error] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };
  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
    //eslint-disable-next-line
  }, [pathname]);

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatRow ${active && "bg-gray-700/50"} `}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon
        onClick={() => removeChat()}
        className="h-4 w-4  hover:text-red-700"
      />
    </Link>
  );
}

export default ChatRow;
