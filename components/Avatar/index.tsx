import Image, { ImageProps } from 'next/image'
import Profile from '@/public/images/default-avatar.jpeg'
import { cn } from '@/utils'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type AvatarProps = ImageProps & { src?: string | StaticImport }

export const Avatar = ({ src, alt, className, ...props }: AvatarProps) => {
  return (
    <Image
      src={src || Profile}
      alt={alt}
      layout="fixed"
      className={cn(className, 'rounded-full object-cover')}
      {...props}
    />
  )
}
