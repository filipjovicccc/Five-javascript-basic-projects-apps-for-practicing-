

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
    <p>Note:<p>
    <p>${myString}</p>
   <button type="button" class="btn btn-primary">View Full note</button>
  <button onclick="this.parentElement.style.display = 'none';" >&times;</button>
     </div>
     
   `
    let btnSecond = document.querySelectorAll(".btn-primary")

    btnSecond.forEach(button => {                            //forEch obavezno kad ima vise dugmeta
        button.addEventListener("click", moreNote)
    })

    let overlay = document.getElementById("overlay")


}

function moreNote(event) {

    let wraps = document.querySelector(".wraps")
    if (wraps == null) return
    wraps.classList.add("active")
    overlay.classList.add("active")

    let btnThree = document.querySelector('.close-button');
    console.log(btnThree)
    btnThree.addEventListener("click", closeNote)
}

function closeNote(event) {

    let wraps = document.querySelector(".wraps")
    if (wraps == null) return
    wraps.classList.remove("active")
    overlay.classList.remove("active")

}