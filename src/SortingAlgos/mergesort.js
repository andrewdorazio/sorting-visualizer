export const getMergeSortAnimations = (array) => {
    // Create animations array
    const animations = [];
    // If single value then return value
    if (array.lenght <= 1) {
        console.log('length < 1')
        return array;
    }
    // aux array = input array sliced by value
    const auxiliaryArray = array.slice();
    console.log(auxiliaryArray);
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    let new_animations = []
    for (let i = 0; i < animations.length; i++) {
        let splitAnimation = animations[i].slice();
        let splitAnimationOne = splitAnimation[0]
        let splitAnimationTwo = splitAnimation[1]
        new_animations.push(splitAnimationOne)
        new_animations.push(splitAnimationTwo)
    }
    console.log(array)
    console.log(new_animations);
    return animations;
}

const mergeSortHelper = (mainArray, startIndex, endIndex, auxiliaryArray, animations) => {
    // Returns if array has been ran through
    if (startIndex === endIndex) {
        console.log('returned')
        return;
    }
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    console.log(startIndex)
    console.log(middleIndex)
    console.log(endIndex)
    mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray, animations);
    console.log(auxiliaryArray)
    console.log(mainArray)
    console.log('running second helper')
    mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray, animations);
    console.log(auxiliaryArray)
    console.log(mainArray)
    mergeIt(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
}

const mergeIt = (mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations) => {
    console.log('merging')
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;
    let overwitten = false;
    console.log(i)
    console.log(j)
    while ( i <= middleIndex && j <= endIndex ) {
        // We are comparing i and j
        // Push them to change their color
        animations.push([i, j]);
        // We are still comparing i and j 
        // Push them again to change color back
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // Overwrite the value at index k in the original array 
            // with the value at index i in the auxiliary array
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // We overwrite the value at index k in the original array
            // with the value at index j in the auxiliary array
            animations.push([k, auxiliaryArray[j]]);
            console.log('overwriting')
            mainArray[k++] = auxiliaryArray[j++];
            console.log(auxiliaryArray)
            console.log(mainArray)
        }
    }
    while (i <= middleIndex) {
        console.log('overwrite animation loop')
        console.log(i)
        console.log(middleIndex + 1)
        console.log(k)
        // We are comparing these values an pushing them to change color
        animations.push([i, middleIndex + 1]);
        // We are comparing these values and pushing again to change color back
        animations.push([i, middleIndex + 1]);
        // We overwrite the value at index k in the original array with
        // the value at index i in the auxiliary array
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIndex) {
        console.log('sorted animation loop')
        console.log(j - 1)
        console.log(endIndex)
        // We are comparing these values and pushing them to change color
        animations.push([j - 1, endIndex]);
        // Pushing back to revert color
        animations.push([j - 1, endIndex]);
        // Overwrite value in the original array with the value in the aux array
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}







//Quicksort

const partition = (array, low, high) => {
    // Choose rightmost value as pivot
    let pivot = array[high];
    // Temp index for left pointer 
    let i = low - 1;
    for (let j = low; high-1; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
        i++;
        [array[i], array[high]] = [array[high], array[i]];
        return i
    }
}

export const quickSort = (array, low, high) => {
    // Check order of indices
    if (low >= high || low < 0) {
        return;
    }
    let pivotIndex = partition(array, low, high)
    quickSort(array, low, pivotIndex-1)
    quickSort(array, pivotIndex+1, high)
}

export const checkArrays = (array1, array2) => {
    if (array1.length !== array2.length) {
        console.log(null);
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log(false);
        }
    }
    console.log(true);
}