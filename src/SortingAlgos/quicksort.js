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
    if (low >= high || low < 0) {
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
    let pivot = array[high];
    pivotChange.pop()
    pivotChange.pop()
    pivotChange.push(true, true)
  //  pivotAnimations.push(high)
    // I is left pointer and starts at -1 so it doesnt skip the first element when swapping
    let i = low - 1;
    // Loop through array, skipping numbers larger than pivot and swapping smaller numbers with the skipped larger numbers
    for (let j = low; j <= high-1; j++) {
    //    console.log(i)
        // Comparing i + 1 and j so pushing that
    //    pivotAnimations.push(i + 1, j)
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            lengthAnimations.push(i, j)
            pivotChange.push(false, false)
            lengthAnimations.push(i, j)
            pivotChange.push(false, false)
            lengthAnimations.push(array[i], array[j])
            pivotChange.push(false, false)
        }
    }
    // place pivot point used in partition in the correct spot in array
    [array[i + 1], array[high]] = [array[high], array[i + 1]];

    // return the pivot point 
    pivotAnimations.push(i + 1, array[high])
    return i + 1
}


