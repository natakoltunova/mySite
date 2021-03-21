let slideIndex = 1

showSlides(slideIndex)

function plusSlides(num) {
  showSlides((slideIndex += num))
}

function currentSlide(num) {
  showSlides((slideIndex = num))
}

function showSlides(num) {
  let slides = document.getElementsByClassName('slider__item')
  let dots = document.getElementsByClassName('slider__pagination-item')

  if (num > slides.length) {
    slideIndex = 1
  } else if (num < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '')
  }
  slides[slideIndex - 1].style.display = 'flex'
  dots[slideIndex - 1].className += ' active'
}

// Get the modal
let modal = document.getElementById('modal')

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById('sertificate')
let modalImg = document.getElementById('img01')

img.onclick = function () {
  modal.style.display = 'block'
  modalImg.src = this.src
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('sertificate__close')[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}
