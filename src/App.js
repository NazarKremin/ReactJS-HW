import React, {Component} from 'react';
import Users from "./components/user/Users";
import Posts from "./components/posts/Posts";
import Comment from "./components/Comment/Comment";
import CommUi from "./components/Comment/CommUi";
import PostUi from "./components/posts/PostUi";
import UserUi from "./components/user/UserUi";

class App extends Component {
    render() {
        return (
            <div>
              <UserUi/>
              <PostUi/>
              <CommUi/>
            </div>
        );
    }
}

export default App;