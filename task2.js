console.log("iniciando task1");

function sum(f) {
  var _result = 0;

  return (function acumulador(f) {
    if (typeof f === "function") {
      return f(_result);
    } else {
      _result = _result + f;
      return acumulador;
    }
  })(f);
}

// Prueba 1
sum(1)(2)((result) => {
  console.log("->", result);
});
// Prueba 2
sum(1)(2)(10)((result) => {
  console.log("->", result);
});
// Prueba 3
sum(1)(2)(3)(4)(5)(6)((result) => {
  console.log("->", result);
});
