const movieHolder = document.querySelector("#movies-container");

const showMovies = function (movieArray) {
    let showMovieHtmlArray = movieArray.map(function (currentMovie) {
        return `<div class="movie col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div class="card" style="width: 100%;">
                        <img src=${currentMovie.Poster} id="0" class="card-img-top" alt="${currentMovie.Title}">
                        <div class="card-body">
                            <h5 class="card-title">${currentMovie.Title}</h5>
                            <p class="card-text">Year Released: ${currentMovie.Year}</p>
                            <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Remove Movie</a>
                        </div>
                    </div>
                </div>`
    });
    return showMovieHtmlArray.join("");
};

window.addEventListener("DOMContentLoaded", function () {
    const listJSON = localStorage.getItem("watchlist");
    let parseList = JSON.parse(listJSON);
    movieHolder.innerHTML = showMovies(parseList);
});



// function removeFromWatchlist(imdbID) {
//     const movieGone = movieData.find((currentMovie) => {
//         return currentMovie.imdbID == imdbID;
//     });
//     // let watchlistJSON = localStorage.getItem("watchlist");
//     // let list = JSON.parse(watchlistJSON);
//     if (watchlist !== null) {
//         let index = watchlist.indexOf(currentMovie)
//         if (index > -1) {
//             watchlist.splice(index, 1);
//         }
//         listJSON = JSON.stringify(watchlist);
//         localStorage.removeItem("watchlist", index);
//     }
// };