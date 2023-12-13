// api key from TMDB

const api = "api_key=00465655020f5b458ed3058574c12834";
// base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w185"; 

// requests for movies data
const requests = {
fetchTrending: `${base_url}/trending/all/week?${api}&lanuage=en-US`,
fetchNetflixOriginal: `${base_url}/discover/tv?${api}&with_networks=213`,
fetchAdventureMovies: `${base_url}/discover/movies?${api}&with_genres=12`,
fetchHorrorMovies: `${base_url}/discover/movies?${api}&with_genres=27`,
fetchFantasyMovies: `${base_url}/discover/movies?${api}&with_genres=14`,
fetchTrillerMovies: `${base_url}/discover/movies?${api}&with_genres=53`,
fetchComedyMovies: `${base_url}/discover/movies?${api}&with_genres=35`,
fetchActionMovies: `${base_url}/discover/movies?${api}&with_genres=28`,
fetchAnimationMovies: `${base_url}/discover/movies?${api}&with_genres=16`,
fetchDocumentaries: `${base_url}/discover/movies?${api}&with_genres=99`,
};
// used to truncate the string
function truncate(str, n){
    return str?.length > n? str.substr(0,n-1) + "..." : str;
}
// banner
fetch(requests.fetchNetflixOriginal)
    .then((res) => res.json())
    .then((data) => {
    // every refreash the movie will be change
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
 
        console.log(data);
        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner__title");
        var banner__desc = document.getElementById("banner__description");

        banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
        banner__desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
});

// movie rows
fetch(requests.fetchNetflixOriginal)
    .then((res) => res.json())
    
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        console.log(data);
        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");
        
        title.className = "row__title";
        title.innerText = "NETFLIX ORIGINALS";

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            var s = movie.name.replace(/\s+/g, "");

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });  


    // top rated
    fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        console.log(data);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Top Rated";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.classsName = "row__posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";
            var s2 = movie.id;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });
// adventure
fetch(requests.fetchAdventureMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
         const row = document.createElement("div");
         row.className = "row";
         headrow.appendChild(row);
         console.log(data);
         const title = document.createElement("h2");
         title.className = "row__title";
         title.innerText = "Adventure Movies";
         row.appendChild(title);

         const row_posters = document.createElement("div");
         row_posters.classsName = "row__posters";
         row.appendChild(row_posters);

         data.results.forEach((movie) => {
             console.log(movie);
             const poster = document.createElement("img");
             poster.className = "row__poster";
             var s2 = movie.id;
             poster.src = img_url + movie.backdrop_path;
             row_posters.appendChild(poster);
         });
     });

// // Horror Movies

// fetch(requests.fetchHorrorMovies)
//     .then((res) => res.json())
//     .then((data) => {
//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");
//         row.className = "row";
//         headrow.appendChild(row);
//         console.log(data);
//         const title = document.createElement("h2");
//         title.className = "row__title";
//         title.innerText = "Horror Movies";
//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.classsName = "row__posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {
//             console.log(movie);
//             const poster = document.createElement("img");
//             poster.className = "row__poster";
//             var s2 = movie.id;
//             poster.src = img_url + movie.backdrop_path;
//             row_posters.appendChild(poster);
//         });
//     });

// // Fantasy Movies

//  fetch(requests.fetchFantasyMovies)
//      .then((res) => res.json())
//      .then((data) => {
//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");
//          row.className = "row";
//          headrow.appendChild(row);

//          const title = document.createElement("h2");
//          title.className = "row__title";
//          title.innerText = "Fantasy Movies";
//          row.appendChild(title);

//          const row_posters = document.createElement("div");
//          row_posters.classsName = "row__posters";
//          row.appendChild(row_posters);

//          data.results.forEach((movie) => {
//             console.log(movie);
//             const poster = document.createElement("img");
//             poster.className = "row__poster";
//             var s2 = movie.id;
//             poster.src = img_url + movie.backdrop_path;
//             row_posters.appendChild(poster);
//         });
//     });

    // Triller Movies

//     fetch(requests.fetchTrillerMovies)
//     .then((res) => res.json())
//     .then((data) => {
//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");
//         row.className = "row";
//         headrow.appendChild(row);
//         console.log(data);
//         const title = document.createElement("h2");
//         title.className = "row__title";
//         title.innerText = "Triller Movies";
//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.classsName = "row__posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {
//             console.log(movie);
//             const poster = document.createElement("img");
//             poster.className = "row__poster";
//             var s2 = movie.id;
//             poster.src = img_url + movie.backdrop_path;
//             row_posters.appendChild(poster);
//         });
//     });

//     //Comedy Movies

//     fetch(requests.fetchComedyMovies)
//     .then((res) => res.json())
//     .then((data) => {
//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");
//         row.className = "row";
//         headrow.appendChild(row);
//         console.log(data);
//         const title = document.createElement("h2");
//         title.className = "row__title";
//         title.innerText = "Comedy Movies";
//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.classsName = "row__posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {
//             console.log(movie);
//             const poster = document.createElement("img");
//             poster.className = "row__poster";
//             var s2 = movie.id;
//             poster.src = img_url + movie.backdrop_path;
//             row_posters.appendChild(poster);
//         });
//     });
// // Action Movies
// fetch(requests.fetchActionMovies)
//     .then((res) => res.json())
//     .then((data) => {
//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");
//         row.className = "row";
//         headrow.appendChild(row);
//         console.log(data);
//         const title = document.createElement("h2");
//         title.className = "row__title";
//         title.innerText = "Action Movies";
//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.classsName = "row__posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {
//             console.log(movie);
//             const poster = document.createElement("img");
//             poster.className = "row__poster";
//             var s2 = movie.id;
//             poster.src = img_url + movie.backdrop_path;
//             row_posters.appendChild(poster);
//         });
//     });

// // Animation movies

// fetch(requests.fetchAnimationMovies)
//     .then((res) => res.json())
//     .then((data) => {
//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");
//         row.className = "row";
//         headrow.appendChild(row);

//         const title = document.createElement("h2");
//         title.className = "row__title";
//         title.innerText = "Animation Movies";
//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.classsName = "row__posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {
//             console.log(movie);
//             const poster = document.createElement("img");
//             poster.className = "row__poster";
//             var s2 = movie.id;
//             poster.src = img_url + movie.backdrop_path;
//             row_posters.appendChild(poster);
//         });
//     });

// // Documentaries

// fetch(requests.fetchDocumentaries)
//     .then((res) => res.json())
//     .then((data) => {
//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");
//         row.className = "row";
//         headrow.appendChild(row);

//         const title = document.createElement("h2");
//         title.className = "row__title";
//         title.innerText = "Documnetaries";
//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.classsName = "row__posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {
//             console.log(movie);
//             const poster = document.createElement("img");
//             poster.className = "row__poster";
//             var s2 = movie.id;
//             poster.src = img_url + movie.backdrop_path;
//             row_posters.appendChild(poster);
//         });
//     });