

function init() {

    let btn = document.querySelector(".btn-success")

    btn.addEventListener("click", addArticle)
}

init()

let btn = document.querySelector(".btn-success")

function addArticle(event) {
    let btn = event.target

    let stu = document.getElementById("name")

    let nmu = (stu.value)

    myString = nmu.replace(/^(.{25}[^\s]*).*/, "$1")

    let section = document.querySelector(".section");

    section.innerHTML += `

    <div class="small-div">
    <h4>Note:<h4>
     <p>${myString}</p>
 <button type="button" class="btn btn-primary">View Full note</button>
     </div>
   `
    let btnSecond = document.querySelector(".btn-primary")
    console.log(btnSecond)

    btnSecond.addEventListener("click", moreNote)
}

function moreNote(event) {

}

