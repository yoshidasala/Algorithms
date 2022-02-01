

function animate(el, time, distance) {
  let startTime = null;

  const speed = distance / time;

  const move = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const elapsedTime = currentTime - startTime;

    if (elapsedTime > time) return;

    el.style.transform = `translateX(${elapsedTime * speed}px)`;
    window.requestAnimationFrame(move);
  };

  window.requestAnimationFrame(move);
}

animate(document.getElementById("el"), 2000, 350);




function animate(time) {
  let startTime = null;
  let speed = distance / time

  function move(curr) {
    if (!start) start = curr
    let elasped = curr - start
    if (elapsed > time) return

    el.style.transform = `translateX(${elasped * speed}px)`
    window.requestAnimationFrame(move)

  }
  window.requestAnimationFrame(move)
}

animate(el,time,disatnce)


function moveDist(ms, dist) {
  var element = document.getElementById("red");


  // speed is in px per milisecond
  var speed = dist / ms;

  var anim = setInterval(animate, 1);

  function animate() {
    if (!start) start = Date.now()
    let elasped = Date.now() - start
    if (elapsed > time) {
      clearTimeout(anim)
    } else {
      el.style.transform = `translateX(${elasped * speed}px)`
    }

  }
}



