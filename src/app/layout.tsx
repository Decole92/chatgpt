import { SessionProvider } from '@/components/SessionProvider'
import SideBar from '@/components/SideBar'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Login from '@/components/Login'
import ClientProvider from '@/components/ClientProvider'
import Menu from '../components/Menu'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
     
     <head />
      <body>
        <SessionProvider session={session}>
          
        {!session ? (
          <Login />
        ) : (
           <div className='flex'>
         <div className='bg-[#202123] h-screen max-w-xs md:min-w-[20rem]'>
            <SideBar />
           </div>
          <ClientProvider />
       <div className='bg-[#343541] flex-1'>
       <div className='md:hidden bg-[#343541] text-white/50 m-5'>
        <Menu />
        </div>
        {children}
      </div>
        </div>
        )}
        </SessionProvider>
        </body>
    </html>
  )
}
