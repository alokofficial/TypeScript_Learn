type FuncType = (n: number, m: number, l?: number) => number;
const func: FuncType = (n, m, l = 20) => {
  return n * m * l;
};

const ans = func(20, 10);
console.log(ans);

const ans2 = func(20, 10, 10);
console.log(ans2);