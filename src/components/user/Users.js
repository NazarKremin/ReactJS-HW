import React, {Component} from 'react';
import User from "./User";

class Users extends Component {

    myForm = new React.createRef();

    state={InputValue:''}

    render() {
        let {InputValue}=this.state
        return (
            <div>
                <form ref={this.myForm}>
                   Users <input type='number' onInput={this.Set} value={this.state.InputValue}/>
                </form>
                <User id={InputValue} key={InputValue}/>
            </div>
        );
    }
    Set =(e)=>{
        this.setState({InputValue:e.target.value})
    }
}
export default Users;