// // // function showFirstMessage(text) {
// // //     alert(text);
// // //     let num = 20;
// // // }

// // // showFirstMessage("Lol");


// // // let calc = function(a,b){
// // //     return (a+b);
// // // }

// // let calc = (a, b) => a + b;



// // console.log(calc(5, 7));


// // function returnVar() {
// //     let num = 50;
// //     return num;
// // }

// // let anotherNum = returnVar();

// // console.log(anotherNum);

// // let str = "test";
// // console.log(str.length);

// // console.log(str.toLocaleUpperCase());
// // console.log(str.toLowerCase());

// // let twelve = "12.2px";

// // // console.log(Math.round(twelve));

// // console.log(parseInt(twelve));
// // console.log(parseFloat(twelve));

// // function first() {
// //     setTimeout(() => {
// //         console.log(1);
// //     }, 500);
// // }

// // function second() {
// //     console.log(2);
// // }

// // first();
// // second();

// // function lernJS(lang, callback) {
// //     console.log("Я учу " + lang);
// //     callback();
// // }

// // function done() {
// //     console.log("Я прошел 3 урок")
// // }
// // lernJS("javascript", done);


// // let options = {
// //     width: 1024,
// //     height: 1024,
// //     name: "test"
// // };

// // console.log(options.name);

// // options.bool = false;
// // options.colors = {
// //     border: "black",
// //     bg: "red"
// // };
// // delete options.bool;

// // console.log(options);

// // for (let key in options) {
// //     console.log('Свойствл ' + key + " имеет значение " + options[key]);
// // }

// // console.log(Object.keys(options).length);

// // var ourPlanetName = "Земля"; //планета
// // var userName = "Петя"; //посетитель
// // var textList = {
// //     [ourPlanetName]: userName
// // };

// // console.log(textList);
// // console.log(1 / 0); // Infinity
// // console.log("Строка" * 2); //NaN ошибка вычисления
// // console.log(typeof userName);

// // var score = 0;

// // function scoreSumm(x, y) {
// //     if (x > y) {
// //         score += 3;
// //     } else {
// //         if (x < y) {
// //             score += 0;
// //         } else {
// //             if (x == y) {
// //                 score += 1;
// //             }
// //         }
// //     }
// // }

// // for (i = 0; i < 10; i++) {
// //     var ranX = Math.random();
// //     var ranY = Math.random();
// //     var x = 0;
// //     var y = 0;
// //     if (ranX < 0.3) {
// //         x = 1;
// //     } else {
// //         if (ranX > 0.3 && ranX < 0.5) {
// //             x = 2
// //         } else {
// //             if (ranX > 0.5 && ranX < 0.75) {
// //                 x = 3;
// //             } else {
// //                 x = 0;
// //             }
// //         }

// //     }
// //     if (ranY < 0.3) {
// //         y = 1;
// //     } else {
// //         if (ranY > 0.3 && ranY < 0.5) {
// //             y = 2
// //         } else {
// //             if (ranY > 0.5 && ranY < 0.75) {
// //                 y = 3;
// //             } else {
// //                 y = 0;
// //             }
// //         }

// //     }

// //     scoreSumm(x, y);
// //     console.log(x, y, ' очки ', score);
// // }
// // console.log(score);

// // let arr = ["first", 2, "three", 4, 5];

// // // for(i=0;i<arr.length; i++){
// // //     if(arr[i]===undefined){

// // //     }else{
// // //         console.log(arr[i]);
// // //     }


// // // }

// // // arr.forEach(function(item, i, mass){
// // //     console.log(i +": "+item+ "(массив: )" + mass+")");
// // // });

// // // let masss =["1:0","3:2","2:1","0:1","1:3"];

// // // for (let key of masss){
// // //     console.log(key);
// // // }

// // let ans = prompt("", "");
// // let mass = [];
// // mass = ans.split(',');
// // console.log(mass);

// // let arr=["sads","sgtr","asdafa","123123"];
// // let a =arr.join(': ');
// // console.log(a);

// let arr = [1, 12, 43, 32, 11];
// let a = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }
// console.log(arr);

// let soldier = {
//     health: 400,
//     armor: 100
// };

