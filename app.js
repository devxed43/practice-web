// Each Image is the item
const items = document.querySelectorAll(".item");

// for each Image/item we add the following when we click
items.forEach((item) => {
  item.title = "Click to enlarge";
  item.addEventListener("click", () => {
    // imgSrc holds each item clicked
    // the image inside that div, and it's src so it displays that specific image
    const imgSrc = item.querySelector("img").src;

    // modal element
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // image element that goes inside modal, attach the attributes
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.alt = "Modal Image";

    // add the image w its data to the modal div
    modal.appendChild(imgElement);

    // add the moda that has the image now to the body
    document.body.appendChild(modal);

    // add the class that reveals the photo
    setTimeout(() => {
      imgElement.classList.add("reveal");
    }, 10);

    // remove reveal when we click and then quickly active modal remove
    modal.addEventListener("click", () => {
      imgElement.classList.remove("reveal");
      setTimeout(() => {
        modal.remove();
      }, 350);
    });
  });
});
