/* 
문제 2
*****
****
***
**
* 
*/
// let string = "";

// for (let i = 0; i < 5; i++) {
//   for (let j = i; j < 5; j++) {
//     string += "*";
//   }
//   string += "\n";
// }

/* 
문제 3
  *
 ***
*****
 ***
  *
*/
// let star = "";

// for (let i = 1; i < 5; i++) {
//   for (let j = 0; j <= i + 1; j++) {
//     star += "*";
//   }
//   star += "\n";
// }

// for (let star = -4; star < 5; star += 2) {
//   console.log(" ".repeat(Math.abs(star / 2)) + "*".repeat(5 - Math.abs(star)));
// }

// let string = "";
// let a = 2;
// let b = 2;
// for (let a = 0; a < 5; a++) {
//   string += " ";
//   for (let j = 0; j < 5; j++) {
//     if (a === j) {
//       string += "*";
//     }
//     a++;
//   }
//   string += "\n";
// }

// let string = "";

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }

// 첫번째 줄
// 6번 쉬고 1번 찍고 6번 쉰다
// 두번째줄
// 5번 쉬고 1번 찍고 1번 쉬고 1번 찍고 5번 쉰다
// 세번째줄
// 4번 쉬고 1번 찍고 3번 쉬고 1번 찍고 4번 쉰다

// let star = "";

// for (let i = 0; i < 5; i++) {
//   debugger;
//   for (let j = 5; j > i; j--) {
//     star += " ";
//   }
//   for (let k = 0; k <= i * 2 - 1; k++) {
//     if (k === 1 || k === i * 2 - 1) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   star += "\n";
// }

// let string = "";
// let length = 8;

// for (let i = 0; i <= length; i++) {
//   debugger;
//   for (let j = 0; j <= length; j++) {
//     string +=
//       j == Math.abs(Math.floor(length / 2) - i) ||
//       j == length - Math.abs(Math.floor(length / 2) - i) // 1번식 || 2번식  ==> 1번식이 true가 아닐시에는 2번식을 반환한다.
//         ? "*"
//         : " ";
//   }
//   string += "\n";
// }

// console.log(string);

//1번 (위에 별)

// let string = "";
// let length = 9;

// for (let i = 0; i <= 4; i++) {
//   for (let j = 0; j <= length; j++) {
//     string += j >= Math.abs(Math.floor(i - length)) || j <= i ? "*" : " ";
//   }
//   string += "\n";
// }

//2번(아래 별)

// let string2 = "";

// for (let i = 0; i <= 4; i++) {
//   for (let j = 0; j <= length; j++) {
//     string2 += j >= 5 + i || j < 5 - i ? "*" : " ";
//   }
//   string2 += "\n";
// }
// console.log(string + string2);

//문제 빵구 삼각형

// length = 5;
// string = "";

// for (let i = 1; i <= length; i++) {
//   for (let j = 0; j <= length; j++) {
//     if (i === 1 && j === 0) {
//       string += "******";
//     }
//     if (i > 1) {
//       string += j === 5 - i || j == 0 ? "*" : " ";
//     }
//   }
//   string += "\n";
// }

// console.log(string);

// 다이아몬드 3번

let length = 4;
let string = "";

for (let i = 0; i <= length; i++) {
  for (let j = 0; j <= 9; j++) {
    string += j >= 5 + i || j <= 4 - i ? "*" : " ";
  }
  string += "\n";
}

let string2 = "";

for (let i = 0; i <= length; i++) {
  for (let j = 0; j <= 9; j++) {
    string2 += j <= i || j >= 9 - i ? "*" : " ";
  }
  string2 += "\n";
}

console.log(string + string2);
