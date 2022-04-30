// Quicksort Algorithm and indexAnimations
// low = starting index
// high = ending index
// It seems like best would be to seperate the indexAnimations for the pivot points and for the length changes

export const getQuickSortAnimations = (array) => {
    const indexAnimations = [];
    const lengthAnimations = [];
    quickSort(array, 0, array.length - 1, indexAnimations, lengthAnimations)
    console.log(indexAnimations.slice())
    console.log(lengthAnimations.slice())
    return indexAnimations;
}

const quickSort = (array, low, high, indexAnimations, lengthAnimations) => {
    // Check for errors
    if (low >= high || low < 0) {
        return array;
    }
    // Create pivot index and sort with partition function
    let pivotIndex = partition(array, low, high, indexAnimations, lengthAnimations)
    // Run quicksort on upper and lower half
    quickSort(array, low, pivotIndex - 1, indexAnimations, lengthAnimations)
    quickSort(array, pivotIndex + 1, high, indexAnimations, lengthAnimations)
}

const partition = (array, low, high, indexAnimations, lengthAnimations) => {
    // Choose rightmost value as pivot
    let pivot = array[high];
    indexAnimations.push([high])
    // I is left pointer and starts at -1 so it doesnt skip the first element when swapping
    let i = low - 1;
    // Loop through array, skipping numbers larger than pivot and swapping smaller numbers with the skipped larger numbers
    for (let j = low; j <= high-1; j++) {
        console.log(i)
        indexAnimations.push([i])
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            lengthAnimations.push([array[i], array[j]])
        }
    }
    // place pivot point used in partition in the correct spot in array
    [array[i + 1], array[high]] = [array[high], array[i + 1]];

    // return the pivot point 
    return i + 1
}


