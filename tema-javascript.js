function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
factorial(6);

function gcd(a, b) {
    if (b == 0)
      return a;
    else
      return gcd(b, (a % b));
  }
  gcd(1028, 124);

