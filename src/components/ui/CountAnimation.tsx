import { useEffect, useMemo, useState } from "react";

type Props = {
  number: number;
  duration?: number;
};

const CountAnimation = ({ number, duration = 1000 }: Props) => {
  if (number === 0) return <>0</>;

  const [count, setCount] = useState(0);
  const [timerHandler, setTimerHandler] =
    useState<ReturnType<typeof setInterval>>();
  const interval = useMemo(
    () => Math.floor(duration / number),
    [number, duration]
  );

  if (count === number) {
    clearInterval(timerHandler);
  }

  useEffect(() => {
    const timerHandler = setInterval(
      () => setCount((pcount) => pcount + 1),
      interval
    );
    setTimerHandler(timerHandler);
    return () => clearInterval(timerHandler);
  }, []);

  return <>{count}</>;
};

export default CountAnimation;
