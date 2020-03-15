import React, { Component } from 'react';

class ButtonComponent extends Component {
    state = {
        button: "click me"
    }
    constructor() {

        super();



    }

    updateButtonState = () => {
        this.setState({ button: "Clicked" })

    }

    render() {
        return (
            <button type="button" className="btn btn-secondary"
                onClick={this.updateButtonState}>
                {this.state.button}
            </button>
        );
    }
}
export default ButtonComponent;
