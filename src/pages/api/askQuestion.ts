// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from 'utils/queryApi';
import admin from 'firebase-admin'
import { adminDb } from '@/firebaseAdmin';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const {prompt, chatId, model, session } = req.body;

    if(!prompt) {
        res.status(400).json({answer: "please ask your question"});
    }

    if(!chatId){
        res.status(400).json({answer: "please provide a valid chat Id"});
    }

    //chatGPT Query

    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || "ChatGPT was unable to find an answer to your question!",
        createdAt: admin.firestore.Timestamp.now(),
         user: {
            _id: 'CHATGPT',
            name: 'CHATGPT',
           avatar: 'https://uploads-ssl.webflow.com/621396eaae0610d2e24c450e/63d01548c5b3156b13a40e1f_ChatGPT-Feature-1200x900.png',
           }
    };
    await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message);



  res.status(200).json({ answer: message.text })
}
