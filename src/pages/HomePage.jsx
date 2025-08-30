import { UserButton } from '@clerk/clerk-react'
import React from 'react'

const HomePage = () => {
  const {chatClient , error , isLoading} = useStreamChat();
  return (
    <div className='bg-red-500 h-screen w-screen flex justify-center items-center'>
      <UserButton/>
      
    </div>
  )
}

export default HomePage