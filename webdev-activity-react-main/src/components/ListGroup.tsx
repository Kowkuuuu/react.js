// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  places: string[];
  heading: string;
  onSelectItem: (places: string) => void;
}

function ListGroup({ places, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {places.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {places.map((place, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={place}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(place);
            }}
          >
            {place}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
