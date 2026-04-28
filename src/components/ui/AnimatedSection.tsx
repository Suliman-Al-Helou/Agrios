"use client"

import { useEffect, useRef } from "react"
import "./CSSAnimations.css"

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: "fadeInUp" | "fadeInDown" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleUp"
  delay?: number
  className?: string
}

export default function AnimatedSection({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = ""
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.classList.add(`animate-${animation}`)
            if (delay > 0) {
              target.style.animationDelay = `${delay}ms`
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [animation, delay])

  return (
    <div
      ref={ref}
      className={`opacity-0 ${className}`}
      style={{ animationDelay: delay > 0 ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}
