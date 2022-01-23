<!DOCTYPE html>
<html>
<style>
#container {
  width: 400px;
  height: 400px;
  position: relative;
  background: yellow;
}
#el {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: red;
}
</style>
<body>

<p><button onclick="animate()">Click Me</button></p>

<div id ="container">
  <div id ="el"></div>
</div>

<script>

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


</script>

</body>
</html>
