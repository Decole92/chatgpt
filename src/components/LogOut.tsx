'use client'
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
function LogOut () {

return (
    <div onClick={() => signOut()} className='flex chatRow'>
        <ArrowRightOnRectangleIcon className='h-4 w-4'/>
        <h2>Log out</h2>
       </div>
)
}
export default LogOut;
