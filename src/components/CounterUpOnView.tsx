import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  target: number;
  duration?: number; // in ms
  suffix?: string;
  className?: string;
};

const CountUpOnView: React.FC<Props> = ({
  target,
  duration = 2000,
  suffix = "",
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
};

export default CountUpOnView;
