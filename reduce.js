let arr = [1,2,32,4,5,6]


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

function any(arr=[]){
    return arr.reduce((t, v) => t && v < 3, true)
}

function chunk(arr=[], size=1){
    //overthinking at t[?]
    // return arr.reduce((t, v, index) => ((t[Math.floor(index/size)] && t[Math.floor(index/size)].length < size) 
    // ? t[Math.floor(index/size)].push(v) 
    // : t.push([v]), t), [[]])

    return arr.length ? arr.reduce((t, v) => (t[t.length-1].length === size ? t.push([v]) : t[t.length-1].push(v), t), [[]]) :[]
}

function defference(arr=[], oarr=[]){
    return arr.reduce((t, v) => (!oarr.includes(v) && t.push(v), t), [])
    // return arr.reduce((t, v)=> oarr.indexOf(v) === -1 ? [...t, v] :  t, [])
}


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6]
console.log(defference(arr1, arr2));