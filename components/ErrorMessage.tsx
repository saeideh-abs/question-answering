export const ErrorMessage = ({ text }: { text: string | undefined }) => {
  return <div className="mt-2 text-xs text-annotation-error">{text}</div>
}
