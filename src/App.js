import React, {Component} from 'react';
import AllPosts from "./components/posts/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsers from "./components/Users/AllUsers";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={'/posts'}>
                        Posts
                    </Link>
                    <div>
                        <Link to={'/users'}>
                            Users
                        </Link>
                    </div>
                    <Switch>
                        <Route path={'/posts'} render={() => {
                            return <AllPosts/>
                        }}/>
                        <Route path={'/users'} render={()=>{
                            return <AllUsers/>
                        }}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;