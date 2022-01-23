import {getMonthName} from '../constants/utils'

const MonthControls = ({onMonthChange,month})=>{
  
    return (
      <div className="flex items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={()=> onMonthChange(-1)}>
         {`<`}
        </button> 
        <h3 className="mx-6">{getMonthName(()=> month)}</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={() =>onMonthChange(+1)}>
        {`>`}
        </button>
      </div>
    );
  };
 

export default MonthControls;