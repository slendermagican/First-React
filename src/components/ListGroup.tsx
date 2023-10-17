import { useState } from "react";

// import { MouseEvent } from "react";
function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Lovech",
    "Sofia",
    "Veliko Tarnovo",
    "Mezdra",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  
//   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Zaglavie</h1>
      {
        items.length === 0 && <p>No items are found!</p> //boolean && string -> return string if bool=true else return false;
      }
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
