let moviesContainer = document.querySelector("movies-container");

window.addEventListener("DOMContentLoaded", function() {
    function renderMovies(movieArray) {
        let movieHtmlArray = movieArray.map(function(currentMovie) {
            return `<div>
                <h5>${currentMovie.Title}</h5>
            </div>`
        });
        return movieHtmlArray.join("");
    };
    moviesContainer.innerHTML = renderMovies(movieData);
});
