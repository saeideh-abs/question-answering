import { Button } from '@/components'
import { IconHappy, IconSad } from '@/icons'
import { cn } from '@/utils'

export interface FeedBackProps {
  onLike: () => void
  onDislike: () => void
}

export const FeedBack = ({ onLike, onDislike }: FeedBackProps) => {
  const buttonStyle = `text-xs font-bold p-0 w-[126px] h-9 leading-4 
    border-secondary-so-light hover:border-secondary-so-light`
  const iconStyle = 'w-5 h-5 cursor-pointer'

  return (
    <div className="flex gap-3 self-end">
      <Button
        variant="outlined"
        color="success"
        className={cn('text-annotation-success', buttonStyle)}
        onClick={onLike}
      >
        <div className="flex gap-2 items-center">
          <IconHappy className={cn(iconStyle, 'text-annotation-success')} />
          پاسخ خوب بود
        </div>
      </Button>
      <Button
        variant="outlined"
        color="error"
        className={cn('text-annotation-error', buttonStyle)}
        onClick={onDislike}
      >
        <div className="flex gap-2 items-center">
          <IconSad className={cn(iconStyle, 'text-annotation-error')} />
          پاسخ خوب نبود
        </div>
      </Button>
    </div>
  )
}
