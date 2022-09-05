let button = document.querySelectorAll(".numbers")
let image = document.querySelectorAll(".image")
let stars = document.querySelector(".stars")
let rating = document.getElementById("rating")
let content = "";

console.log(rating);
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        if (stars.innerHTML !== '') {
            content = "";
        } 
        for (let e = 0; e <= button[i].innerHTML-1; e++) {
            content += `<img class="image" src="images/icon-star.svg">`
            stars.innerHTML = content;
        }
            localStorage.setItem("rating", button[i].innerHTML)

            
    })    
}



if (localStorage.getItem("rating") !== null) {
    let lsRating = localStorage.getItem("rating");
    if (rating !== null) {
        rating.innerHTML = lsRating;
    }
}