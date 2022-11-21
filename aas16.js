// let suma = (n1, n2) => {
//   let n1 = parseInt(document.getElementById("n1").value);
//   let n2 = parseInt(document.getElementById("n1").value);
//   return n1 + n2;
// };

function calcular() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  var suma = n1 + n2;

  document.getElementById("resultado").innerHTML = suma;
}
