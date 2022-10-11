export default class ImageCarousel {
  constructor(imageElements) {
    this.imageElements = imageElements;
    this.numberOfImages = imageElements.length;
    this.currentImageIndex = 0;
  }

  setActiveImage(imageNumber) {
    this.imageElements.forEach((image) => {
      if (image.dataset.imgnum === String(imageNumber)) {
        image.classList.remove("hidden");
      } else if (
        image.dataset.imgnum !== String(imageNumber) &&
        !image.classList.contains("hidden")
      ) {
        image.classList.add("hidden");
      }
    });
  }

  changeImage() {
    if (this.currentImageIndex === this.imageElements.length - 1) {
      this.currentImageIndex = 0;
      this.setActiveImage(this.currentImageIndex);
    } else {
      this.currentImageIndex++;
      this.setActiveImage(this.currentImageIndex);
    }
  }
}
