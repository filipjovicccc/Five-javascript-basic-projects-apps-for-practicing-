let btn = document.querySelector(".btn-success")

btn.addEventListener("click", function () {


    let inp = document.getElementById("name")
    let str = inp.value

    const countVowels = str => Array.from(str)
        .filter(letter => 'aeiou'.includes(letter)).length;

    alert(`This text have ` + countVowels(str) + ` Vowels`)


})