const YearControls = (props)=>{ 
    return (
      <div className="year-controls">
        <a href="#" onClick={()=>props.onYearChange(null, -1)}>
          <i className="icon-minus-sign"></i>
        </a>
        <h2>{ props.year}H</h2>
        <a href="#" onClick={()=>props.onYearChange(null, +1)}>
          <i className="icon-plus-sign"></i>
        </a>
      </div>
    );
  };

export default YearControls;