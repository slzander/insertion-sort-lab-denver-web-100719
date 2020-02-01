function findMinAndRemove(array){
    let min = 0
    for(let i = 1; i < array.length; i++){
        if(array[i] < array[min]){
            min = i
        }
    }
    return array.splice(min, 1)[0]
}

function insertionSort(array){
    let newArray = []
    while(array.length > 0){
        newArray.push(findMinAndRemove(array))
    }
    return newArray
}
