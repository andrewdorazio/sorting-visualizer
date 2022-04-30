// Quicksort Algorithm and pivotAnimations
// low = starting index
// high = ending index
// It seems like best would be to seperate the pivotAnimations for the pivot points and for the length changes
// add pivot animation seperate from swapping animation seperate from length changing animation
// Looks like we may have to do a seperate pivot animation after the length animation, then run the second / third / etc length animation
export const getQuickSortAnimations = (array) => {
    const pivotAnimations = [0];
    const lengthAnimations = [0];
    const pivotChange = [false, false];
    quickSort(array, 0, array.length - 1, pivotAnimations, lengthAnimations, pivotChange)
    console.log(pivotAnimations.slice())
    console.log(lengthAnimations.slice())
    console.log(pivotChange.slice())
    return {lengthAnimations: lengthAnimations, pivotAnimations: pivotAnimations, pivotChange: pivotChange}
}

const quickSort = (array, low, high, pivotAnimations, lengthAnimations, pivotChange) => {
    // Check for errors
    if (low > high || low < 0) {
        return array;
    }
    // Create pivot index and sort with partition function
    let pivotIndex = partition(array, low, high, pivotAnimations, lengthAnimations, pivotChange)
    // Run quicksort on upper and lower half
    quickSort(array, low, pivotIndex - 1, pivotAnimations, lengthAnimations, pivotChange)
    quickSort(array, pivotIndex + 1, high, pivotAnimations, lengthAnimations, pivotChange)
}

const partition = (array, low, high, pivotAnimations, lengthAnimations, pivotChange) => {
    // Choose rightmost value as pivot
    let rightPivot = high;
    let leftPivot = low;
    pivotChange.pop()
    pivotChange.pop()
    pivotChange.push(true, true)
    // I is left pointer and starts at -1 so it doesnt skip the first element when swapping
    let i = low - 1;
 //   let y = high + 1;
    // Loop through array, skipping numbers larger than pivot and swapping smaller numbers with the skipped larger 
    for (let j = low; j <= high-1; j++) {
        if (array[j] <= array[rightPivot]) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            lengthAnimations.push(i, j)
            pivotChange.push(false, false)
            lengthAnimations.push(i, j)
            pivotChange.push(false, false)
            lengthAnimations.push(array[i], array[j])
            pivotChange.push(false, false)
        } else {
            lengthAnimations.push(i, j);
            lengthAnimations.push(i, j);
            lengthAnimations.push(null, null);
            pivotChange.push(false, false)
            pivotChange.push(false, false)
            pivotChange.push(false, false)
        }
    }
/*    for (let z = high; z >= low + 1; z--) {
        if (array[z] >= array[leftPivot]) {
            y--;
            [array[y], array[z]] = [array[z], array[y]];
            lengthAnimations.push(y, z)
            pivotChange.push(false, false)
            lengthAnimations.push(y, z)
            pivotChange.push(false, false)
            lengthAnimations.push(array[y], array[z])
            pivotChange.push(false, false)
        } else {
            lengthAnimations.push(y, z);
            lengthAnimations.push(y, z);
            lengthAnimations.push(null, null);
            pivotChange.push(false, false)
            pivotChange.push(false, false)
            pivotChange.push(false, false)
        }
    } */
    // place pivot point used in partition in the correct spot in array
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
  //  [array[y - 1], array[low]] = [array[low], array[y - 1]]

    // return the pivot point 
    pivotAnimations.push(i + 1, array[i + 1], high, array[high])
  //  pivotAnimations.push(y - 1, array[y - 1], low, array[low])
    return i + 1
}


