import React, {Component} from 'react';
import PostsService from "../Service/PostsService";

class PostsFullInformation extends Component {

    state = {postItem:null}

    PostsService = new PostsService()

   async componentDidMount() {
        const {match:{params:{id}}} = this.props;
        const postItem = await this.PostsService.getAllPostsId(id)
            this.setState({postItem})
    }

    render() {
        const {postItem} = this.state;
        return (
            <div>
                <hr/>
                {postItem && <div>{postItem.title}
                    {postItem.body}</div>}

            </div>
        );
    }
}

export default PostsFullInformation;