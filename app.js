const d = document
const navBtn = d.querySelector('#nav-btn')
const inlineNav = d.querySelector('#inl-Nav')

navBtn.onclick = () => {
  inlineNav.style.display = 'block'
  if (inlineNav.style.top === '-200px') inlineNav.style.top = '53px'
  else inlineNav.style.top = '-200px'
}

// ----------------------------------

function progressBar() {
  // Узнаем на сколько страница прокручена
  let scroll = document.body.scrollTop || document.documentElement.scrollTop
  // Узнаем высоту всей страницы
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  // Получаем в % на сколько прокручена страница
  let scrolled = (scroll / height) * 100

  // Подставляем % прокрутки в ширину нашей линии
  document.getElementById('progressBar').style.width = scrolled + '%'
}

// Запускаем функцию, когда пользователя скролит
window.addEventListener('scroll', progressBar)
