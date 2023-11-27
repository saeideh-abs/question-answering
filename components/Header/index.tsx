'use client'
import { Button } from '../Button'
import { IconArrowDown, IconPlus } from '@/icons'
import { ProfileBox } from './ProfileBox'
import { useQuestionsStore } from '@/stores/questions'
import { useShallow } from 'zustand/react/shallow'

export interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  const { openModal, setOpenModal } = useQuestionsStore(
    useShallow(state => ({
      openModal: state.openModal,
      setOpenModal: state.setOpenModal,
    })),
  )

  return (
    <div className="flex justify-between items-center px-14 bg-white h-[68px]">
      <h1 className="font-extrabold text-2xl">{title}</h1>

      <div className="flex items-center gap-10">
        <Button
          variant="contained"
          className="rounded-md"
          onClick={() => setOpenModal(!openModal)}
        >
          <div className="flex gap-2 items-center">
            <IconPlus className="w-5 h-5" />
            <span className="text-xs font-bold">سوال جدید</span>
          </div>
        </Button>

        <div className="flex gap-4 items-center">
          <ProfileBox src="" alt="" name="الناز شاکردوست" />
          <IconArrowDown className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
