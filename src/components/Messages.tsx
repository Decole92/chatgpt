import React from 'react'
import { DocumentData } from 'firebase/firestore'
import Image from 'next/image';

type Props = {
    message: DocumentData;
}
function Messages({message}: Props) {

    const isChatGPT = message.user.name === 'CHATGPT';
  return (
    <div className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>

        <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
            <Image src={message.user.avatar}  className='h-10 w-10 rounded-md' width={50} height={50} alt='avatar'/>
            <p className='text-sm pt-1'>{message.text}</p>
        </div>
    </div>
  )
}

export default Messages