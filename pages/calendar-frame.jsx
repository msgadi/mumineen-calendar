import Calendar from "./calendar";
import YearControls from "./year-controls";
import MonthControls from "./month-controls";
import TodayButton from "./today-button";
import Modal from "./modal";
import { useState } from "react";
import HijriCalendar from "../constants/hijri-calendar";
import { miqaatsData} from '../data/miqaats';


const CalendarFrame =  (props) => { 
console.log(props);
 const  modalId= "modal"; 
 const calendarInit = new HijriCalendar(props.today.getYear(), props.today.getMonth());
 const [calendar, setCalendar] = useState(calendarInit); 
 const [miqaats, setMiqaats] = useState(miqaatsData);
 const [day, setDay] = useState(null);
   
// const   getInitialState= ()=> {
//     return {
//       day: null,
//       calendar: new HijriCalendar(props.today.getYear(), props.today.getMonth()),
//       miqaats: []
//     };
//   };
  

  // useEffect(() => {
  //   fetch(miqaatsUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //       setMiqaats(data);
  //     });
  //   let request = new XMLHttpRequest();
  //   request.open('GET', miqaatsUrl, true);
  //   request.onreadystatechange = (response) =>{
  //     console.log('response', response);
  //     if (this.readyState === this.DONE){
  //       if (this.status >= 200 && this.status < 400) {
  //        setMiqaats(JSON.parse(this.responseText));
  //       } else {
  //         console.log(this);
  //       }
  //     }
  //   };
  //   request.send();
  //   request = null;
  // }, []) 

  const navigateToToday= ()=> {
    setCalendar(  HijriCalendar(props.today.getYear(), props.today.getMonth()) );
  };

  const changeMonth =  (monthChange) =>{
    setCalendar((monthChange < 0) ? calendar.previousMonth() : calendar.nextMonth());
  };

  const changeYear = function (yearChange) {
    setCalendar( (yearChange < 0) ? calendar.previousYear() : calendar.nextYear() );
    };

  const showModal= (day)=> {
    setDay(day);
    document.getElementById(modalId).getElementsByTagName("input").item(0).checked = true;
  };
  
    return (
      <div className="grid">
        <div> 
          <YearControls
            year={calendar.getYear()}
            onYearChange={changeYear}
          />
          <TodayButton onClick={navigateToToday} />
        </div>

        <div className="month-row">
          <MonthControls
            month={calendar.getMonth()}
            onMonthChange={changeMonth}
          />
        </div>

        <Calendar
          calendar={calendar} 
          today={props.today} 
          modalId={modalId} 
          miqaats={miqaats} 
          onDayClick={showModal} />
        {false &&
        <Modal 
          modalId={modalId} 
          miqaats={miqaats}
          day={day} />}
      </div>
    );
  } 

  export default CalendarFrame;