import React from 'react';
import './SortingVisualizer.css';
import {randomInteger} from './Utilities';


export class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        //Create the area property in state
        this.state = {
            array: [],
        };
        this.resetArray = this.resetArray.bind(this)
    }

    //On reload of screen: reset the array of bars
    componentDidMount() {
        this.resetArray();
    }


    resetArray() {
        const array = [];
        //Iterate from 0 to desired number of bars 
        for (let i = 0; i < 100; i++) {
            //Generate random integer
            let randInt = randomInteger(10, 1000);
            //Push it to the array
            array.push(randInt);
        }
        //Set the state with the newly generated array
        this.setState({array})
    }

    render() {
        return (
            //Map through each value in array, assign the index to key and create a div for each arrayBar value
            <div className="bar-container">
                {this.state.array.map((value, index) => (
                    <div 
                    className="bar" 
                    key={index}
                    style={{height: `${value/25}em`}}>
                    </div>
                ))}
            </div>
        )
    }


//End of class
}