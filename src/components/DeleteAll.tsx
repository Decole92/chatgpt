import { TrashIcon } from "@heroicons/react/24/outline";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function DeleteAll() {
  const { data: session } = useSession();
  const router = useRouter();

  const RemoveAll = async () => {
    const collectionRef = collection(
      db,
      "users",
      session?.user?.email!,
      "chats"
    );
    const q = query(
      collectionRef,
      where("userId", "==", session?.user?.email!)
    );
    const snap = await getDocs(q);
    const result = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    result.forEach(async (item) => {
      const docRef = doc(db, "users", session?.user?.email!, "chats", item.id);
      await deleteDoc(docRef);
    });

    router.replace("/");
  };
  return (
    <div onClick={() => RemoveAll()} className="flex chatRow">
      <TrashIcon className="h-4 w-4" />
      <h2> Clear Messages</h2>
    </div>
  );
}

export default DeleteAll;
