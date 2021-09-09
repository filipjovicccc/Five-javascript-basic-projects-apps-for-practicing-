// let addExpanse = document.querySelector(".btn-success");

let Name = document.getElementById("name")

let date = document.getElementById("date")


let amount = document.getElementById("amount")

let total = document.getElementById("total")

let bb = document.createElement("button")
let table = document.querySelector("table")


// addExpanse.addEventListener("click", function (event) {

//   table.innerHTML += `  <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>${Name.value}</td>
//       <td>${date.value}</td>
//       <td id="special">${amount.value} </td>

//       <td><button onclick="this.parentElement.parentElement.innerHTML = '';"
//       "></button></td>
//       </tr>
//     </tbody>
//      `


// })
if (document.readyState == "loading") {

  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}
function init() {
  let addExpanse = document.querySelector(".btn-success");
  // console.log(addExpanse)


  addExpanse.addEventListener("click", addArticle)


}

function addArticle(event) {
  let but = event.target;
  table.innerHTML += `  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${Name.value}</td>
      <td>${date.value}</td>
      <td id="special">${amount.value} </td>
      <td><span class="cart-quantity cart-header cart-column">pera</span>

      <td><button onclick="this.parentElement.parentElement.innerHTML = '';"
      "></button></td>
      </tr>
    </tbody>
     `

  special()


}

function special() {
  let special = document.getElementById("special")
  let first = special.innerText

  console.log(amount.value)

  let counter = 0;
  for (let i = 0; i < special.innerText.length; i++) {

    let first = special.innerText

    let total = parseFloat(first) + parseFloat(first);
    console.log(total)



  }


  // for (let i = 0; i < special.length; i++){

  // }
}





















