import { TrashIcon } from '@heroicons/react/24/outline'
import { deleteDoc, doc, updateDoc, deleteField } from 'firebase/firestore'
import { db } from '../firebase';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function DeleteAll() {
     const {data: session} = useSession();
     const router = useRouter();

const RemoveAll = () => {

    const docRef = doc(db, 'users', session?.user?.email!);
const beta = {
    code: deleteField()
};

updateDoc(docRef, beta)
.then(() => {
    console.log("Code Field has been deleted successfully");
})
.catch(() => {
    console.log("error");
})

}
  return (
    <div onClick={() => RemoveAll()} className='flex chatRow'>
    <TrashIcon className='h-4 w-4'/>
    <h2> Clear Messages</h2>
   </div>
  )
}

export default DeleteAll;