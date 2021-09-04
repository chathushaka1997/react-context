import { useState, createContext } from "react";

export const ListContext = createContext();

export const ListProvider = (props) => {
  const [item, setitem] = useState({ name: "", age: "", company: "" });

  return (
    <ListContext.Provider value={[item, setitem]}>
      {props.children}
    </ListContext.Provider>
  );
};
