import React, {Component} from 'react';
import Users from "./components/user/Users";
import Posts from "./components/posts/Posts";
import Comment from "./components/Comment/Comment";

class App extends Component {
    render() {
        return (
            <div>
              <Users/>
              <Posts/>
              <Comment/>
            </div>
        );
    }
}

export default App;