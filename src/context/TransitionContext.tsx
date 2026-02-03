'use client'

import { createContext, useContext, useRef } from 'react'

type TransitionContextType = {
  revealRef: React.RefObject<HTMLDivElement | null>
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export const useTransition = () => {
  const ctx = useContext(TransitionContext)
  if (!ctx) throw new Error('useTransition must be used inside provider')
  return ctx
}

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const revealRef = useRef<HTMLDivElement | null>(null)

  return (
    <TransitionContext.Provider value={{ revealRef }}>
      {children}
    </TransitionContext.Provider>
  )
}
