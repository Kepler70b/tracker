import logo from "./logo.svg";
import "./App.css";
import Navigate from "./components/navbarComponent";
import Expense from "./components/Schedules";
import React, { useState } from "react";
import NewExpense from "./components/NewSchedule";

const INITIAL = [
  {
    id: "e1",
    title: "Cycling",
    date: new Date("2020", "2", "10").toLocaleDateString("en-GB"),
    description: "went 500kms on  a stretch without breaks",
  },
  {
    id: "e2",
    title: "Trekking",
    date: new Date("2019", "9", "19").toLocaleDateString("en-GB"),
    description: "climbed 20 mountains ",
  },
  {
    id: "e3",
    title: "Swimming",
    date: new Date("2020", "12", "20").toLocaleDateString("en-GB"),
    description: "crossed the Indian Ocean without clothes",
  },
  {
    id: "e4",
    title: "Reading",
    date: new Date("2022", "3", "28").toLocaleDateString("en-GB"),
    description: "read a whole library in 15mins",
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
      <NewExpense onAddDetails={addDetailsHandler} />
      <Expense items={expenses} />

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
