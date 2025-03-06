import { useEffect, useRef, useState } from "react";

const Homepage = () => {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    alert("Count Changed");
  }, [count]);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>

      <button onClick={() => setCount((prevState) => prevState - 1)}>
        decrement
      </button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Homepage;
