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

function some(arr=[]){
    //better
    // return arr.reduce((t, v) =>  t || v >= 5, false) 
    return arr.reduce((t, v) => t || (t = v >= 5, t), false)
}

function every(arr=[]){
    return arr.reduce((t, v) => t && v < 3, true)
}

function chunk(arr=[], size=1){
    //overthinking at t[?]
    // return arr.reduce((t, v, index) => ((t[Math.floor(index/size)] && t[Math.floor(index/size)].length < size) 
    // ? t[Math.floor(index/size)].push(v) 
    // : t.push([v]), t), [[]])

    return arr.length ? arr.reduce((t, v) => (t[t.length-1].length === size ? t.push([v]) : t[t.length-1].push(v), t), [[]]) :[]
}

function difference(arr=[], oarr=[]){
    return arr.reduce((t, v) => (!oarr.includes(v) && t.push(v), t), [])
    // return arr.reduce((t, v)=> oarr.indexOf(v) === -1 ? [...t, v] :  t, [])
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6]
difference(arr1, arr2); // [1, 4, 5]


function Fill(arr=[], val="", start=0, end=arr.length){
    if(start < 0 || end > arr.length || start > end) return arr
    return [
        ...arr.slice(0, start),
        ...arr.slice(start, end).reduce((t, v) => (t.push(val || v), t), []),
        ...arr.slice(end, arr.length)
    ]
}

// const arr = [0, 1, 2, 3, 4, 5, 6];
// const retArr = Fill(arr, null , 2, 5)
// console.log(retArr); 


function Flat(arr=[]){
    // return arr.reduce((t, v) => Array.isArray(v) ? [...t, ...Flat(v)] : [...t, v],[]) // use rest
    return arr.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), []) // use concat 
}

// const arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// const retArr = Flat(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(retArr)


function Uniq(arr=[]){
    return arr.reduce((t, v) => t.indexOf(v) == -1 ? [...t, v] : t, [])
}

// const arr = [2, 1, 0, 3, 2, 1, 2];
// const retArr = Uniq(arr); // [2, 1, 0, 3]
// console.log(retArr)


function Max(arr=[]){
    return arr.reduce((t, v) => v > t ? v : t )
}

function Min(arr=[]) {
    return arr.reduce((t, v) => v < t ? v : t)
}

// const arr = [12, 45, 21, 65, 38, 76, 108, 43];
// const maxRes = Max(arr); // 108
// console.log(maxRes)
// const minRes = Min(arr); // 12
// console.log(minRes)
