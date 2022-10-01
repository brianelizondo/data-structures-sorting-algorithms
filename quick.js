/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/
function pivot(arr, start = 0, end = arr.length - 1){
    let pivotValue = arr[start];
    let pivotIndex = start; 
    
    for(let i = start; i <= end; i++) {
        if(arr[i] < pivotValue) {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    
    return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/
function quickSort(arr, start = 0, end = arr.length - 1){
    if(start < end){
        let pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
    return arr;
}

module.exports = {pivot, quickSort};