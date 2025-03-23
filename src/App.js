import { useState, useEffect } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 400);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
          //width: `${bar}%`,
          color: progress > 5 ? "white" : "black",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [0, 10, 20, 30, 50, 100];

  return (
    <div className="App">
      <h1>PRogress Bar</h1>
      {bars.map((value) => (
        <ProgressBar progress={value} />
      ))}
    </div>
  );
}
