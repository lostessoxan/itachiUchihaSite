const doc = document

// --------------------------

class Person {
  #_name

  constructor(name) {
    this.#_name = name
  }

  get name() {
    return this.#_name
  }

  // set name (val) {
  //     this.#_name = val
  // }

  getInfo() {
    return {
      name: doc.querySelector(`.itachi-persons .person.${this.#_name} h2`),
      age: doc.querySelector(`.itachi-persons .person.${this.#_name} .age`),
      desc: doc.querySelector(
        `.itachi-persons .person.${this.#_name} .description`
      ),
    }
  }

  setInfo(name, age, desc, url) {
    doc.querySelector(`.person.${this.#_name} h2`).textContent = name
    doc.querySelector(`.person.${this.#_name} .age`).textContent = age
    doc.querySelector(`.person.${this.#_name} .description`).textContent = desc
    doc.querySelector(`.person.${this.#_name} .img`).setAttribute('src', url)
  }
}

const deidara = new Person('deidara')
const sasuke = new Person('sasuke')
const shisui = new Person('shisui')
const kabuto = new Person('kabuto')
const nagato = new Person('nagato')
const obito = new Person('obito')

sasuke.setInfo(
  'sasuke uchiha'.toUpperCase(),
  'AGE: 15',
  'Итачи Учиха был виновником резни клана Учиха. После того, как он сжег этот образ в сознании Саске, это был только вопрос времени, когда он придет, чтобы отомстить.',
  'https://sun9-82.userapi.com/impf/hgW9HC7_97sA3Ahs_TbUvX85-rte1qSZVXAF3A/HiUCrsYH5DQ.jpg?size=1400x1400&quality=96&sign=e9010f46c56d9aa1ada4c4318db9266b&type=album'
)

deidara.setInfo(
  'deidara tsukuri'.toUpperCase(),
  'AGE: 20',
  'Нукенин ранга S из Ивагакуре. Во время пребывания в деревне являлся частью Бакуха Бутай. После дезертирства, он вступил в преступную организацию Акацки, став самым молодым её членом. Дейдара был партнёром Сасори, вплоть до его смерти, а затем состоял в команде с Тоби, до своего собственного самоубийства.',
  'https://catherineasquithgallery.com/uploads/posts/2021-03/1614586357_50-p-deidara-na-belom-fone-55.jpg'
)

shisui.setInfo(
  'shisui uchiha'.toUpperCase(),
  'AGE: 14',
  'Также известный как "Шисуи Телесного Мерцания" (яп. 瞬身のシスイ, Щунщин но Щисуи) был одним из Анбу клана Учиха Деревни Скрытого Листа.',
  'https://all-aforizmy.ru/wp-content/uploads/2021/12/high_resolution_wallpaper_background_id_77700592179.jpg'
)

kabuto.setInfo(
  'kabuto yakushi'.toUpperCase(),
  'AGE: 20',
  'spent most of his life as a spy working for many different individuals, organisations, and countries. His natural talents in intelligence-gathering and medicine attracted the attention of Orochimaru when he was younger, who made Kabuto his right-hand man. Although Kabuto learns much about the world under Orochimaru, he eventually decides that his life of serving others has prevented him from making an identity for himself. He thereafter seeks power and becomes a major factor in the Fourth Shinobi World War, using his higher place in the world so that he can find where in it he belongs. After finally finding himself in the world, Kabuto returns to Konohagakure to run the orphanage there, helping others such as himself to find their own way.',
  'https://avatars.mds.yandex.net/get-zen_doc/1362253/pub_5e43bfb1d3f8624cf90db4cc_5e43cb054a28a11ab2b4a115/scale_1200'
)

nagato.setInfo(
  'nagato uzumaki'.toUpperCase(),
  'AGE: 25',
  'Нагато (яп. 長門, Нагато Узумаки) был шиноби Деревни Скрытого Дождя и потомком клана Узумаки. Сформировав Акацуки вместе со своими друзьями, такими же сиротами войны, Нагато мечтал принести мир жестокому миру шиноби. Тем не менее, после смерти Яхико, Нагато принял псевдоним Пейн (яп. ペ イ ン, Пэйн) и в партнерстве с Конан стал лидером нового Акацуки: Акацуки, чьей задачей будет насильное установление мира на земле любыми необходимыми методами. После его разговора с Наруто Узумаки, Нагато понял свои ошибки и жертвует собой, воскрешая других шиноби Деревни Скрытого Листа.',
  'https://avatars.mds.yandex.net/get-zen_doc/3362051/pub_5f586060904e9d1d7b05b977_5f586067478cd83420de1461/scale_1200'
)

