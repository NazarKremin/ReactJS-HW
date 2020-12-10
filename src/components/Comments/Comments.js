import React, {Component} from 'react';
import CommentsService from "../Service/CommentsService";
import CommentsUi from "./CommentsUi";
import {Route, Switch, withRouter} from "react-router-dom";
import CommentsFullInformation from "./CommentsFullInformation";

class Comments extends Component {

    state = {comments: []}

    commentsService = new CommentsService()

    async componentDidMount() {
        const comments = await this.commentsService.getAllComments();
        this.setState({comments})
    }

    render() {
        const {comments} = this.state;
        const {match: {url}} = this.props;
        return (
            <div>
                {
                    comments.map(value => (<CommentsUi commentsItem={value} key={value.id}/>))
                }
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props;
                        return <CommentsFullInformation id={id} key={id}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Comments);