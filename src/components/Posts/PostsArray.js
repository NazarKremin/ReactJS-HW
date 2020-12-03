import React, {Component} from 'react';
import PostUi from "./PostUI";

class PostsArray extends Component {

state = {posts:[], post:null}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(postsFromApi => {
            this.setState({posts:postsFromApi})
        })
}

    Select = (id) => {
   const post = this.state.posts.find(value => value.id === id)
        this.setState({post})
    };

    render() {
const {posts,post} = this.state
        return (
            <div>
                {
                    posts.map((value) => (<PostUi item={value} key={value.id} Select={this.Select}/>))
                }
                <hr/>
                {
                    post && <PostUi item={post}/>
                }
            </div>
        );
    }
}

export default PostsArray;