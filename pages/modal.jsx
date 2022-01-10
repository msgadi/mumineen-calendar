import MiqaatList from "./miqaat-list"; 

const Modal =  (props) => {

    const hijriDateString = () =>{
      if (props.day && props.day.hijri) {
        var day = props.day.hijri;
        return day.date.toString() + " " + HijriDate.getMonthName(day.month) + " " + day.year.toString() + "H";
      }
    };

    const gregorianDateString = function () {
      if (props.day && props.day.gregorian) {
        var day = props.day.gregorian;
        return day.date.toString() + " " + Date.getMonthName(day.month) + " " + day.year.toString() + "AD";
      }
    };
   
      return (
        <div className="modal" id={props.modalId}>
          <input className="modal-state" id="modal-checkbox" type="checkbox" />
          <div className="modal-window">
            <div className="modal-inner">
              <label className="modal-close" htmlFor="modal-checkbox"></label>
              <h3>{hijriDateString()}</h3>
              <h4>{gregorianDateString()}</h4>
              <MiqaatList {...props} />
            </div>
          </div>
        </div>
      );
}
 
  
  export default Modal;