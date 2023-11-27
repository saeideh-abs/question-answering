import { UserType } from '@/types'
import { create } from 'zustand'


type AuthState = {
  user: UserType | undefined
  setUser: (user: UserType) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: undefined,
  setUser: (user: UserType) => set(() => ({ user: user })),
}))