import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./rountes/Navigation";
import Home from "./rountes/Home";
import About from "./rountes/About";
import Detail from "./rountes/Detail";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/movie/:id" component={Detail}></Route>
        </HashRouter>
    );
}

export default App;
