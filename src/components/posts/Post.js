import React, {Component} from 'react';
import PostsService from "../service/PostsService";

class Post extends Component {

    postService = new PostsService()

    state = {inputValue:[]}

    componentDidMount() {
        let {id} = this.props;
        this.postService.getPostsId(id)
            .then(value => this.setState({inputValue: value}))
    }

    render() {
        const {inputValue} = this.state
        return (
            <div>
                <div>
                   <h5>Id: {inputValue.id}</h5>
                    <h5>Title: {inputValue.title}</h5>
                    <h5>Body: {inputValue.body}</h5>
                </div>
            </div>
        );
    }
}

export default Post;