import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="app">
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/main">
            <h1> main </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
