import React from 'react';
import './Buttons.css';


export class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button className="bottom-screen" id="sort">Sort</button>
                <button className="bottom-screen" id="reset" onClick={this.props.onClick}>Reset</button>
            </div>
        )
    }
}