obito.setInfo(
  'obito uchiha'.toUpperCase(),
  'AGE: 27',
  'Обито Учиха (яп. うちはオビト, Учиха Обито) был шиноби из клана Учиха Конохагакуре и членом команды Минато. Считалось, что он погиб во время Третьей Мировой Войны Шиноби, и что его единственным наследием оставался лишь Шаринган, который он подарил своему другу Какаши Хатаке. На самом же деле, Обито спас от смерти и тренировал Мадара Учиха, но из-за событий войны, Обито потерял веру в реальность и унаследовал от Мадары его план по созданию идеального мира. Вновь дав о себе знать под именами Тоби (яп. トビ, Тоби) и самого Мадары Учихи, Обито втайне взял под свой контроль Акацуки, чтобы использовать организацию как инструмент манипуляций для достижения своих целей, и в конце-концов заявил о себе во всеуслышание, развязав Четвёртую Мировую Войну Шиноби. Тем не менее, ближе к концу событий войны, Обито раскаялся в своих поступках и, в качестве искупления, пожертвовал собственной жизнью ради спасения мира, который ранее он отчаянно пытался заменить.',
  'https://sun9-25.userapi.com/impf/lwboD-Ue9A7PYrfV191T6sHt7rE2cfNdwCtOjw/GSk78VGMZmA.jpg?size=1400x1400&quality=95&sign=d5214bb00b645f21537d9b11ef195619&type=album'
)

// --------------------------

let offset = 0
const sliderLine = document.querySelector('.slider-line.s-l1')
const sliderArrowRight1 = document.querySelector('.slider-right-arrow.s-a1')
const sliderArrowLeft1 = document.querySelector('.slider-left-arrow.s-a1')
const sliderMaxWidth = document.querySelector('.slider').offsetWidth

setInterval(sliderLine1Next, 2000)
setInterval(sliderLine1Prev, 4000)

function sliderLine1Next() {
  offset -= sliderMaxWidth
  if (offset < -(sliderMaxWidth * 3)) offset = 0
  sliderLine.style.left = offset + 'px'
}

function sliderLine1Prev() {
  offset += sliderMaxWidth
  if (offset > 0) {
    offset = -(sliderMaxWidth * 3)
  }
  sliderLine.style.left = offset + 'px'
}

sliderArrowRight1.onclick = sliderLine1Next
sliderArrowLeft1.onclick = sliderLine1Prev

document
  .querySelector('.slider-next.s-b1')
  .addEventListener('click', sliderLine1Next)

document
  .querySelector('.slider-prev.s-b1')
  .addEventListener('click', sliderLine1Prev)

// ----------------------------

const sliderArrowRight2 = document.querySelector('.slider-right-arrow.s-a2')
const sliderArrowLeft2 = document.querySelector('.slider-left-arrow.s-a2')

sliderArrowRight2.onclick = sliderLine2Next
sliderArrowLeft2.onclick = sliderLine2Prev

setInterval(sliderLine2Next, 8000)
setInterval(sliderLine2Prev, 11000)

function sliderLine2Next() {
  offset -= sliderMaxWidth
  if (offset < -(sliderMaxWidth * 3)) offset = 0
  document.querySelector('.slider-line.s-l2').style.left = offset + 'px'
}
function sliderLine2Prev() {
  offset += sliderMaxWidth
  if (offset > 0) {
    offset = -(sliderMaxWidth * 3)
  }
  document.querySelector('.slider-line.s-l2').style.left = offset + 'px'
}
document
  .querySelector('.slider-next.s-b2')
  .addEventListener('click', sliderLine2Next)

document
  .querySelector('.slider-prev.s-b2')
  .addEventListener('click', sliderLine2Prev)
