import React, { useContext } from "react";
import { ListContext } from "./ListContext";
import { Link } from "react-router-dom";

const FormElement = () => {
  const [item, setitem] = useContext(ListContext);

  const updateName = (e) => {
    setitem({ ...item, name: e.target.value });
  };
  const updatePrice = (e) => {
    setitem({ ...item, age: e.target.value });
  };
  const updateComapny = (e) => {
    setitem({ ...item, company: e.target.value });
  };

  return (
    <div>
      <p>{JSON.stringify(item)}</p>
      <form>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={updateName}
          placeholder="Name"
        />
        <br />

        <input
          type="text"
          name="age"
          value={item.age}
          onChange={updatePrice}
          placeholder="Age"
        />
        <br />

        <input
          type="text"
          name="company"
          value={item.company}
          onChange={updateComapny}
          placeholder="Company"
        />
        <Link to="/itemlist">Select company</Link>
        <br />
      </form>
    </div>
  );
};

export default FormElement;
