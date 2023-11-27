'use client'
import { Button } from '../Button'
import { IconArrowDown, IconPlus } from '@/icons'
import { ProfileBox } from './ProfileBox'
import { useQuestionsStore } from '@/stores/questions'
import { useShallow } from 'zustand/react/shallow'
import { useUser } from '@/api/user'
import { useAuthStore } from '@/stores/auth'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()
  const { data: user } = useUser()
  const { openModal, setOpenModal } = useQuestionsStore(
    useShallow(state => ({
      openModal: state.openModal,
      setOpenModal: state.setOpenModal,
    })),
  )
  const setUser = useAuthStore(state => state.setUser)

  useEffect(() => {
    if (user) setUser(user)
  }, [user, setUser])

  return (
    <div className="flex justify-between items-center px-14 bg-white h-header fixed right-0 left-0 top-0">
      <h1 className="font-extrabold text-2xl">
        {pathname === '/' ? 'لیست سوالات' : 'جزئیات سوال'}
      </h1>

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
          <ProfileBox
            src={user?.profile}
            width={44}
            height={44}
            alt=""
            name={user ? `${user.firstName} ${user.lastName}` : ''}
          />
          <IconArrowDown className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
