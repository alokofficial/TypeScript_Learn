// Rest Operator
type FuncType = (...m: number[]) => number[];
const func: FuncType = (...m) => {
  return m;
};
let f1= func(25, 23, 34, 6, 67, 8, 9);

console.log(f1);

