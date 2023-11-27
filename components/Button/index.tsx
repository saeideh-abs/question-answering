'use client'
import { cn } from '@/utils'
import MuiButton, { ButtonProps } from '@mui/material/Button'
import { PropsWithChildren } from 'react'

export const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren & ButtonProps) => {
  const style = `shadow-none hover:shadow-none rounded-md px-[21px] py-2`

  return (
    <MuiButton {...props} className={cn(style, className)}>
      {children}
    </MuiButton>
  )
}
