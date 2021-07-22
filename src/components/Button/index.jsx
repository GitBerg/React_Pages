import { Component } from "react";

import './styles.css';

export class Button extends Component {
    render() {
        const { text, actionFn, disabled } = this.props;
        return (
            <button disabled={disabled} className='button' onClick={actionFn}> 
                {text}
            </button>
        )
    }
}