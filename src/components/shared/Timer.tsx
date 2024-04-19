"use client";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }: { expiryTimestamp: Date }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <div className="text-center h-fit w-[480px] bg-secondary rounded-xl">
      <div className="text-4xl  text-primary  py-2 px-5 mx-auto">
        <span>{days}</span>
        <span className="text-xs text-white">/days</span> : <span>{hours}</span>
        <span className="text-xs text-white">/hours</span> :{" "}
        <span>{minutes}</span>
        <span className="text-xs text-white">/minutes</span> :{" "}
        <span>{seconds}</span>
        <span className="text-xs text-white">/seconds</span>
      </div>
    </div>
  );
};

export default Timer;
