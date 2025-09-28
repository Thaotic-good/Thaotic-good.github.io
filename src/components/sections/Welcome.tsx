import React, { useEffect, useState } from "react";

function Welcome() {
  const defaultGreeting = "Hello, welcome to my personal page!";
  const [name, setName] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("name");
    if (stored) {
      setName(stored);
    }
  }, []);

  const displayNamePrompt = () => {
    const myName = window.prompt("Please enter your name: ");
    if (!myName) {
      setName("");
      localStorage.removeItem("name");
      return;
    }
    localStorage.setItem("name", myName);
    setName(myName);
  };

  const heading = name
    ? `Hello ${name}, welcome to my personal page!`
    : defaultGreeting;

  return (
    <section className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-black">{heading}</h1>
      <button
        onClick={displayNamePrompt}
        className="inline-block rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Personalize my welcome message
      </button>
    </section>
  );
}

export default Welcome;
