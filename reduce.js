let arr = [1,2,3,4,5,6]


function reverseArr(arr =[]){
    //return arr.reduceRight((t, v) => (t.push(v), t), [])
    return arr.reduceRight((t, v) => [...t, v], [])
}

function map(arr=[]){
    // return arr.reduce((t, v) => (t.push(v*2), t), [])
    return arr.reduce((t, v) => [...t, v*2], [])
}

function filter(arr=[]){
    // return arr.reduce((t, v) => v>=3 ? (t.push(v),t) : t, [])
    return arr.reduce((t, v) => v >= 3 ? [...t, v] : t, [])
}

function map_filter(arr=[]){
    // return arr.reduce((t, v) => (v = v * 2, v * 2 >= 10 ? (t.push(v), t) : t), [])
    return arr.reduce((t, v) => (v = v * 2, v >= 10 ? [...t, v] : t), [])
}


console.log(map_filter(arr));