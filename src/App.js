import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={Dashboard} exact />
            </Switch>
        </Router>
    );
};

export default App;
