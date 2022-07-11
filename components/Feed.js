import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'
import Input from './Input'
import Post from './Post'

function Feed() {
    const posts = [
        {
            id:"1",
            name:"Lalitha Vadavalli",
            username:"lalitharamanaV",
            userImg:"https://avatars.githubusercontent.com/u/58090261?v=4",
            img:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80",
            text:"This is stunning",
            timestamp:"1 hour ago"
        },
        {
            id:"2",
            name:"Lalitha ",
            username:"lalithaV",
            userImg:"https://avatars.githubusercontent.com/u/58090261?v=4",
            img:"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            text:"Nice view",
            timestamp:"2 hours ago"
        }
    ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
     <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
     <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
     <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
            <SparklesIcon className="h-5" />
     </div>
    </div>
    <Input/>
    {posts.map((post)=> (
        <Post key={post.id} post={post}/>
    ))}
    </div>
  )
}

export default Feed