"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { getCompletion } from "@/app/server-actions/getCompletion";

interface Message{
  role:"user" | "assistant";
  content:string;
}
const Chat = () => {
  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState<Message[]>([]);
 
  const handleClick = async ()=>{
    const completions = await getCompletion([
        ...messages,
        {
          role:"user",
          content:message
        },
      ]
    )
    setMessage("")
    setMessages(completions?.messages)
  }

  return (
    <div className='flex  flex-col'>
      {messages?.map((message)=>{
        return (
          <div className={`${message?.role === "user" ? 'items-end' : 'items-start'}`} key={crypto.randomUUID()}>
            <div className={`${message?.role === "user" ? 'bg-blue-500' : 'bg-gray-500'} rounded-md px-8 py-2`}>
              {message?.content}
            </div>
          </div>
        )
      })}
      <div className="flex border-t-2 border-t-gray-500 pt-3 mt-3">
        <Input className="flex-grow text-xl" placeholder="Question" 
        value={message} onChange={(e)=> setMessage(e.target.value)} onKeyUp={(e)=>{
          if(e.key === "Enter"){
            handleClick()
          }
        }}/>
        <Button onClick={handleClick} className="ml-3 text-xl">Send</Button>
      </div>
    </div>
  )
}

export default Chat