let buT = document.getElementById("btn");

let inp = document.querySelector("input")

let counter = 0;

let butTwo = document.getElementById("btn2");


buT.addEventListener("click", function () {

    console.log(`${inp.value}`)

    counter++
    document.getElementById("demo").innerHTML += `
     <li id="${counter}">${inp.value}<button onclick="this.parentElement.style.display = 'none';"
     class="btn3">Delete</button></li>
 `
    if (inp.value) {
        inp.value = ""
    }


});


butTwo.addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "";
})




