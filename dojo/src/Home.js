import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const handleClick = () => {
    return(
    setName("luigi"))
  };
  return (
    <div className="Home">
      <p>HomePage</p>
      <p> {name}</p>
      <button onclick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