// let jhon = {
//     health: 100
// };

// jhon.__proto__ = soldier;

// console.log(jhon);
// console.log(jhon.armor);

// 1)

// console.log("fsdf" + "dfsf");




// console.log(text);
// console.log(div);

// var circul = document.querySelectorAll("div");

// circul[0].innerHTML = "hello";

//circul[0].style.backgroundColor = "red";
// circul[0].style.width = "100px";
// circul[0].style.height = "100px";
// circul[0].style.borderRadius = "50%";
// //circul[1].style.backgroundColor = "yellow";
// circul[1].style.width = "100px";
// circul[1].style.height = "100px";
// circul[1].style.borderRadius = "50%";
// //circul[2].style.backgroundColor = "green";
// circul[2].style.width = "100px";
// circul[2].style.height = "100px";
// circul[2].style.borderRadius = "50%";
// console.log(circul);

// var stepColor = 0;

// function changeNext() {
//     if (stepColor === 0) {
//         circul[0].style.backgroundColor = "grey";
//         circul[1].style.backgroundColor = "grey";
//         circul[2].style.backgroundColor = "grey";
//         stepColor += 1;

//     } else {
//         if (stepColor === 1) {
//             circul[0].style.backgroundColor = "grey";
//             circul[1].style.backgroundColor = "yellow";
//             circul[2].style.backgroundColor = "grey";
//             stepColor += 1;
//         } else {
//             if (stepColor === 2) {
//                 circul[0].style.backgroundColor = "red";
//                 circul[1].style.backgroundColor = "yellow";
//                 circul[2].style.backgroundColor = "grey";
//                 stepColor += 1;
//             } else {
//                 if (stepColor === 3) {
//                     circul[0].style.backgroundColor = "red";
//                     circul[1].style.backgroundColor = "grey";
//                     circul[2].style.backgroundColor = "grey";
//                     stepColor += 1;
//                 } else {
//                     if (stepColor === 4) {
//                         circul[0].style.backgroundColor = "red";
//                         circul[1].style.backgroundColor = "yellow";
//                         circul[2].style.backgroundColor = "grey";
//                         stepColor += 1;
//                     } else {
//                         if (stepColor === 5) {
//                             circul[0].style.backgroundColor = "grey";
//                             circul[1].style.backgroundColor = "yellow";
//                             circul[2].style.backgroundColor = "grey";
//                             stepColor += 1;
//                         } else {
//                             if (stepColor === 6) {
//                                 circul[0].style.backgroundColor = "grey";
//                                 circul[1].style.backgroundColor = "yellow";
//                                 circul[2].style.backgroundColor = "green";
//                                 stepColor += 1;
//                             } else {
//                                 if (stepColor === 7) {
//                                     circul[0].style.backgroundColor = "grey";
//                                     circul[1].style.backgroundColor = "grey";
//                                     circul[2].style.backgroundColor = "green";
//                                     stepColor = 0;
//                                 }

//                             }


//                         }


//                     }


//                 }


//             }

//         }



//     }




// }



// document.getElementById("divi").style.color = "red";
// document.getElementById("divi").style.borderRadius = "50%";
// document.getElementById("divi").style.width = "100px";
// document.getElementById("divi").style.height = "100px";
"use strict"
// let div = document.createElement("div"),
//     text = document.createTextNode("Here text"),
//     wrapper = document.querySelector(".wrapper"),
//     heart = document.querySelectorAll(".heart");
// div.classList.add("black");

// // document.body.appendChild(div);
// wrapper.appendChild(div);
// div.textContent = "hellow"
// wrapper.insertBefore(div, heart[1]);
// wrapper.removeChild(heart[0]);
// wrapper.replaceChild(div, heart[1]);
// console.log(div);

let btn = document.querySelectorAll("button"),
    wrap = document.querySelector("wrapper"),
    link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert("First button");
// }

// btn[0].addEventListener('click', function(event) {
//     console.log("TryCatch " + event.type + " on element " +
//         event.target);
// });


link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("TryCatch " + event.type + " on element " +
        event.target);

});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log("true exit");
    });
});

// btn[0].addEventListener("mouseenter", function() {
//     alert("naveli na knopku");
// })