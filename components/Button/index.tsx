'use client'
import { IconSpinner } from '@/icons'
import { cn } from '@/utils'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { PropsWithChildren } from 'react'

export interface ButtonProps extends MuiButtonProps {
  isLoading?: boolean
}

export const Button = ({
  children,
  className,
  isLoading,
  ...props
}: PropsWithChildren & ButtonProps) => {
  const style = `shadow-none hover:shadow-none rounded-md px-[21px] py-2`

  return (
    <MuiButton disabled={isLoading} {...props} className={cn(style, className)}>
      {isLoading ? <IconSpinner className="w-5 h-5" /> : children}
    </MuiButton>
  )
}
