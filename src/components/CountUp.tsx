'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from '@/hooks/useInView'

interface Props {
  target: number
  suffix?: string
  className?: string
}

export default function CountUp({ target, suffix = '', className }: Props) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView<HTMLSpanElement>()
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const duration = 1400
    const steps = 60
    const interval = duration / steps
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
