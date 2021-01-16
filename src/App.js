import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Redirect from="/all" to="/"></Redirect>
          <Redirect from="/news" to="/"></Redirect>
          <Redirect from="/images" to="/"></Redirect>
          <Redirect from="/shopping" to="/"></Redirect>
          <Redirect from="/maps" to="/"></Redirect>
          <Redirect from="/more" to="/"></Redirect>
          <Redirect from="/settings" to="/"></Redirect>
          <Redirect from="/tools" to="/"></Redirect>
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
