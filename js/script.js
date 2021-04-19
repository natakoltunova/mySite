//HELLO WORLD
;(function () {
  const timerId = setInterval(
    () => (document.getElementById('hello').style.color = 'white'),
    2000
  )

  const timerClear = setInterval(
    () => (document.getElementById('hello').style.color = 'orchid'),
    3000
  )

  setTimeout(() => {
    clearInterval(timerId)
  }, 8000)

  setTimeout(() => {
    clearInterval(timerClear)
  }, 13000)

  const elemHover = document.getElementById('hello')

  elemHover.onmouseover = () => (elemHover.style.color = 'white')
  elemHover.onmouseleave = () => (elemHover.style.color = 'orchid')
})()

//SLOW ANCHOR
;(function () {
  //select all links to the anchor on the page
  const linkNav = document.querySelectorAll('[href^="#"]')
  // speed can have a fractional value through a point (the lower the value - the higher the speed)
  const speed = 0.2

  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener(
      'click',
      function (e) {
        e.preventDefault() //by clicking on the link override (отменяем) the default behavior
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
})()

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

// MODAL
;(function () {
  function getModal(id) {
    return document.getElementById(id)
  }

  function getModalImg(id) {
    return document.getElementById(id)
  }

  function getSpan(index) {
    return document.getElementsByClassName('sertificate__close')[index]
  }

  function getImg(id) {
    return document.getElementById(id)
  }

  const sertificates = [
    { id: 'sertificate', modal: 'modal', img: 'img01', ordinal: 0 },
    { id: 'sertificate2', modal: 'modal2', img: 'img02', ordinal: 1 },
    { id: 'sertificate3', modal: 'modal3', img: 'img03', ordinal: 2 },
    { id: 'sertificate4', modal: 'modal4', img: 'img04', ordinal: 3 },
    { id: 'sertificate5', modal: 'modal5', img: 'img05', ordinal: 4 },
    { id: 'sertificate6', modal: 'modal6', img: 'img06', ordinal: 5 },
  ]

  for (let index = 0; index < sertificates.length; index++) {
    getImg(sertificates[index].id).onclick = function () {
      getModal(sertificates[index].modal).style.display = 'block'
      getModalImg(sertificates[index].img).src = this.src
      getSpan(sertificates[index].ordinal).onclick = function () {
        getModal(sertificates[index].modal).style.display = 'none'
      }
    }
  }
})()

//FORM
document.addEventListener('DOMContentLoaded', function () {
  //intercept (перехватить) form submission on button click
  const form = document.getElementById('form') //assignment (присваивание) object "form" to variable
  form.addEventListener('submit', formSend) //hanging event on variable (when submitting form go to function formSend)

  async function formSend(e) {
    e.preventDefault() //canceling standard behavior for form
    //check validation
    let error = formValidate(form)

    let formData = new formData(form) //getting form data

    if (error === 0) {
      //if form is filled out correctly, inform user that the data is being sent
      form.classList.add('_sending')
      //sending data via ajax
      //with POST send formData in sendmail.php
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData,
      })
      //get answer if the data was sent successfully
      if (response.ok) {
        //sendmail.php will return json-response if everyth. ok
        let result = await response.json()
        alert(result.message)
        form.reset
        form.classList.remove('_sending')
      } else {
        alert('Ошибка!')
        form.classList.remove('_sending')
      }
    } else {
      alert('Заполните обязательные поля!')
    }
  }

  function formValidate(form) {
    let error = 0
    let formReq = document.querySelectorAll('._req') //take all objects with class '._req' (required)

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index]
      formRemoveError(input) //remove the class '_error' before checking

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input)
          error++
        }
      } else if (
        input.getAttribute('type') === 'checkbox' &&
        input.checked === false
      ) {
        formAddError(input)
        error++
      } else {
        //checking if the field is filled at all
        if (input.value === '') {
          formAddError(input)
          error++
        }
      }
    }
    return error
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error')
    input.classList.add('_error')
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
  }
})
