const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

if(numero1>numero2 && numero1>numero3){
    console.log('numero1 es mayor que numero2 y numero3');
}else if(numero2>numero1 && numero2>numero3){
    console.log('numero2 es mayor que numero1 y numero 3');
}else if(numero3>numero1 && numero3>numero2){
    console.log('numero 3 es mayor que numero1 y numero2');}

    //Otra manera de resolver que encontre en internet

const mayorNumero = Math.max(numero1, numero2, numero3); //Con Math.max() se obtiene el mayor de los numeros
console.log(mayorNumero);

if(numero1<numero2 && numero1<numero3){
    console.log('numero1 es memor que numero2 y numero3');
}else if(numero2<numero1 && numero2<numero3){
    console.log('numero2 es menor que numero1 y numero 3');
}else if(numero3<numero1 && numero3<numero2){
    console.log('numero 3 es menor que numero1 y numero2');}

    //Otra manera de resolver que encontre en internet

const menorNumero = Math.min(numero1, numero2, numero3); //Con Math.min() se obtiene el menor de los numeros
console.log(menorNumero);

//Imprimir en consola si el numero 1 es par o impar
if(numero1 % 2 == 0){
console.log('El numero es par');
    }else{
    console.log('El numero es impar');
}

//Imprimir en consola si el numero 2 es par o impar
if(numero2 % 2 == 0){
console.log('El numero es par');
    }else{
        console.log('El numero es impar');
}
//Imprimir en consola si el numero 3 es par o impar
if(numero3 %2 == 0){
console.log('El numero es par');
    }else{
        console.log('El numero es impar');
}

// Imprimir en consola si el numero 1 es multiplo de 5
if(numero1 % 5 == 0){
    console.log('El numero1 es multiplo de 5');
    }else{
    console.log('El numero1 no es multiplo de 5');
}
// Imprimir en consola si el numero 2 es multiplo de 5
if(numero2 % 5 == 0){
    console.log('El numero2 es multiplo de 5');
    }else{
        console.log('El numero2 no es multiplo de 5');
}
// Imprimir en consola si el numero 3 es multiplo de 5
if(numero3 % 5 == 0){
    console.log('El numero3 es multiplo de 5');
    }else{
        console.log('El numero3 no es multiplo de 5');
}