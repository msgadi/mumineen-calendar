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
 const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            {weekdays.map((day) => { return <th key={ day } >{day}</th> })} 
          </tr>
        </thead>
        <tbody>{weeks()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
