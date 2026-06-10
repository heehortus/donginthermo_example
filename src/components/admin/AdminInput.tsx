'use client'

import { useState, InputHTMLAttributes } from 'react'

interface AdminInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  helperText?: string
  error?: string
  onChange?: (value: string) => void
}

export default function AdminInput({
  label,
  helperText,
  error,
  onChange,
  disabled,
  placeholder,
  className,
  value,
  ...props
}: AdminInputProps) {
  const [focused, setFocused] = useState(false)

  const borderClass = error
    ? 'border-[#d32f2f]'
    : focused
    ? 'border-[#ab97ff]'
    : 'border-[#b8bfc4]'

  const bgClass = disabled ? 'bg-[#e6e8eb]' : 'bg-white'

  return (
    <div className="flex flex-col gap-[3px] items-start w-full">
      {label && (
        <label
          className="font-semibold text-[#808991] text-[16px] leading-[26px] tracking-[-0.048px] whitespace-nowrap"
          style={{ fontFamily: 'Pretendard Variable, Pretendard, sans-serif' }}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange?.(e.target.value)}
        className={`border border-solid px-[15px] py-[13px] rounded-[4px] w-[338px] text-[15px] leading-[21.25px] outline-none transition-colors
          ${borderClass} ${bgClass}
          text-[#262c31] placeholder:text-[#808991]
          disabled:cursor-not-allowed
          ${className ?? ''}`}
        style={{ fontFamily: 'Pretendard Variable, Pretendard, sans-serif', fontWeight: 400 }}
      />
      {(helperText || error) && (
        <p
          className={`text-[14px] leading-[22.75px] font-medium ${error ? 'text-[#d32f2f]' : 'text-[#808991]'}`}
          style={{ fontFamily: 'Pretendard Variable, Pretendard, sans-serif' }}
        >
          {error ?? helperText}
        </p>
      )}
    </div>
  )
}
