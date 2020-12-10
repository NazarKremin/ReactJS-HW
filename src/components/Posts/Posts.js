import React, {Component} from 'react';
import PostsService from "../Service/PostsService";
import PostsUi from "./PostsUi";
import {Route, Switch, withRouter} from "react-router-dom";
import PostsFullInformation from "./PostsFullInformation";

class Posts extends Component {

    state = {posts: []}

    PostsService = new PostsService()

async componentDidMount() {
        const posts = await this.PostsService.getAllPosts()
            this.setState({posts})
}

    render() {
        const {posts} = this.state;
        const {match:{url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <PostsUi postItem={value} key={value.id}/>)
                }
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        const {match:{params:{id}}} = props;
                        return <PostsFullInformation {...props} key={id}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Posts);