import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);

    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);

  console.log("render");

  return (
    <div className="p-[10px] border border-solid border-black">
      <h1>Count = {count}</h1>
      <h1>Count = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
};

export default User;
