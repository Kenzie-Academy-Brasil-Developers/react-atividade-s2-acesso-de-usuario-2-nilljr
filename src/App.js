import "./App.css";
import Home from "./components/Home";
import Customer from "./pages/Customer/index";
import Company from "./pages/Company/index";
import { Route, Switch } from "react-router";

function App() {
  const members = [
    {
      id: "1",
      name: "Pedro",
      type: "pf",
    },
    {
      id: "2",
      name: "André",
      type: "pf",
    },
    {
      id: "3",
      name: "Cantina da esquina",
      type: "pj",
    },
    {
      id: "4",
      name: "Lanches Ogro",
      type: "pj",
    },
    {
      id: "5",
      name: "Antunes",
      type: "pj",
    },
  ];
  return (
    <div className="App">
      <header className="App-header"></header>
      <Route exact path="/">
        <Home members={members} />
      </Route>
      <Switch>
        <Route exact path="/customer/:id">
          <Customer members={members} />
        </Route>
        <Route exact path="/company/:id">
          <Company members={members} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
