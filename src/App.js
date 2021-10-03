import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


import Data from "./component/data";
import Pembayaran from "./component/pembayaran";
import Realbot from "./component/realbot";
//import {useState} from "react";

function App () {
    //const [name, setName] = useState ('')
    return (
       <Router>
            <Switch>
                <Route exact path="/">
                    <Data />
              </Route>
              <Route exact path="/pembayaran">
                    <Pembayaran />
                </Route>
                <Route exact path="/realbot">
                    <Realbot />
                </Route>
           </Switch>
        </Router>

    );
}

export default App;