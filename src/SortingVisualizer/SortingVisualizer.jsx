import React from 'react';
import './SortingVisualizer.css';
import { randomInteger } from './Utilities';
import { getMergeSortAnimations } from '../SortingAlgos/mergesort';
import { quickSort } from '../SortingAlgos/quicksort';

const numberOfBars =50;

const secondaryColor = 'aquamarine';

const primaryColor = 'indigo';

const animationSpeed = 10; //ms

export class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    //On reload of screen: reset the array of bars
    componentDidMount() {
        this.generateArray();
    }


    generateArray() {
        const array = [];
        //Iterate from 0 to desired number of bars 
        for (let i = 0; i < numberOfBars; i++) {
            //Generate random integer
            let randInt = randomInteger(10, 1000);
            //Push it to the array
            array.push(randInt);
        }
        //Set the state with the newly generated array
        this.setState({array})
    }

    quickSort() {
        const quickSortedArray = quickSort(this.state.array, 0, numberOfBars);
        console.log(quickSortedArray)
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? secondaryColor : primaryColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight/1.5}px`;
                }, i * animationSpeed);
            }
        }
    }

    render() {
        const {array} = this.state;
    
        return (
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: primaryColor,
                  height: `${value/1.5}px`,
                }}></div>
            ))}
            <div></div>
            <button onClick={() => this.generateArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.testSortingAlgorithms()}>
              Test Sorting Algorithms (BROKEN)
            </button>
          </div>
        );
    }
}