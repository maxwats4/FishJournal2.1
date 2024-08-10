import React, { useState } from 'react';
import './Calendar.css'; // Ensure to use the updated CSS file


// precreated calendar components https://github.com/clauderic/react-infinite-calendar?tab=readme-ov-file
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const getDaysInMonth = (month) => {
    const year = month.getFullYear();
    const numDays = new Date(year, month.getMonth() + 1, 0).getDate();
    return Array.from({ length: numDays }, (_, i) => i + 1);
  };

  const getFirstDayOfMonth = (month) => {
    return new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav-button" onClick={handlePrevMonth}>◄</button>
        <span className="calendar-month-year">
          {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
        </span>
        <button className="calendar-nav-button" onClick={handleNextMonth}>►</button>
      </div>
      <div className="calendar-days">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className={`calendar-day-header ${
              day === 'Sun' ? 'sunday' :
              (day === 'Sat' ? 'weekend' : 'weekday')
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-body">
        <div className="calendar-week">
          {Array.from({ length: firstDayOfMonth }, (_, i) => (
            <div key={`empty-${i}`} className="calendar-date empty"></div>
          ))}
          {daysInMonth.map((day, index) => (
            <div
              key={index}
              className={`calendar-date ${
                new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).getDay() === 0 ? 'sunday' :
                (new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).getDay() === 6 ? 'weekend' : 'weekday')
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
