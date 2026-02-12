function sumar(a, b) {
  return a + b
}
console.log(sumar(7,8))





function imprimirTexto(texto) {
  console.log(texto);
}
  
imprimirTexto("maicol")



function mensaje(separar)
{
    let cortar= separar.split(" ")
    for (let i = 0; i < cortar.length; i++) {
        console.log(cortar[i])
        
    }
}

mensaje("hoy aprendi una funcion")
