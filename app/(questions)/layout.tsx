'use client'
import { PropsWithChildren } from 'react'
import { useQuestionsStore } from '@/stores/questions'
import { useShallow } from 'zustand/react/shallow'
import { NewQuestion } from './newQuestion'
import { Modal } from '@/components'

export default function Layout({ children }: PropsWithChildren) {
  const { openModal, setOpenModal } = useQuestionsStore(
    useShallow(state => ({
      openModal: state.openModal,
      setOpenModal: state.setOpenModal,
    })),
  )

  return (
    <>
      {children}
      <Modal
        open={openModal}
        title="ایجاد سوال جدید"
        showHeader
        bodyClassName="w-[90%] md:w-[550px] lg:w-[700px]"
        onClose={() => setOpenModal(false)}
      >
        <div className="rounded-lg px-5 pt-5 pb-6 bg-gray-lightest">
          <NewQuestion />
        </div>
      </Modal>
    </>
  )
}
