import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();
galleryItems.forEach((item, index) => {
  const image = document.createElement("li");
  image.classList.add("gallery__item");
  image.insertAdjacentHTML(
    "afterbegin",
    `<a class="gallery__link" href=${item.original}>
    <img id=${index} class="gallery__image" src=${item.preview} alt=${item.description} title=${item.description} />
    </a>`
  );
  fragment.appendChild(image);
});

gallery.append(fragment);

const images = document.querySelectorAll(".gallery__item");
let galleryBox = new SimpleLightbox(".gallery a", { captionDelay: 250 });

images.addEventListener("click", () => {
  galleryBox.on("show.simplelightbox", function () {
    console.log(3);
  });

  galleryBox.on("error.simplelightbox", function (e) {});
});
