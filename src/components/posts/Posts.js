import React, {Component} from 'react';
import Post from "./Post";

class Posts extends Component {

myForm = React.createRef();

state = {inputValue:''}

    render() {
    const {inputValue} = this.state;
        return (
            <div>
                <form ref={this.myForm}>
                   Posts <input type={'number'} onInput={this.setPost} value={this.state.inputValue}/>
                </form>
                <Post id={inputValue} key={inputValue}/>
            </div>
        );
    }

    setPost = (e) => {
        this.setState({inputValue:e.target.value})
    }
}

export default Posts;