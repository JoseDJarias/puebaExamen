/* 
Creamos un repositorio
Creamos una rama llamada develop
Creamos una funcion:
- ImprimirNombreEdades
- Recibir 2 argumentos
-Primer argumento :Arreglo de nombres
-Segundo argumento:Arreglo de edades
-Validar que ambos arreglos sean del mismo tamaño
['Pamela', 'Nico', 'Luna'] [31,2,2]
-Imprimir:
Mi nombre es Pamela y tengo 31 años
Mi nombre es Nico y tengo 2 años
Mi nombre es Luna y tengo 2 años

Los arreglos no tienen el mismo tamaño
*/

var ArrayNames =  ['Pamela','Nico', 'Luna'];
var ArrayAges =  [32,2,2];
if (ArrayNames.length === ArrayAges.length) {
    function ImprimirNombreEdades(array1,array2) {
        for (let index = 0; index < 3; index++) {
            mensaje = 'Mi nombres es '+ array1[index] + ' y tengo ' + array2[index] + ' años'
            console.log(mensaje);
        }
    }
    
}
ImprimirNombreEdades(ArrayNames,ArrayAges)