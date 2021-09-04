import "./App.css";
import FormElement from "./FormElement";
import ItemList from "./ItemList";
import { ListProvider } from "./ListContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ListProvider>
      <Router>
        <Switch>
          <Route path="/itemlist">
            <ItemList />
          </Route>

          <Route path="/">
            <FormElement />
          </Route>
        </Switch>
      </Router>
    </ListProvider>
  );
}

export default App;
