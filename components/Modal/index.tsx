import { IconClose } from '@/icons'
import { cn } from '@/utils'
import MuiModal, { ModalProps as MuiModalProps } from '@mui/material/Modal'

export type ModalProps =
  | (MuiModalProps & {
      showHeader: true
      title: string
    })
  | (MuiModalProps & {
      showHeader?: false
      title?: never
    })

export const Modal = ({
  children,
  title,
  showHeader,
  bodyClassName,
  ...props
}: ModalProps & { bodyClassName?: string }) => {
  const bodyStyle = `rounded-lg shadow-qa bg-gray-lightest 
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white`

  return (
    <MuiModal {...props}>
      <div className={cn(bodyStyle, bodyClassName)}>
        {showHeader && <ModalHeader title={title} onClose={props.onClose} />}
        {children}
      </div>
    </MuiModal>
  )
}

export const ModalHeader = ({
  title,
  onClose,
}: {
  title?: string
  onClose: MuiModalProps['onClose']
}) => {
  return (
    <div className="flex justify-between items-center px-6 py-3 rounded-lg bg-white shadow-qa opacity-70">
      <div className="font-extrabold leading-6">{title}</div>
      <IconClose
        className="w-5 h-5 cursor-pointer"
        onClick={e => onClose?.(e, 'backdropClick')}
      />
    </div>
  )
}
