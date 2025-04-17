import { use, useEffect, useRef, useState } from "react";

const Welcome = () => {
  useEffect(() => {
    console.log("🚀 Component Mounted: Welcome");

    return () => {
      console.log("❌ Component Unmounted: Goodbye");
    };
  }, []);

  return <h1>Welcome to my Page</h1>;
};

const Homepage = () => {
  const [count, setCount] = useState(0);

  const renderCount = useRef(1);

  useEffect(() => {
    document.title = `count ${count}`;
  }, [count]);

  useEffect(() => {
    renderCount.current += 1;
  });

  // useEffect(() => {
  //   alert("Welcome Amaan")
  // },[count])

  const fruits = ["Apple", "Banana", "Mango"];

  const [val1] = fruits;


  function test({name, age}){
    console.log(name);
    console.log(age);
  }

  test({name: "amaan", age : 21})

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

      {count > 1 && <Welcome />}

      <h3>Component re-rendered: {renderCount.current} times</h3>

      {/* <input ref={inputRef} type="text" placeholder="Message" /> */}
    </div>
  );
};

export default Homepage;
