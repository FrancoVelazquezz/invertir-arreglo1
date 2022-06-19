import "./styles.css";

function invertirArreglo(dimension:number) {
  //let arregloInvertido:number = 0
  let arreglo: number[] = new Array(dimension);
  for (let i = 0; i < dimension; i++) {
  let x: number = Number(
    prompt(`Ingrese ${dimension} numeros: `)
  );
  arreglo[i] = x;
  //let arregloInvertido =  arreglo.reverse()
  }
  console.log('Arreglo Inicial: ' + arreglo)
  console.log('Arreglo Invertido: ' + arreglo.reverse())
}

invertirArreglo(5)

