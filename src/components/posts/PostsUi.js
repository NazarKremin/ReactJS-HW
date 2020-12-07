import React, {Component} from 'react';

class PostsUi extends Component {
    render() {
        let {item,selectPost} = this.props;
        return (
            <div>
                {item.id}
                {item.title}
                <button onClick={()=>{selectPost(item.id)}}> Select </button>
                <hr/>
            </div>
        );
    }
}

export default PostsUi;