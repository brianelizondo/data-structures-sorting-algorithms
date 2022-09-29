// selectionSort
// Here’s some guidance for how selection sort should work:
// Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
// If the “minimum” is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
// Repeat this with the next element until the array is sorted.
// This algorithm has a O(n^2) time complexity.
function selectionSort(arr){
    let currentMinimum = arr[0];
    let currentMinimumIDX = 0;
    let sortedIDX = 0;
    let swap = false;
    
    while(true){
        for(let i = sortedIDX + 1; i < arr.length; i++){
            if(arr[i] < currentMinimum){
                currentMinimum = arr[i];
                currentMinimumIDX = i;
                swap = true;
            }
        }
        
        if(swap){
            let temp = arr[sortedIDX];
            arr[sortedIDX] = currentMinimum;
            arr[currentMinimumIDX] = temp;
            swap = false;
        }
        sortedIDX++;
        currentMinimum = arr[sortedIDX];
        currentMinimumIDX = sortedIDX;
        
        if(sortedIDX + 1 >= arr.length) break;
    }
    return arr;
}


module.exports = selectionSort;