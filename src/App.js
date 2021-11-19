import "./App.css";
import Home from "./Pages/Home";
import WatchList from "./Pages/WatchList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  useHistory,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Pages/Login/Login";
import NavbarComponent from "./Components/Shared/NavbarComponent/NavbarComponent";
import Search from "./Pages/Search";
function App(props) {
  let history = useHistory();
  console.log(history, "hhhhhhhhhhh");
  return (
    <div className="App">
      {history.location.pathname === "/login" ? "" : <NavbarComponent />}

      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/watchlist" component={WatchList} />
        <ProtectedRoute exact path="/search/:text" component={Search} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
