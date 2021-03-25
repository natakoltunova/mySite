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

// РАЗДЕЛИТЬ

function getModal(id) {
  let modal = document.getElementById(id)
  return modal
}

function getImg(id) {
  let img = document.getElementById(id)
  return img
}

function getModalImg(id) {
  let modalImg = document.getElementById(id)
  return modalImg
}

function getSpan(index) {
  let span = document.getElementsByClassName('sertificate__close')[index]
  return span
}

getImg('sertificate').onclick = function () {
  getModal('modal').style.display = 'block'
  getModalImg('img01').src = this.src
  getSpan(0).onclick = function () {
    getModal('modal').style.display = 'none'
  }
}

getImg('sertificate2').onclick = function () {
  getModal('modal2').style.display = 'block'
  getModalImg('img02').src = this.src
  getSpan(1).onclick = function () {
    getModal('modal2').style.display = 'none'
  }
}

getImg('sertificate3').onclick = function () {
  getModal('modal3').style.display = 'block'
  getModalImg('img03').src = this.src
  getSpan(2).onclick = function () {
    getModal('modal3').style.display = 'none'
  }
}

getImg('sertificate4').onclick = function () {
  getModal('modal4').style.display = 'block'
  getModalImg('img04').src = this.src
  getSpan(3).onclick = function () {
    getModal('modal4').style.display = 'none'
  }
}

getImg('sertificate5').onclick = function () {
  getModal('modal5').style.display = 'block'
  getModalImg('img05').src = this.src
  getSpan(4).onclick = function () {
    getModal('modal5').style.display = 'none'
  }
}

getImg('sertificate6').onclick = function () {
  getModal('modal6').style.display = 'block'
  getModalImg('img06').src = this.src
  getSpan(5).onclick = function () {
    getModal('modal6').style.display = 'none'
  }
}
