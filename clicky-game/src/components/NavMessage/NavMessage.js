import React from "react";
import "./NavMessage.css";

//Message renders an li tag containing a message for the user

class NavMessage extends Component{
    state = {
        message: "",
        animating: false
    };

    componentDidUpdate({ score, topScore }, prevState){
        const newState = { animating: true };

        if (score === 0 && topScore === 0){
            newState.message = "";
        }
        else if (score === 0 && topScore > 0){
            newState.message = "incorrect";
        }
        else{
            newState.message = "correct";
        }

        if (score !== this.props.score || this.state.message !== newState.message){
            this.setState(newState);
        }
    }

renderMessage = () => {
    switch (this.state.message){
        case "correct":
            return "You Got It!";
        case "incorrect":
            return "Ooops";
        default:
            return "Click an image to start!"
    }
};

render() {
    return (
        <li
        className={this.state.animating ? this.state.message : ""}
        onAnimationEnd={() => this.setState({ animating: false})}
        >
        {this.renderMessage()}
        </li>
    );
}
}

export default NavMessage;