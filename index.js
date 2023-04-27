/* toggle functionality - answer button */
const buttonShow = document.querySelector(".answer__toggle-button");
const answer = document.querySelector(".answer__box-hidden");

buttonShow.addEventListener("click", () => {
    answer.classList.toggle("answer-box_visible");

if (buttonShow.textContent === "Show answer") {
    buttonShow.textContent = "Hide answer";
} else {
    buttonShow.textContent = "Show answer";

}
});


