import { create } from 'zustand'

type QuestionsState = {
  openModal: boolean
  setOpenModal: (val: boolean) => void
}

export const useQuestionsStore = create<QuestionsState>((set) => ({
  openModal: false,
  setOpenModal: (val: boolean) => set(() => ({ openModal: val })),
}))