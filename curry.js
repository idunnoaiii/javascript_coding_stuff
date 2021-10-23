const function3Params = function(fn) {
    return function(x) {
        return function(y) {
            return function(z) {
                return fn(x, y, z)
            }
        }
    }
}

const curry = (fn) => {

    const numArgs = fn.length;
    
    const next = (...args) => {
        if(numArgs == args.length){
            return fn(...args)
        }

        return (...rest) => {
            return next(...args, ...rest)
        }

    }

    return next;
}

const sum = (x, y, z) => x + y + z

const sum3params = function3Params(sum)


const sumCurry = curry(sum)

console.log(sumCurry(1, 2)(43))


