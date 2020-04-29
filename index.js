const moviesContainer = document.querySelector(".movies-container");

window.addEventListener("DOMContentLoaded", function () {
    const renderMovies = function(movieArray) {
        let movieHtmlArray = movieArray.map(function(currentMovie) {
            return `<div>
                <h5>${currentMovie.Title}</h5>
            </div>`
        });
        console.log(movieHtmlArray.join(""));
        return movieHtmlArray.join("");
    };
    const myForm = document.querySelector("#search-form");
    myForm.addEventListener("submit", function(e){
        e.preventDefault();
        const j = renderMovies(movieData);
        moviesContainer.innerHTML = j;
    })
});

console.log(movieData[1]["Poster"]); // works


function cardImgAdded(movieArray) {
    for (let i =0; i < movieArray.length; i++) {
        let imgSrc = movieArray[i]["Poster"];
        let imgTarget = document.getElementsByTagName("img")[i];
        imgTarget.setAttribute("src", imgSrc);
        let titleSrc = movieArray[i]["Title"];
        let titleTarget = document.getElementsByTagName("h5")[i];
        titleTarget.textContent = titleSrc;
        let yearSrc = movieArray[i]["Year"];
        let yearTarget = document.getElementsByTagName("p")[i]
        yearTarget.innerText = `Year Realeased: ${yearSrc}`;
    }
    
};
cardImgAdded(movieData);