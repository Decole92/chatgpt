'use client'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import useSWR from 'swr';

function Menu() {
  
    const {data: open, mutate: setOpen, error} = useSWR('open', {
      fallbackData: 'false'
    })


  return (
    <div className='text-white/50 font-bold'>

      {
        open === true ?
           <XMarkIcon  onClick={() => setOpen(false)} className='w-8 h-8' /> : <Bars3Icon onClick={() => setOpen(true)}className='w-8 h-8' />
       }
        
        
    </div>
  )
}

export default Menu