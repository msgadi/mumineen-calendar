import CalendarDay from './calendar-day';  
import Lazy from 'lazy.js';

const CalendarWeek = (props) => {
    const days =  () => {
        let today = props.today;
        let miqaats = props.miqaats;
        let onDayClick = props.onDayClick; 
        return Lazy(props.week).map(function (day) { 
          const key = [day.hijri.year, day.hijri.month, day.hijri.date].join("-");
          return ( <CalendarDay key={key} day={day} today={today} miqaats={miqaats} onDayClick={onDayClick} /> ); 
        }).toArray(); 
      };

    return ( <tr> {days()} </tr> );
}
 
export default CalendarWeek;