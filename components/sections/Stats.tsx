"use client"

import { useEffect, useState, useRef } from "react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    clients: 0,
    plates: 0,
    dailyMeals: 0,
    maxMeals: 0,
    retention: 0,
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  const targetCounts = {
    clients: 35,
    plates: 300000, // 3+ lakhs
    dailyMeals: 1000,
    maxMeals: 20000,
    retention: 80,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        clients: Math.floor(targetCounts.clients * progress),
        plates: Math.floor(targetCounts.plates * progress),
        dailyMeals: Math.floor(targetCounts.dailyMeals * progress),
        maxMeals: Math.floor(targetCounts.maxMeals * progress),
        retention: Math.floor(targetCounts.retention * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounts(targetCounts)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible])

  const formatNumber = (num: number, suffix = "") => {
    if (num >= 100000) {
      return `${(num / 100000).toFixed(1)}+ lakhs${suffix}`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}k${suffix}`
    }
    return `${num}${suffix}`
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">
            OUR IMPACT
            <div className="w-20 h-1 bg-orange-500 mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-600 text-lg">Numbers that speak for our excellence</p>
        </div>

        {/* Row 1 - 3 stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">{counts.clients}+</div>
            <div className="text-gray-700 font-semibold">Clients Served</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">{formatNumber(counts.plates)}</div>
            <div className="text-gray-700 font-semibold">Plates Served</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">{formatNumber(counts.dailyMeals)}</div>
            <div className="text-gray-700 font-semibold">Meals Per Day</div>
          </div>
        </div>

        {/* Row 2 - 2 stats centered */}
        <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">{formatNumber(counts.maxMeals)}</div>
            <div className="text-gray-700 font-semibold">Max Meals in a Day</div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-red-500 mb-2">{counts.retention}%</div>
            <div className="text-gray-700 font-semibold">Customer Retention</div>
          </div>
        </div>
      </div>
    </section>
  )
}
