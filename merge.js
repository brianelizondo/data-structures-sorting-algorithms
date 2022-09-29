// merge
// Given two sorted arrays, write a function called merge which accepts two sorted arrays and returns a new array with values from both arrays sorted.
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
// Also, do not use the built in .sort() method! We’re going to use this function to implement a sort, so the helper itself shouldn’t depend on a sort.
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort() {}

module.exports = { merge, mergeSort};