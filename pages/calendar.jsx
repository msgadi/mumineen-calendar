import CalendarWeek from "./calendar-week";
import Lazy from "lazy.js";

const Calendar = (props) => {
  const miqaaats = () =>
    Lazy(props.miqaats).filter({ month: props.calendar.getMonth() }).toArray();

  const weeks = () => {
    let key = -1;
    let today = props.today;
    let miqaats = miqaaats();
    let onDayClick = props.onDayClick;
    return Lazy(props.calendar.weeks())
      .map((week) => {
        key += 1;
        return (
          <CalendarWeek
            key={key}
            week={week}
            today={today}
            miqaats={miqaats}
            onDayClick={onDayClick}
          />
        );
      })
      .toArray();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{weeks()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
