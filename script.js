const dino = document.querySelector('.dino')
const background = document.querySelector('.background')

let isJumping = false

function handleKeyUp(event) {
  // console.log('Pressionou uma tecla')

  if (event.keyCode === 32 || event.keyCode === 38) {
    // keycode.info
    if (!isJumping) {
      jump()
    }
  }
}

function jump() {
  let position = 0

  isJumping = true

  let upInterval = setInterval(() => {
    if (position >= 150) {
      // para de subir
      clearInterval(upInterval)

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval)
          isJumping = false
        } else {
          position = position - 20

          dino.style.bottom = `${position}px`
        }
      }, 20)
    } else {
      position = position + 20

      dino.style.bottom = `${position}px`
    }
  }, 20)
}

function createCactus() {
  const cactus = document.createElement('div')
  let cactusPosition = 1000
  let randomTime = Math.random() * 6000

  cactus.classList.add('cactus')
  cactus.style.left = `${cactusPosition}px`
  // adiciona a div cactus dentro da div background
  background.appendChild(cactus)

  let leftInterval = setInterval(() => {
    if(cactusPosition < -60) {
      // remove os cactus da tela
      clearInterval(leftInterval)
      background.removeChild(cactus)
    } else {
      cactusPosition = cactusPosition - 10
      cactus.style.left = `${cactusPosition}px`
    }
  },20)

  setTimeout(createCactus, randomTime)

}

createCactus()
document.addEventListener('keyup', handleKeyUp)
