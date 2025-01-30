// const numbers = 9876543210;
// const letter = "abcdefghijklmnopqrstuvwxyz";
// const data3 = "!@#$%^&*";
// let inputNumber = 12;
// let password = "";

// function passwordGenerator(inputNumber) {
//   const letter = "AaBbCcDdFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
//   const number = "123456789";
//   const special = "!@#$%^&*";
//   let password = "";

//   for (let i = 0; i < inputNumber; i++) {
//     let letters = Math.floor(Math.random()) * 26;
//     let num = Math.floor(Math.random()) * 10;
//     let spec = Math.floor(Math.random()) * 9;

//     let random = Math.floor(Math.random() * 3);
//     if (random === 1) {
//       password += letter[letters];
//     } else if (random === 2) {
//       password += number[num];
//     } else {
//       password += special[spec];
//     }
//   }

//   return password;
// }

// console.log(passwordGenerator(10));

// // function randomPassword(input) {
// //   const letter = "abcdefghijklmnopqrstuvwxyz";
// //   const upperCase = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
// //   const number = "123456789";
// //   const symbol = "!@#$%^*&";
// //   let input;

// //   let randomNum = Math.floor(Math.random) * number.lenght;
// //   return randomNum;
// // }

// // console.log(randomPassword(10));

// spec (true)
// num (true)
//  (true)

// generate (onClick=(passwords(10, number.checked, num, letters)))

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ";
const number = "123456789";
const symbol = "!@#$%^*&";
let lenght = document.getElementById("length");
let passkeyLength = lenght.value;

function passwordGenerator() {
  let passkey = "";
  const includeLetters = document.getElementById("abc");
  const includeNumbers = document.getElementById("number");
  const includeSymbols = document.getElementById("special");
  let lenght = document.getElementById("length");
  let passkeyLength = lenght.value;

  // console.log(
  //   includeLetters.checked,
  //   includeNumbers.checked,
  //   includeSymbols.checked,
  //   passkeyLength
  // );

  for (let i = 0; i < passkeyLength; i++) {
    let spec = Math.floor(Math.random() * 7);
    let abc = Math.floor(Math.random() * 51);
    let num = Math.floor(Math.random() * 8);

    if (includeSymbols.checked) {
      passkey = passkey += symbol[spec];
    }
    if (includeNumbers.checked) {
      passkey = passkey += number[num];
    }
    if (includeLetters.checked) {
      passkey = passkey += alphabet[abc];
    }
  }
  let lastOutputPass = passkey.slice(0, passkeyLength);

  let output = document.getElementById("output");
  output.value = lastOutputPass;

  console.log(lastOutputPass);
  return lastOutputPass;
}
