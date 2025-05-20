//////////////




//////////KATAS

//1
// Description
// Your job is to write a simple password validation function, as seen on many websites.

// The rules for a valid password are as follows:

// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// Your function takes a string argument and returns whether it is a valid password, as a boolean.

// Examples:
// "Abcd1234" ===> true
// "Abcd123" ===> false
// "abcd1234" ===> false
// "AbcdefGhijKlmnopQRsTuvwxyZ1234567890" ===> true
// "ABCD1234" ===> false
// "Ab1!@#$%^&*()-_+={}[]|\:;?/>.<," ===> true;
// "!@#$%^&*()-_+={}[]|\:;?/>.<," ===> false;

// function password(str) {
//     //validate password
// }

// Descripción:
// Existe una secuencia de números que sigue el patrón

//           1
//          11
//          21
//         1211
//        111221
//        312211
//       13112221
//      1113213211
//           .
//           .
//           .
// Comenzando con "1" las siguientes líneas se producen diciendo lo que ves", de modo que la línea dos es "uno uno", la línea tres es "dos uno(s)", la línea cuatro es "uno dos uno uno".

// Escriba una función que, dado un valor inicial como una cadena, devuelva la secuencia adecuada como una lista. El valor inicial puede tener cualquier número de dígitos. La condición de terminación está definida por el número máximo de iteraciones, que también se proporciona como argumento.

// function lookAndSay(data,len){
//   // Populate result list with the look and say numbers
//   // data:  starting number set
//   // len:   sequence length
// }




let test = "aB23"
// let re = /^[A-Za-z0-9]+$/.test(test);
// let so = (/[A-Za-z]/.test(test) || /\d/.test(test));
// console.log(re);// true
// console.log(so);// true
// let nu = (test.length > 3 || test.length < 20);
// console.log(nu);// true



  const valid = (/^[A-Za-z0-9]+$/.test) && (/[A-Za-z]/.test || /\d/.test) && (test.length > 3 || test.length < 20);
            console.log(valid);
            if ( valid === true) 
              return valid = "VALID";
            else 
              return valid = "INVALID";
  


    console.log(valid);



   
