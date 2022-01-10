import {getMonthName} from '../constants/utils'

const MonthControls = (props)=>{
  
    return (
      <div className="month-controls">
        <a href="#" className="prev" onClick={()=> props.onMonthChange(null, -1)}>
          <i className="icon-chevron-sign-left"></i>
        </a>
        <h3>{getMonthName(()=>props.month)}</h3>
        <a href="#" className="next" onClick={()=>props.onMonthChange(null, +1)}>
          <i className="icon-chevron-sign-right"></i>
        </a>
      </div>
    );
  };
 

export default MonthControls;