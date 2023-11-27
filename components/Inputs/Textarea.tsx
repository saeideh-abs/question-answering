import { iranYekan } from '@/styles/fonts'
import { cn } from '@/utils'
import { forwardRef } from 'react'
import { inputErrorStyle, inputStyle } from './styles'

export interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  error?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          iranYekan.className,
          inputStyle,
          error && inputErrorStyle,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
