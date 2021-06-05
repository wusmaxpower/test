// for (let ii = 1; ii <= 5; ii++) {
//   let boxsome = document.getElementById("box" + ii);

//   boxsome.onclick = () => {
//     for (let jj = 1; jj <= 5; jj++)
//       document.getElementById("box" + jj).classList.remove("active");
//     boxsome.classList.add("active");
//   };
// }

let boxes = document.getElementsByClassName("box-att");
let boxesArry = [...boxes];

for (let ii = 0; ii < boxesArry.length; ii++) {
  boxesArry[ii].onclick = () => {
    for (let jj = 0; jj < boxesArry.length; jj++) {
      if (boxesArry[jj].classList.contains("active")) {
        boxesArry[jj].classList.remove("active");
      }
    }
    boxesArry[ii].classList.add("active");
  };
}
