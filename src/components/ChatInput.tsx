'use client'
import { db } from '@/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-hot-toast'
import { useSession } from 'next-auth/react';
import React, {useState, FormEvent} from 'react'
import ModelSelection from './ModelSelection';
import { usePathname, useRouter } from 'next/navigation';

import useSWR from  'swr';
type Props = {
    chatId: string;
}

function ChatInput({chatId}: Props) {

    const {data: session} = useSession();
    const [prompt, setPrompt] = useState("");
    const { data: model } = useSWR('model', {
        fallbackData: 'text-davinci-003',
    })
    
    const pathname = usePathname();
    const router = useRouter();
    const sendQuestion = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (pathname != `/chat/${chatId}`){
              await addDoc(
                collection(db,"users", session?.user?.email!, "chats"), {
                    userId: session?.user?.email!,
                    createdAt: serverTimestamp()
            
                });
            
        router.push(`/chat/${chatId}`)
        }
      if(!prompt) return;
      const input =  prompt.trim();
      setPrompt("");
        const message: Message = {
        text: input,
        createdAt:serverTimestamp(),
        user: {
            _id:session?.user?.email!,
            name:session?.user?.name!,
            avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
           }
        }

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message)

        //Toast notification
        const notification = toast.loading("ChatGPT is thinking...");

        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                prompt:input, chatId, model, session
            })
        }).then(() => {
         toast.success('ChatGPT responded!', {
            id:notification,
         })
        })
    }

  return (
    <div className=''>
    <div className='mx-5 my-5'>
   <form 
    onSubmit={sendQuestion}
    className='bg-white/5 flex mb-2 p-1 px-5 space-x-5 rounded-md shadow-lg'>
    <input className='flex-1 p-2 focus:outline-none bg-transparent disable:cursor-not-allowed' type="text" 
    placeholder="type your question here!" 
    disabled={!session}
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    />
  <button
  type="submit"
  className='disabled:cursor-not-allowed'
  disabled={!session || !prompt}>
 <PaperAirplaneIcon 
  className='h-5 w-5 -rotate-45 text-gray-500 hover:hover:text-gray-50 '/>
 </button>
   </form>
<h5 className='text-sm text-gray-500 text-center'>ChatGPT Jan 30 Version. Free Research Preview. Our goal is to make AI systems more
     natural and safe to interact with. Your feedback will help us improve.</h5>
   </div>
  <div className='md:hidden'>
 <ModelSelection />
   </div>

    </div>

   
  )
}

export default ChatInput