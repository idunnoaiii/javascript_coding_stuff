const cưa = (x) => {
  return `${x} đã cưa`;
};

const sấy = (x) => {
  return `${x} đã sấy`;
};

const bào = (x) => {
  return `${x} đã bào`;
};

const khoan = (x) => {
  return `${x} đã khoan`;
};

const chà = (x) => {
  return `${x} đã chà`;
};

const móc = (x) => {
  return `${x} đã gắn móc`;
};

// const thớt = "Khúc gỗ"

var thớt = móc(chà(khoan(bào(sấy(cưa('khúc gỗ'))))));
// console.log(thớt);

const compose = (...fns) => fns.reduce((f, g) => x => f(g(x)))

const quăng_cho_tao_cái_thớt = compose(móc, chà, khoan, bào, sấy, cưa);
// console.log(quăng_cho_tao_cái_thớt.toString());


const nhãn = (x) => {
    return `${x} đã gắn nhãn`;
} 

const sum = (a, b, c) => a+b+c;
console.log(sum(1,2,3))


const curry = (fn) => {
    let totalArguments = fn.length;

    const next = (...args) => {

        if(totalArguments - args.length == 0){
            return fn(...args)
        }
        return next(...args, ... rest)
    }

    
}