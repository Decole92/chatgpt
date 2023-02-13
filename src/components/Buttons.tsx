'use client'
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";



type Props = {
Title: string;
Icon: React.ElementType;
}
export default function Buttons({Title, Icon} : Props) {

    return(
     <div className='flex chatRow'>
       <Icon className='w-4 h-4' />
       <h2>{Title }</h2>
       </div>
    )
}