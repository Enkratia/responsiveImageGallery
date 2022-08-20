const search = document.querySelector(".search-box input"),
  images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    let searchValue = search.value.toLowerCase();

    images.forEach(image => {
      if (searchValue === image.dataset.name) {
        return image.style.display = "block";
      }
      image.style.display = "none";
    })
  }

})

search.addEventListener("keyup", () => {
  if (search.value != "") return;

  images.forEach(image => {
    image.style.display = "block";
  })
})