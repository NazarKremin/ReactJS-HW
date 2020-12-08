import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import '../posts/style btn.css'


class PostsUi extends Component {
    render() {

        let {item, match: {url},selectPost} = this.props
        return (
            <div>
                {item.id}
                {item.title}<br/>
                <Link to={`${url}/${item.id}`}><button onClick={() => selectPost(item.id)} className={'btn'}>Go</button></Link>

                <hr/>
            </div>
        );
    }
}

export default withRouter(PostsUi);