import logo from "./logo.svg";
import "./App.css";
import Navigate from "./components/navbarComponent";
import Expense from "./components/Expenses";
import React, { useState } from "react";

const INITIAL = [
  {
    id: "e1",
    title: "Amar",
    date: "4",
    description: "idk",
  },
  {
    id: "e2",
    title: "Akbar",
    date: "2",
    description: "idk",
  },
  {
    id: "e3",
    title: "Anthony",
    date: "0",
    description: "idk",
  },
  {
    id: "e4",
    title: "Anon",
    date: "-",
    description: "idk",
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL);

  const addDetailsHandler = (expense) => {
    console.log("App.js");
    console.log(expense);
    setExpenses((prev) => {
      return [...prev, expense];
    });
  };

  return (
    <>
      <header>
        <Navigate />
      </header>
      <Expense items={expenses} onAddDetails={addDetailsHandler} />

      {/* <div className="position-absolute top-50 start-50 translate-middle">
        <span
          className="square border border-dark rounded-5"
          style={{ display: "flex" }}
        >
          <Expense />
        </span>
      </div> */}
    </>
  );
}

export default App;
