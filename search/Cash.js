function cashing(func) {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      console.log('received from cash: ', cash[n]);
      return cash[n];
    }

    let result = func(n);
    console.log('result: ', result);
    cash[n] = result;
    return result;
  };
}

function factorial(n) {
  let result = 1;
  while (n !== 1) {
    result *= n;
    n--;
  }
  return result;
}

const cashFactorial = cashing(factorial);

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(5);
