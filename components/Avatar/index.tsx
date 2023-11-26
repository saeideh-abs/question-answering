import Image, { ImageProps } from 'next/image'
import Profile from '@/public/images/default-avatar.jpeg'
import { cn } from '@/utils'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type AvatarProps = Omit<ImageProps, 'src'> & {
  src?: string | StaticImport
} & {
  roundedFull?: boolean
}

export const Avatar = ({
  src,
  alt,
  className,
  roundedFull = true,
  ...props
}: AvatarProps) => {
  return (
    <Image
      src={src || Profile}
      alt={alt}
      // layout="fixed"
      className={cn(
        className,
        roundedFull ? 'rounded-full' : 'rounded-lg',
        'object-cover object-center',
      )}
      {...props}
    />
  )
}
