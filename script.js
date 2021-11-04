const dino = document.querySelector(".dino");

function handleKeyUp(event) {
  // console.log('Pressionou uma tecla')

  if (event.keyCode === 32) {
    // keycode.info
    jump();
  }
}

function jump() {
  let position = 0;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      // para de subir
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
        } else {
          position = position - 20;

          dino.style.bottom = `${position}px`;
        }
      }, 20);
    } else {
      position = position + 20;

      dino.style.bottom = `${position}px`;
    }
  }, 20);
}

document.addEventListener("keyup", handleKeyUp);
