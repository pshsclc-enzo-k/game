var score = 0;

const fish = document.getElementById("fish");
const coral = document.getElementById("coral");
const interval = setInterval(function () {

    document.getElementById("demo").innerHTML = "Score: " + score;
  
    score++;
},1000);


function jump() {
  if (fish.classList != "jump") {
    fish.classList.add("jump");

    setTimeout(function () {
      fish.classList.remove("jump");
    }, 300);
  }
}


let isAlive = setInterval(function () {
  // get current fish Y position
  let fishTop = parseInt(window.getComputedStyle(fish).getPropertyValue("top"));

  // get current coral X position
  let coralLeft = parseInt(
    window.getComputedStyle(coral).getPropertyValue("left")
  );

  // detect collision
  if (coralLeft < 50 && coralLeft > 0 && fishTop >= 140) {
    // collision
    alert("Game Over!");
    score=0;
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});