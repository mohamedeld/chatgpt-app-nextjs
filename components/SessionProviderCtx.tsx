"use client";
import { SessionProvider } from "next-auth/react"


interface IProps{
  children:React.ReactNode
}

const SessionProviderCtx = ({children}:IProps) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default SessionProviderCtx