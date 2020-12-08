import React, {Component} from 'react';
import PostsUi from "./PostsUi";
import {PostsService} from "../ServiceUI/PostsService";

class AllPosts extends Component {

    state = {posts: [], postSelect: null}

    PostService = new PostsService()

    componentDidMount() {
        this.PostService.getAllPost().then(value => this.setState({posts: value}))
    }

    selectPost = (id) => {
        this.PostService.getPostById(id).then(value => this.setState({postSelect: value}))
    }

    render() {
        let {posts,postSelect } = this.state;
        return (
            <div>
                {
                    posts.map(value => (<PostsUi item={value} key={value.id} selectPost={this.selectPost}/>))
                }
                <hr/>
                <div>

                </div>
                {
                    postSelect && <PostsUi item={postSelect}/>
                }
            </div>
        );
    }
}

export default AllPosts;