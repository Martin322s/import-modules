import "../scss/app.scss";
import * as R from 'ramda';

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const plucked = R.pluck('class', arrayToPluck);
  const articles = document.querySelectorAll("article");

  let count = 0;
  for (let article of articles) {
    article.classList.add(plucked[count++]);
  }
});
