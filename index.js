const moviesContainer = document.querySelector(".movies-container");
const myForm = document.querySelector("#search-form");

const renderMovies = function (movieArray) {
    let movieHtmlArray = movieArray.map(function (currentMovie) {
        return `<div class="movie col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div class="card" style="width: 100%;">
                        <img src=${currentMovie.Poster} id="0" class="card-img-top" alt="${currentMovie.Title}">
                        <div class="card-body">
                            <h5 class="card-title">${currentMovie.Title}</h5>
                            <p class="card-text">Year Released: ${currentMovie.Year}</p>
                            <button  class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add Movie</button>
                        </div>
                    </div>
                </div>`
    });
    return movieHtmlArray.join("");
};

function saveToWatchlist(imdbID) {
    axios.get(`http://www.omdbapi.com/?apikey=b43843a0&i=${imdbID}`)
        .then(response => {
            console.log(response.data.imdbID);
            let movie = response.data;
            let watchlistJSON = localStorage.getItem("watchlist");
            let watchlist = JSON.parse(watchlistJSON);
            if (watchlist === null) {
                watchlist = [];
            };
            watchlist.push(movie);
            watchlistJSON = JSON.stringify(watchlist);
            localStorage.setItem("watchlist", watchlistJSON);
        })
};

window.addEventListener("DOMContentLoaded", function () {
    myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const $searchString = $(".search-bar").val();
        let urlEncodedSearchString = encodeURIComponent($searchString)
        axios.get("http://www.omdbapi.com/?apikey=b43843a0&s=" + urlEncodedSearchString)
            .then(function (response) {
                moviesContainer.innerHTML = renderMovies(response.data.Search);
            })
    })
});





