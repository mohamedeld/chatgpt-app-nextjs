"use client";
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

function getFirstTwoCapitalLetter(str?:string | null){
  const match = (str || "").match(/[A-Z]/g);
  return match ? match?.slice(0,2).join(""): "GT";
}

const UserButton = () => {
  const {data:session,status} = useSession();
  return (
    <div>
      {
        status === "authenticated" && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={session?.user?.image!}/>
                  <AvatarFallback>
                    {getFirstTwoCapitalLetter(session?.user?.name)}
                  </AvatarFallback>
                
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={()=> signOut()}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
       }
       {status === "unauthenticated" && (
        <Button onClick={()=> signIn()}>Sign In</Button>
       )}
    </div>
  )
}

export default UserButton