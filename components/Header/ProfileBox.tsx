import { Avatar, AvatarProps } from '@/components'

export type ProfileBoxProps = AvatarProps & { name?: string }

export const ProfileBox = ({ name, ...props }: ProfileBoxProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-11 h-11" {...props} />
      <div className="text-sm font-bold text-gray-darker">{name}</div>
    </div>
  )
}
