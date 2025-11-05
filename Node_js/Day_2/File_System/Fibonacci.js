

function fibonacci(n) {
  let a = 0, b = 1, next;
  console.log("Fibonacci Series:");
  for (let i = 1; i <= n; i++) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
  }
}
fibonacci(5); 