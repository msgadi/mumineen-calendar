import Lazy from "lazy.js";

const MiqaatList = (props) => {
  const listItems = () => {
    let items = [],
      day;

    if (props.miqaats.length < 1) {
      return (
        <li className="error">
          Sorry, there was a problem loading the miqaat data...
        </li>
      );
    }

    if (props.day) {
      day = props.day.hijri;
      items = Lazy(props.miqaats)
        .filter({
          date: day.date,
          month: day.month,
        })
        .pluck("miqaats")
        .flatten()
        .map(function (miqaat) {
          if (miqaat.year && miqaat.year > day.year) return null;
          return (
            <li key={miqaat.title}>
              {miqaat.title}
              <br />
              <span className="description">{miqaat.description}</span>
            </li>
          );
        })
        .compact()
        .toArray();
    }

    if (items.length < 1)
      return <li className="none">There are no miqaats on this day.</li>;

    return items;
  };

  return (
    <div className="miqaat-list">
      <ul className="miqaats">{listItems()}</ul>
    </div>
  );
};

export default MiqaatList;
