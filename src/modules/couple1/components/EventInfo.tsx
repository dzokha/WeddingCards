import React from "react"

interface Props {
  date: string
  time: string
  location: string
}

export default function EventInfo({ date, time, location }: Props) {
  return (
    <section className="event-info">
      <h2>Thông tin buổi lễ</h2>
      <p><b>Ngày:</b> {date}</p>
      <p><b>Thời gian:</b> {time}</p>
      <p><b>Địa điểm:</b> {location}</p>
    </section>
  )
}
