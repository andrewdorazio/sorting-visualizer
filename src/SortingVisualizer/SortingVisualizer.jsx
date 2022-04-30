import React from 'react';
import './SortingVisualizer.css';
import { randomInteger } from './Utilities';
import { getMergeSortAnimations } from '../SortingAlgos/mergesort';
import { getQuickSortAnimations } from '../SortingAlgos/quicksort';

const numberOfBars = 100;

const secondaryColor = 'aquamarine';

const primaryColor = 'indigo';

const animationSpeed = 5; //ms

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
            let randInt = randomInteger(10, 600);
            //Push it to the array
            array.push(randInt);
        }
        //Set the state with the newly generated array
        this.setState({array})
    }

    quickSort() {
        const quickSortAnimations = getQuickSortAnimations(this.state.array);
        console.log(this.state.array);
        let pivotCounter = 1
        /*    for ( let i = 0; i < quickSortAnimations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const animatedBar = quickSortAnimations[i];
            const barStyle = arrayBars[animatedBar].style;
            // const color = i % 2 === 0 ? secondaryColor : primaryColor;
            setTimeout(() => {
                barStyle.backgroundColor = color;
            }, i * animationSpeed);
        } */
        for ( let i = 0; i < quickSortAnimations.lengthAnimations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isChangedBar = i % 6 === 0;
            if (isChangedBar && i !== 0) {
                setTimeout(() => {
                    const longBarTurnedShortIndex = quickSortAnimations.lengthAnimations[i - 3];
                    const shortBarTurnedLongIndex = quickSortAnimations.lengthAnimations[i - 2];
                    const longBarTurnedShortNewHeight = quickSortAnimations.lengthAnimations[i - 1];
                    const shortBarTurnedLongNewHeight = quickSortAnimations.lengthAnimations[i];
                    const barOneStyle = arrayBars[longBarTurnedShortIndex].style;
                    const barTwoStyle = arrayBars[shortBarTurnedLongIndex].style;
                //    let color = secondaryColor;
                //    barOneStyle.backgroundColor = color;
                //    barTwoStyle.backgroundColor = color;
                    barOneStyle.height = `${longBarTurnedShortNewHeight}px`;
                    barTwoStyle.height = `${shortBarTurnedLongNewHeight}px`;
                //    barOneStyle.backgroundColor = color;
                //    barTwoStyle.backgroundColor = color;
                }, i * animationSpeed)
                if (quickSortAnimations.pivotChange[i] === true) {
                    setTimeout(() => {
                        const pivotIndex = quickSortAnimations.pivotAnimations[pivotCounter];
                        const pivotLength = quickSortAnimations.pivotAnimations[pivotCounter + 1];
                        const swappedIndex = quickSortAnimations.pivotAnimations[pivotCounter + 2];
                        const swappedLength = quickSortAnimations.pivotAnimations[pivotCounter + 3];
                     //   arrayBars[pivotIndex].style.backgroundColor = secondaryColor;
                        arrayBars[pivotIndex].style.height = `${pivotLength}px`
                     //   arrayBars[swappedIndex].style.backgroundColor = secondaryColor;
                        arrayBars[swappedIndex].style.height = `${swappedLength}px`
                    //    const pivotBarStyle = arrayBars[pivotIndex].style;
                    //    pivotBarStyle.height = `${pivotLength/1.5}px`;
                    pivotCounter += 4;
                    }, i * animationSpeed)};
            }
            // Pivot Change
        /*    // Pivot Change
            if ( quickSortAnimations.lengthAnimations[i] === 0) {
                setTimeout(() => {
                    const pivotIndex = quickSortAnimations.pivotAnimations[pivotCounter - 1];
                    const pivotLength = quickSortAnimations.pivotAnimations[pivotCounter];
                    const pivotBarStyle = arrayBars[pivotIndex].style;
                    pivotBarStyle.height = `${pivotLength/1.5}px`;
                }, i * animationSpeed)
                pivotCounter += 2;
            } */
        } 
        /*
        for ( let i = 0; i < quickSortAnimations.pivotAnimations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isPivotLength = i % 2 === 0;
            if (isPivotLength && i !== 0) {
                setTimeout(() => {
                    const pivotIndex = quickSortAnimations.pivotAnimations[i - 1];
                    const pivotLength = quickSortAnimations.pivotAnimations[i];
                    const pivotBarStyle = arrayBars[pivotIndex].style;
                    pivotBarStyle.height = `${pivotLength/1.5}px`;
                }, i * animationSpeed)
            }
        } */

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
                    barOneStyle.height = `${newHeight}px`;
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
                  height: `${value}px`,
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