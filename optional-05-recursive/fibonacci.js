function fibonacci(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let fib = fibonacci(n - 1);
  let nextVal = fib.length < 2 ? 1 : fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(nextVal);

  return fib;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
