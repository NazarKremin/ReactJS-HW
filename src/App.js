import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

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
                    <hr/>
                    <div>
                        <Link to={'/comments'}>
                            Comments
                        </Link>
                    </div>
                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <Users/>
                        }}/>
                        <Route path={'/posts'} render={() => {
                            return <Posts/>
                        }}/>
                        <Route path={'/comments'} render={() => {
                            return <Comments/>
                        }}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;