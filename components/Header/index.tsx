import { Button } from '@/components'
import { IconArrowDown, IconPlus } from '@/icons'
import { ProfileBox } from './ProfileBox'

export interface HeaderProps {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center px-14 bg-white h-[68px]">
      <h1 className="font-extrabold text-2xl">{title}</h1>

      <div className="flex items-center gap-10">
        <Button variant="contained" className="rounded-md">
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
