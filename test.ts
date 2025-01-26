interface Obj {
  height: number;
  weight: number;
  gender?: boolean;
}

type FuncType = (n: number, m: number) => void;

interface NewObj extends Obj {
  scolar: boolean;
  func: FuncType;
}

const gigi: NewObj = {
  height: 3434,
  weight: 3434,
  scolar: true,
  func: (n, m) => {
    console.log(n * m);
  },
};

const kendal: NewObj = {
  height: 43434,
  scolar: true,
  weight: 545,
  func: (n, m) => {
    console.log(n * m);
  },
};

kendal.func(20, 10);