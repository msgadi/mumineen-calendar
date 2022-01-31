const TodayButton = ({ onClick }) => {
  return (
    <div className="flex mx-5 text-white font-bold py-2 px-4 rounded bg-teal-500">
      <button onClick={onClick}>Today</button>
    </div>
  );
};

export default TodayButton;
