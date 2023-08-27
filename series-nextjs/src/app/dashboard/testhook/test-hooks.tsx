'use client'
/**
 * Test 1 :
 * Update counter app to be able to counting every second
 */

import { useState, useRef, useEffect } from "react";
import './test-hooks.css'

export default function TestHookComponent() {
  // update to state hook
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const timer = useRef<number | null>(null);

  // can add additional code if necessary

  function onStart() {
    // start counting every second
    if (timer.current !== null) return;
    timer.current = window.setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 1000);
  }

  function onStop() {
    // stop the counter
    if (timer.current) {
      window.clearInterval(timer.current);
    }
  }

  function onReset() {
    // stop the counter and reset to 0
    if (timer.current) {
      window.clearInterval(timer.current);
      setCounter(0);
      timer.current = null;
    }
  }

  useEffect(() => {
    // here's the cleanup function
    return () => {
      if (timer.current !== null) {
        window.clearInterval(timer.current);
      }
    };
  }, []);

  return (
    <div className="TestHookApp">
      <div id="counter" data-testid="counter">
        {counter}
      </div>
      <div className="buttonContainer">
        <button disabled={timer.current !== null} onClick={onStart}>
          Start
        </button>
        <button disabled={timer.current === null} onClick={onStop}>
          Stop
        </button>
        <button disabled={timer.current === null} onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
