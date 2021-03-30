//SLOW ANCHOR

//select all links to the anchor on the page
const linkNav = document.querySelectorAll('[href^="#"]')
// speed can have a fractional value through a point (the lower the value - the higher the speed)
const speed = 0.6

for (let i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    'click',
    function (e) {
      //by clicking on the link override (отменяем) the default behavior
      e.preventDefault()
      let scrol = window.pageYOffset // scrolling
      // to id of element to which you need to go
      let hash = this.href.replace(/[^#]*(.*)/, '$1')
      // (отступ) indent from browser window to id
      ;(roof = document.querySelector(hash).getBoundingClientRect().top),
        (start = null)
      //the method tells the browser that you want to animate and asks it to schedule a redraw at the next animation frame. As a parameter, the method receives a function that will be called before redrawing.
      requestAnimationFrame(step)
      function step(time) {
        if (start === null) start = time
        let progress = time - start
        let run =
          roof < 0
            ? Math.max(scrol - progress / speed, scrol + roof)
            : Math.min(scrol + progress / speed, scrol + roof)
        window.scrollTo(0, run)
        if (run != scrol + roof) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash // URL with hash(#)
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
