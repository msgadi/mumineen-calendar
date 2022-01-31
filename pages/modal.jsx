import MiqaatList from "./miqaat-list";
import HijriDate from "../constants/hijri-date";

const ShowMiqaats = (props) => {
  const hijriDateString = () => {
    if (props.day && props.day.hijri) {
      const day = props.day.hijri;
      return `${day.date.toString()} ${HijriDate.getMonthName(
        day.month
      )} ${day.year.toString()}H`;
    }
  };

  const gregorianDateString = function () {
    if (props.day && props.day.gregorian) {
      var day = props.day.gregorian;
      return (
        day.date.toString() +
        " " +
        new Date(`${day.month + 1}/${day.date}/${day.year}`).toLocaleString(
          "en-us",
          { month: "short" }
        ) +
        " " +
        day.year.toString() +
        "AD"
      );
    }
  };

  return (
    <div
      id="defaultModal"
      aria-hidden={props.showModal}
      className="flex flex-row overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    >
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
              Miqaats
            </h3>
            <button
              type="button"
              onClick={props.onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {hijriDateString()}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {gregorianDateString()}
            </p>
            <MiqaatList {...props} />
          </div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            {/* <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
            >
              Decline
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMiqaats;
