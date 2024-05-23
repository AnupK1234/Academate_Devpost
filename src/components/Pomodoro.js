import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");
  const [completedCycles, setCompletedCycles] = useState(0);

  const [workTime, setWorkTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    if (mode === "work") {
      setMinutes(workTime);
    } else if (mode === "shortBreak") {
      setMinutes(shortBreakTime);
    } else {
      setMinutes(longBreakTime);
    }
    setSeconds(0);
    setIsRunning(false);
  };

  const switchMode = () => {
    if (mode === "work") {
      setMode("shortBreak");
      setMinutes(shortBreakTime);
    } else if (mode === "shortBreak") {
      setMode("longBreak");
      setMinutes(longBreakTime);
    } else {
      setMode("work");
      setMinutes(workTime);
      setCompletedCycles(completedCycles + 1);
    }
  };

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            switchMode();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  return (
    <div className="bg-blue-200 flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Pomodoro Timer</h1>
      <div className="text-5xl font-bold mb-4">
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={startTimer}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={stopTimer}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          onClick={resetTimer}
          disabled={isRunning}
        >
          Reset
        </button>
      </div>
      <div className="text-lg mt-4">
        {mode === "work"
          ? "Work Session"
          : mode === "shortBreak"
          ? "Short Break"
          : "Long Break"}
      </div>
      <div className="text-lg mt-2">
        Completed Cycles: {completedCycles}
      </div>
      <div className="mt-4">
        <label className="mr-2">Work Time:</label>
        <input
          type="number"
          min="1"
          value={workTime}
          onChange={(e) => setWorkTime(parseInt(e.target.value))}
          className="border px-2 py-1 rounded focus:outline-none focus:border-blue-500"
        />
        <span className="ml-2">minutes</span>
      </div>
      <div className="mt-2">
        <label className="mr-2">Short Break Time:</label>
        <input
          type="number"
          min="1"
          value={shortBreakTime}
          onChange={(e) => setShortBreakTime(parseInt(e.target.value))}
          className="border px-2 py-1 rounded focus:outline-none focus:border-blue-500"
        />
        <span className="ml-2">minutes</span>
      </div>
      <div className="mt-2">
        <label className="mr-2">Long Break Time:</label>
        <input
          type="number"
          min="1"
          value={longBreakTime}
          onChange={(e) => setLongBreakTime(parseInt(e.target.value))}
          className="border px-2 py-1 rounded focus:outline-none focus:border-blue-500"
        />
        <span className="ml-2">minutes</span>
      </div>
    </div>
  );
};

export default PomodoroTimer;
