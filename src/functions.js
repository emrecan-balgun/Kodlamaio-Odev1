// // Asal sayı bulma fonksiyonu
// function isPrime(num) {
//     let counter = 0;
//     for(let i = 2; i < num; i++){
//         if(num % i == 0) {
//             counter++;
//         }
//     }
//     if(counter == 0) {
//         console.log(num + " asaldir");
//     } else {
//         console.log(num + " asal degildir");
//     }
// }

// // Sayıları parametre olarak atama ve kontrol etme
// function checkNumber(...numbers) {
//     for(let i = 0; i < numbers.length; i++) {
//         isPrime(numbers[i])
//     }
// }

// // Konsolda test etme kısmı
// checkNumber(11,42,56,21);

// function isFriendNumbers(num1, num2) {
//     let sum1 = 0;
//     let sum2 = 0;

//     for(let i = 1; i < num1; i++) {
//         if(num1 % i == 0)
//             sum1 += i;
//     }

//     for(let j = 1; j < num2; j++) {
//         if(num2 % j == 0)
//             sum2 += j;
//     }

//     if(num1 == sum2 && num2 == sum1) {
//         console.log(num1 + "," + num2 + " arkadas sayidir")
//     }
//     else {
//         console.log(num1 + "," + num2 + " arkadas sayi degildir")
//     }
// }

// isFriendNumbers(220,284);

// // Mükemmel sayı fonksiyonu
// function isPerfectNumber(num) {
//     let sum = 0;
//     for(let i = 1; i < num; i++) {
//         if(num % i == 0)
//             sum += i;
//     }
//     if(num == sum) {
//         console.log(num + " mukemmel sayidir")
//     }
// }

// // 1000'e kadar olan mukemmel sayıları kontrol için fonksiyona yolladık
// for(let i = 1; i <= 1000; i++) {
//     isPerfectNumber(i);
// }


// // Asal kontrol fonksiyonu
// function isPrime1000(num) {
//     let counter = 0;
//     for(let i = 2; i < num; i++){
//         if(num % i == 0) {
//             counter++;
//         }
//     }
//     if(counter == 0) {
//         console.log(num + " sayisi asaldir");
//     }
// }

// // 1000'e kadar olan sayıları kontrol için fonksiyona yolladık
// for(let i = 1; i <= 1000; i++) {
//     isPrime1000(i);
// }