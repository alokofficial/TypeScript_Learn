// Generics

// which accept any values
function log<T>(arg: T) {
  console.log(arg);
}

log(1);
log("hello");
log({ a: 1, b: "hello" });
