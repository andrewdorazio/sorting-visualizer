// Merge Sort

export const getMergeSortAnimations = (array) => {
    // Create animations array
    const animations = [];
    // If single value then return value
    if (array.lenght <= 1) return array;
    // aux array = input array sliced by value
    const auxiliaryArray = array.slice();
    // Run 
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations
}

const mergeSortHelper = (mainArray, startIndex, endIndex, auxiliaryArray, animations) => {
    if (startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray, animations);
    mergeIt(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
}

const mergeIt = (mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations) => {
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;
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
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIndex) {
        // We are comparing these values an pushing them to change color
        animations.push([i, i]);
        // We are comparing these values and pushing again to change color back
        animations.push([i, i]);
        // We overwrite the value at index k in the original array with
        // the value at index i in the auxiliary array
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIndex) {
        // We are comparing these values and pushing them to change color
        animations.push([j, j]);
        // Pushing back to revert color
        animations.push([j, j]);
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

/* Lomuto Partition scheme
// Sorts a (portion of an) array, divides it into partitions, then sorts those
algorithm quicksort(A, lo, hi) is 
  // Ensure indices are in correct order
  if lo >= hi || lo < 0 then 
    return
    
  // Partition array and get the pivot index
  p := partition(A, lo, hi) 
      
  // Sort the two partitions
  quicksort(A, lo, p - 1) // Left side of pivot
  quicksort(A, p + 1, hi) // Right side of pivot

// Divides array into two partitions
algorithm partition(A, lo, hi) is 
  pivot := A[hi] // Choose the last element as the pivot

  // Temporary pivot index
  i := lo - 1

  for j := lo to hi - 1 do 
    // If the current element is less than or equal to the pivot
    if A[j] <= pivot then 
      // Move the temporary pivot index forward
      i := i + 1

      // Swap the current element with the element at the temporary pivot index
      swap A[i] with A[j] 
  // Move the pivot element to the correct pivot position (between the smaller and larger elements)
  i := i + 1
  swap A[i] with A[hi]
  return i // the pivot index
*/









/*
Quicksort from that one youtube video
const partition = (array, left, right, pivot) => {
    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
    }   
}

export const quickSort = (array, left, right) => {
    if (left >= right) {
        return;
    }
    let pivot = array[(array.length/2)];
    let index = partition(array, left, right, pivot);
    quickSort(array, left, index-1);
    quickSort(array, index, right);

}

*/




/* Merge Sort works but not for animations. Simpler form of merge sort with poor space complexity 
export const mergeSort = (array) => {
    if (array.length === 1) return array;
    const middleIndex = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, middleIndex));
    const rightHalf = mergeSort(array.slice(middleIndex));
    const sortedArray = [];
    let i = 0;
    let j = 0;
    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] < rightHalf[j]) {
            sortedArray.push(leftHalf[i++]);
        } else {
            sortedArray.push(rightHalf[j++])
        }
    }
    while (i < leftHalf.length) sortedArray.push(leftHalf[i++]);
    while (j < rightHalf.length) sortedArray.push(rightHalf[j++]);
    return sortedArray;
}
*/


/* Create MergeSort that works with animations 
export function mergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

const mergeSortHelper = (
    mainArray,
    startIndex,
    endIndex,
    auxiliaryArray,
    animations ) => {
        if (startIndex === endIndex) return;
        const middleIndex = Math.floor((startIndex - endIndex) / 2);
        mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray, animations);
        mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray, animations);
        mergeIt(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
}


const mergeIt = ( 
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    animations ) => 
    {
        let k = startIndex;
        let i = startIndex;
        let j = middleIndex + 1;
        // Loop through both sections
        while (i <= middleIndex && j <= endIndex) {
            const animation = {};
            // Set comparison key eqaul to starting and middle index value
            animation.comparison = [i, j];
            // If the values in auxilary array are unsorted
            if (auxiliaryArray[i] <= auxiliaryArray[j]) {
                // Create swap key with value = [starting index, starting index + iterations]
                animation.swap = [k, i];
                // 
                mainArray[k++] = auxiliaryArray[i++];
            } else {
                // swap = [starting index, middle index + iterations]
                animation.swap = [k, j];
                mainArray[k++] = auxiliaryArray[j++];
            }
            animations.push(animation);
            while (i <= middleIndex) {
                animations.push({
                    comparison: [i, i],
                    swap: [k, i],
                });
                mainArray[k++] = auxiliaryArray[i++];
            }
            while (j <= endIndex) {
                animations.push({
                    comparison: [j, j],
                    swap: [k, j],
                });
                mainArray[k++] = auxiliaryArray[j++]
            }
        }
    }
*/