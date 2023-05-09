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
    <img id=${index} class="gallery__image" src=${item.preview}  data-source=${item.original}" alt=${item.description}/>
    </a>`
  );
  fragment.appendChild(image);
});

gallery.append(fragment);

const images = document.querySelectorAll(".gallery__item");
images.forEach((item) => {
  item.addEventListener("click", () => {
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src=${
      galleryItems[item.firstElementChild.firstElementChild.id].original
    } alt=${
      galleryItems[item.firstElementChild.firstElementChild.id].original
        .description
    }/>
    </div>
`);

    instance.show();
  });
});
