import React, {Component} from 'react';
import './PostStyle.css'

class PostUi extends Component {

    catchMe = () => {
        console.log("....")
    }

    render() {
        const {item, Select} = this.props
        return (
            <div>
                <h3>{item.userId}-{item.id}-{item.title}-{item.body}</h3>
                <button onClick={()=> Select(item.id)} className={'btn'}>Catch Me</button>
                <hr/>
            </div>
        );
    }
}

export default PostUi;