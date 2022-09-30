/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/
function pivot(arr){
    let pivotValue = arr[0];
    let pivotIndex = 0; 
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < pivotValue) {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    
    [arr[0], arr[pivotIndex]] = [arr[pivotIndex], arr[0]];
    
    return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort() {}

module.exports = {pivot, quickSort};