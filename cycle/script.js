// var i = 0;
// while (i < 5) {
//   // var arr = [a, b, c, d, e];
//     var a = prompt('name1', name);
//     i++;
//
//     var b = prompt('name2', name);
//     i++;
//
//     var c = prompt('name3', name);
//     i++;
//
//     var d = prompt('name4', name);
//     i++;
//
//     var e = prompt('name5', name);
//     i++;
//
//     var arr = [a, b, c, d, e];
//
//     console.log(arr);
//
//     var n = prompt('Enter your name', name);
//     console.log(n);
//
//       if (a == n) {
//         alert ('Olexandr, you in system');
//       } else {
//         alert('Error');
//       }
//
// }

var arr = fillArray();
    var userName = prompt('Введіть імя користувача');
    checkAccess(arr, userName);

    function  fillArray() {
      var arr = [];
      for (var i = 0; i < 5; i++) {
        arr.push(prompt('Введіть ' + (i+1) + '-е імя'));
      }
      return arr;
    }

    function checkAccess(arr, userName) {
      var rightName = false;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == userName) {
          rightName = true;
          alert(userName + ', ви успішно ввійшли');
          break;
        }
      }
      if (!rightName) {
        alert('Вказаного користувача не існує!');
      }
    }
