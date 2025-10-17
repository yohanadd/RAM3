"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedIconProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedIcon({ children, delay = 0, className = "" }: AnimatedIconProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: delay * 0.2, type: "spring", stiffness: 100 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
