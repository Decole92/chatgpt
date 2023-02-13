'use client';
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import Messages from "./Messages";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
type Props = {
    chatId: string;
}
function Chat({chatId}: Props) {

    const {data: session } = useSession();
    const [messages] = useCollection(session && query(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
    orderBy('createdAt', 'asc')
    ))

  return (
    <div className='flex-1 scrollbar-thin scrollbar-track-[#202123] scrollbar-thumb-[#434654]'>

        {
            messages?.empty && (<>
            <p className='mt text-center text-white'>
                Type your Question below to get started!
            </p>
            <ArrowDownCircleIcon className='h-10 w-10 mx-auto mt-5 text-white animate-bounce'/>
            
            </>)
        }
        {
            messages?.docs.map((message) => 
            <Messages key={message.id} message={message.data()} />
            )
        }
    </div>
  )
}

export default Chat