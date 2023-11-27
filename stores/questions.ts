import { create } from 'zustand'

type QuestionsState = {
  headerTitle: string
  openModal: boolean
  setOpenModal: (val: boolean) => void
}

export const useQuestionsStore = create<QuestionsState>((set) => ({
  headerTitle: '',
  openModal: false,
  setOpenModal: (val: boolean) => set(() => ({ openModal: val })),
}))