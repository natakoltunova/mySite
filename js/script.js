//SLOW ANCHOR
var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 1 // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    'click',
    function (e) {
      //по клику на ссылку
      e.preventDefault() //отменяем стандартное поведение
      var w = window.pageYOffset, // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1') // к id элемента, к которому нужно перейти
      ;(t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
        (start = null)
      requestAnimationFrame(step) // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time
        var progress = time - start,
          r =
            t < 0
              ? Math.max(w - progress / V, w + t)
              : Math.min(w + progress / V, w + t)
        window.scrollTo(0, r)
        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash // URL с хэшем
        }
      }
    },
    false
  )
}

//SLIDER
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
