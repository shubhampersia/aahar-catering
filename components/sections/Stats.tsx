"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    plates: 0,
    dailyMeals: 0,
    maxMeals: 0,
    retention: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    clients: 35,
    plates: 3,
    dailyMeals: 1,
    maxMeals: 20,
    retention: 80,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        clients: Math.floor(targetCounts.clients * progress),
        plates: Math.floor(targetCounts.plates * progress),
        dailyMeals: Math.floor(targetCounts.dailyMeals * progress),
        maxMeals: Math.floor(targetCounts.maxMeals * progress),
        retention: Math.floor(targetCounts.retention * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      icon: (
        <Image
          src="/client.svg"
          alt="Clients served icon"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      count: `${counts.clients}+`,
      label: "Number of Clients served",
    },
    {
      icon: (
        <Image
          src="/plates.svg"
          alt="Plates served icon"
          width={80}
          height={80}
          className="w-16 h-16 scale-170"
          priority
        />
      ),
      count: `${counts.plates}L+`,
      label: "Number of Plates served",
    },
    {
      icon: (
        <Image
          src="/calendar.svg"
          alt="Meals served per day icon"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      count: `${counts.dailyMeals}K`,
      label: "Number of meals serving per day",
    },
    {
      icon: (
        <Image
          src="/star.svg"
          alt="Highest meals catered icon"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      ),
      count: `${counts.maxMeals}K`,
      label: "Highest number of meals catered in a day",
    },
    {
      icon: (
        <Image
          src="/handshake.svg"
          alt="Customer retention icon"
          width={64}
          height={64}
          className="w-16 h-16 scale-170"
          priority
        />
      ),
      count: `${counts.retention}%`,
      label: "Customer Retention",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#c68c2e] mb-4">
            OUR IMPACT
            <div className="w-20 h-1 bg-[#c68c2e] mt-2 mx-auto"></div>
          </h2>
          <p className="text-gray-600 text-lg">
            Numbers that speak for our excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8">
              <div className="flex justify-center mb-6">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 mb-3">
                {stat.count}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
