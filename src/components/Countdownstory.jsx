// count down to birthday

import { useEffect, useState  } from "react";

export default function Countdownstory() {
    const calculateTimeLeft = () => {
        const now = new Date();
        const currentYear = now.getFullYear();
        const birthday = new Date(currentYear, 2, 18); // March 18

    const difference = birthday - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeleft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft())
    }, 1000);
    
    return clearInterval(timer);
  }, []);

  // If timeleft is null, it means the birthday has arrived
  if (!timeleft) {
    return <h3>🎉 IT'S MY BIRTHDAY 🎉</h3>;
  }

  // Format the countdown display
  return (
    <div className="story">
        {/* <div className="story-circle-countdown"> */}
            {timeleft ?(
                <div className="c">
                    <span>{timeleft.days}d</span>
                    <span>{timeleft.hours}h</span>
                    <span>{timeleft.minutes}m</span>
                    <span>{timeleft.seconds}s</span>
                </div>
            ) : ( "🎉 IT'S MY BIRTHDAY 🎉" )}

        {/* </div> */}
        <p>Birthday</p>
    </div>
  )
}
