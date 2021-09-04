import React, { useContext } from "react";
import { ListContext } from "./ListContext";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [item, setitem] = useContext(ListContext);
  const updateComapny = (e) => {
    setitem({ ...item, company: e.target.value });
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <p>{JSON.stringify(item)}</p>
      <input
        type="text"
        name="company"
        value={item.company}
        onChange={updateComapny}
        placeholder="Company"
      />
    </div>
  );
};

export default ItemList;
