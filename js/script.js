const card_container_1 = document.querySelector(".card-container-1");
const card_container_2 = document.querySelector(".card-container-2");
const user_score = document.querySelector(".user-score");
const rating_item = document.querySelectorAll(".rating-item");
let stars_score = 5;
const sumbit_btn = document.querySelector(".sumbit-btn");

function onSubmit() {
  card_container_1.classList.add("hidden");
  card_container_2.classList.remove("hidden");
  user_score.innerText = stars_score;
}

function onRatingClick(event) {
  rating_item.forEach((item) => {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
  stars_score = event.target.innerText;
}

sumbit_btn.addEventListener("click", onSubmit);
rating_item.forEach((item) => {
  item.addEventListener("click", onRatingClick);
});
