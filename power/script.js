var a = prompt('Введіть число', 'число');
var b = prompt('Введіть степінь', 'степінь');

function pow(a, b) {
  var number = Math.abs(b);
    if (b==0) {
      return 1;
    }

  var c = a;
    for (var i = 1; i < number; i++) {
      c *= a;
  }

  if (b < 0) {
    return 1/c;
  } else if (b > 0) {
    return c;
  }
}

console.log('Result = ', pow(a, b));
