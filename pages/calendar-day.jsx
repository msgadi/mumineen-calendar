import arabicNumerals from "../constants/arabic-numerals";
import Lazy from "lazy.js";
import classnames from "classnames";

const CalendarDay = (props) => {
  const isToday = () => {
    return (
      props.day.hijri.year === props.today.getYear() &&
      props.day.hijri.month === props.today.getMonth() &&
      props.day.hijri.date === props.today.getDate()
    );
  };

  const dayClassName = () => {
    return {
      day: !props.day.filler,
      filler: props.day.filler,
      today: isToday(),
    };
  };

  const iconClassName = () => {
    var day = props.day,
      firstMiqaat = Lazy(props.miqaats)
        .filter({ date: day.hijri.date })
        .pluck("miqaats")
        .flatten()
        .filter((miqaat) => {
          return miqaat.year ? miqaat.year <= day.hijri.year : true;
        })
        .first();

    if (!firstMiqaat || day.filler) return null;
    return classnames({
      "icon-sun": firstMiqaat.priority === 1 && firstMiqaat.phase === "day",
      "icon-moon": firstMiqaat.priority === 1 && firstMiqaat.phase === "night",
      "icon-circle": firstMiqaat.priority > 1,
    });
  };

  const hijriDateString = () => {
    return arabicNumerals.fromInteger(props.day.hijri.date);
  };

  const gregorianDateString = () => {
    let day = props.day.gregorian,
      dateString = day.date.toString();

    if (!props.day.filler) {
      if (props.day.hijri.date === 1 || day.date === 1) {
        dateString += " " + new Date(`${day.month + 1}/${day.date}/${day.year}`).toLocaleString( "en-us", { month: "short" } );
      }
      if (props.day.hijri.date === 1 || (day.month === 0 && day.date === 1)) {
        dateString += " " + day.year.toString();
      }
    }
    return dateString;
  };

  const onDayClick = (day) => {
    if (!props.day.filler) {
      props.onDayClick(day);
    }
    return false;
  };

  return (
    <td
      className="box-border h-32 w-32 p-4 border-4 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2"
      onClick={() => onDayClick(null, props.day)}
    >
      <div className="hijri">{hijriDateString()}</div>
      <div className="gregorian">{gregorianDateString()}</div>
      <div className="day-icon">
        <i className={iconClassName()}></i>
      </div>
    </td>
  );
};

export default CalendarDay;
