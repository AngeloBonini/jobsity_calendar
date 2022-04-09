import React, { useState, useRef } from "react";
import "./Calendar.css";
import {
  getMonth,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  eachDayOfInterval,
  format,
  isWeekend,
  isToday
} from "date-fns";
// import Day from '../components/Day';
import Modal from "../components/Modal";

function Calendar(props) {
  const [modalOpen, setModalOpen] = useState(false);
  let currentDay = new Date();
  let currentMonth = getMonth(currentDay);

  let startOfWeekCurrentMonth = startOfWeek(startOfMonth(currentDay));
  let endOfWeekCurrentMonth = endOfWeek(endOfMonth(currentDay));
  let allDaysMonth = eachDayOfInterval({
    start: startOfWeekCurrentMonth,
    end: endOfWeekCurrentMonth
  });

  let allDaysFormattedRender = allDaysMonth.map((date) => (
    <div
      className={`day ${isToday(date) ? "today" : ""} ${
        isWeekend(date) ? "weekend" : ""
      } ${getMonth(date) !== currentMonth ? "notCurrentMonth" : ""}`}
      onClick={() => {
        setModalOpen(true);
      }}
    >
      <p style={{ margin: "7px" }}>{format(date, "d")}</p>
    </div>
  ));
  // console.log(allDaysMonth);
  return (
    <div class="container">
      <div>
        <div class="weekdays">Sunday</div>
        <div class="weekdays">Monday</div>
        <div class="weekdays">Tuesday</div>
        <div class="weekdays">Wednesday</div>
        <div class="weekdays">Thursday</div>
        <div class="weekdays">Friday</div>
        <div class="weekdays">Saturday</div>
      </div>
      {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
      <div class="days">{allDaysFormattedRender} </div>
    </div>
  );
}

function dateCalculation() {
  let currentDay = new Date();
  let currentMonth = getMonth(currentDay);
  // console.log(currentMonth);
  return currentMonth;
}

export default Calendar;
