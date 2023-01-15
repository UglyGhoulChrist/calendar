import Month from "./Month.jsx";

function Calendar(data) {
  const { date, month, monthMod, wDayFull, year } = data.now;

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{wDayFull}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date}</div>
          <div className="ui-datepicker-material-month">{monthMod}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;
          <span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <Month {...data} />
    </div>
  );
}

export default Calendar;
