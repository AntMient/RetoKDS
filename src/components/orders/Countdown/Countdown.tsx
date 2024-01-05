import React, { useState, useEffect } from "react";
import { CountdownProps } from "./Countdown.types";
import { calculateTimeRemaining } from "../../../utils/time";

const CountdownTimer: React.FC<CountdownProps> = (props) => {
  const { timestamp } = props;
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(timestamp)
  );

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(timestamp));
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [timestamp]);

  return (
    <div>
      <p>{`${String(timeRemaining.minutes).padStart(2, "0")}:${String(
        timeRemaining.seconds
      ).padStart(2, "0")}`}</p>
    </div>
  );
};

export default CountdownTimer;