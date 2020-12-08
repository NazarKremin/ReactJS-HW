import React, {Component} from 'react';
import AllPosts from "./components/posts/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={'/posts'}>
                        Posts
                    </Link>

                    <Switch>
                        <Route path={'/posts'} render={() => {
                            return <AllPosts/>
                        }}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;