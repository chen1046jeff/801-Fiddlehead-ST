// List of all your images inside the "image" folder
const images = [
"image/1.jpeg",
"image/2.jpeg",
"image/3.jpeg",
"image/4.jpeg",
"image/5.jpeg",
"image/6.jpeg",
"image/7.jpeg",
"image/8.jpeg",
"image/9.jpeg",
"image/10.jpeg",
"image/11.jpeg",
"image/12.jpeg",
"image/13.jpeg",
"image/14.jpeg",
"image/15.jpeg",
"image/16.jpeg",
"image/17.jpeg",
"image/18.jpeg",
"image/19.jpeg",
"image/20.jpeg",
"image/21.jpeg",
"image/22.jpeg",
"image/23.jpeg",
"image/24.jpeg",
"image/25.jpeg",
"image/26.jpeg",
"image/27.jpeg",
"image/28.jpeg",
"image/29.jpeg",
"image/30.jpeg",
"image/31.jpeg",
"image/32.jpeg",
"image/33.jpeg",
"image/34.jpeg",
"image/35.jpeg",
"image/36.jpeg",
"image/37.jpeg",
"image/38.jpeg",
];

// Select the gallery area
const gallery = document.getElementById("gallery");

// Create the gallery thumbnails
images.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;              // ← correct path
  img.alt = `Image ${index+1}`;
  img.dataset.title = `Image ${index+1}`;
  gallery.appendChild(img);

  // When thumbnail clicked → open modal
  img.addEventListener("click", () => {
    modalImg.src = src;
    modalTitle.textContent = img.dataset.title;
    modal.classList.remove("hidden");
  });
});

// Modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.querySelector(".close");

// Close modal on button click
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
