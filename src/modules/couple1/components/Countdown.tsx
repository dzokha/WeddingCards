import { useEffect, useState } from "react"

interface Props {
  targetDate: string
}

export default function Countdown({ targetDate }: Props) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft: any = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="countdown">
      <h2>Đếm ngược đến ngày trọng đại</h2>
      <div className="countdown-timer">
        <span>{timeLeft.days} ngày</span>
        <span>{timeLeft.hours} giờ</span>
        <span>{timeLeft.minutes} phút</span>
        <span>{timeLeft.seconds} giây</span>
      </div>
    </section>
  )
}
