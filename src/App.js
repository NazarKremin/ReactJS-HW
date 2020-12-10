import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Link to={'/users'}>
                            Users
                        </Link>
                    </div>
                    <hr/>
                    <div>
                        <Link to={'/posts'}>
                            Posts
                        </Link>
                    </div>
                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <Users/>
                        }}/>
                        <Route path={'/posts'} render={() => {
                            return <Posts/>
                        }}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;