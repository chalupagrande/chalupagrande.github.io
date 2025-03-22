import React from "react";
import "./Clock.css";
export default function Clock(props) {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "pm" : "am";
  const hours12 = hours % 12 || 12;
  const hoursString = String(hours12).padStart(2, "0");
  const minutesString = String(minutes).padStart(2, "0");
  const dayOfWeek = time.getDay();
  const dayOfWeekString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",][dayOfWeek];
  const month = time.getMonth();
  const monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",][month];
  const day = time.getDate();
  const dateString = `${dayOfWeekString}, ${monthString} ${day} `;

  return (
    <div className="clock">
      {dateString} @ {hoursString}<span className="blink">:</span>{minutesString} {ampm}
    </div>
  );


}