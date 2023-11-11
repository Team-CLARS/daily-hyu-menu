// DownloadCounter.js
import React, { useState, useEffect, useRef } from "react";
import { CounterContainer, CounterText, CounterNumber, CounterSubtitle } from "./DownloadCounter.elements";

const DownloadCounter = () => {
  const [downloadCount, setDownloadCount] = useState(0);
  const counterRef = useRef();

  const startCounting = () => {
    const targetCount = 80; // Replace with your actual target download count
    const displayCount = Math.floor(targetCount / 10) * 10;

    const duration = 1500;
    const step = 1;

    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += step;
      setDownloadCount(Math.min(currentCount, displayCount));

      if (currentCount >= displayCount) {
        clearInterval(interval);
      }
    }, duration / displayCount);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  };

  function useOnScreen(ref) {

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        }
      });
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref]);
  }

  useOnScreen(counterRef);

  return (
    <CounterContainer >
      <CounterSubtitle>iOS, Android</CounterSubtitle>
      <CounterNumber ref={counterRef}>{`${downloadCount}+`}</CounterNumber>
      <CounterText>{`다운로드 수`}</CounterText>
    </CounterContainer>
  );
};

export default DownloadCounter;
