import type { ButtonHTMLAttributes } from 'react'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }
export default function Button({ variant = 'primary', className = '', ...p }: Props) {
  return <button {...p} className={`btn btn--${variant} ${className}`} />
}
