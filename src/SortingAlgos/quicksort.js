// Quicksort Algorithm and Animations
// low = starting index
// high = ending index

export const quickSort = (array, low, high) => {
    // Bounce check
    if (low >= high || low < 0) {
        return array;
    }
    // Create pivot index with partition function
    let pivotIndex = partition(array, low, high)
    // Run quicksort on upper and lower half
    quickSort(array, low, pivotIndex - 1)
    quickSort(array, pivotIndex + 1, high)
}

const partition = (array, low, high) => {
    // Choose rightmost value as pivot
    let pivot = array[high];
    // I is left pointer and starts at -1 so it doesnt skip the first element when swapping
    let i = low - 1;
    // Loop through array, skipping numbers larger than pivot and swapping smaller numbers with the skipped larger numbers
    for (let j = low; j <= high-1; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
        i++;   
    }
    // place pivot point used in partition in the correct spot in array
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    // return the pivot point 
    return i + 1
}


