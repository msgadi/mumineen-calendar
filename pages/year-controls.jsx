const YearControls = ({ year, onYearChange }) => {
  return (
    <div className="flex flex-row items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onYearChange(-1)}
      >
        -
      </button>
      <h2 className="px-5">{year}H</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onYearChange(+1)}
      >
        +
      </button>
    </div>
  );
};

export default YearControls;
