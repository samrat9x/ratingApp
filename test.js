
const emojis = document.querySelectorAll(".far");
const star = document.querySelectorAll(".fas");
const colorArray = ["red", "orange", "yellow", "lightblue", "lightgreen"];
updateRating(0);
star.forEach((el, index) => {
  el.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  star.forEach((el, idx) => {
    if (idx < index + 1) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
  emojis.forEach((el) => {
    el.style.transform = `translateX(-${index * 50}px)`;
    el.style.color = colorArray[index];
  });
}