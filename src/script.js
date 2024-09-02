import { getMovieReviewData } from "./data.js";

function init() {
  const movieReviewData = getMovieReviewData();
  printStatics(movieReviewData);
  printMovieReview(movieReviewData);
}

function printStatics(movieReviewData) {
  const flatMoviewReview = movieReviewData.flat(); // Typo here
  const totalMovie = movieReviewData.length;
  const totalRaview = flatMoviewReview.length; // Typo here
  const totalRating = flatMoviewReview.reduce((acc, item) => {
    return acc + item.rating;
  }, 0);
  const avgRating = (totalRating / totalRaview).toFixed(2);

  const totalMovieElement = document.getElementById('tMoviesId');
  addStart(totalMovieElement, totalMovie);

  const totalRatingElement = document.getElementById('tAvgRatingId');
  addStart(totalRatingElement, avgRating);

  const totalReviewsElement = document.getElementById('tReviewsId');
  addStart(totalReviewsElement, totalRaview);

  function addStart(elem, value) {
    const spanElement = document.createElement("span");
    spanElement.classList.add("text-4xl");
    spanElement.innerHTML = value;
    elem.appendChild(spanElement);
  }
}

function printMovieReview(movieReviewData) {
  const flatReviewData = movieReviewData.flat(); // Variable name correction
  const movieListElement = document.querySelector("#movieListId ul"); // Corrected 'UL' to 'ul'

  flatReviewData.map((movie) => { // Keeping the map function as is
    const listElement = document.createElement("li");
    listElement.classList.add("card" ,"shadow-lg","p-2", "my-2");

    const titleElement = document.createElement("p");
    titleElement.classList.add("text-xl", "mb-2");
    titleElement.innerHTML = `${movie.title} - ${movie.rating}`; // Corrected to show title and rating
    listElement.appendChild(titleElement);

    const reviewElement = document.createElement("p");
    reviewElement.classList.add("mb-2", "mx-2");
    reviewElement.innerHTML = movie.content;
    listElement.appendChild(reviewElement);

    const byElement = document.createElement("p");
    byElement.classList.add("mx-2", "mb-2");
    byElement.innerHTML = `By ${movie.by} on ${new Intl.DateTimeFormat('en-IN').format(movie.on)}`;
    listElement.appendChild(byElement);

    movieListElement.appendChild(listElement);
  });
}

init();
































