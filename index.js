function rdmnumberout() {
  var rdmNumber1 = Math.floor(Math.random() * 6) + 1;
  var rdmNumber2 = Math.floor(Math.random() * 6) + 1;
  // output image for player 1
  document.querySelector("img.img1").setAttribute("src", "images/dice"+rdmNumber1+".png");
  document.querySelector("img.img2").setAttribute("src", "images/dice"+rdmNumber2+".png");
  // Who won or drew
  if (rdmNumber1 > rdmNumber2){
    document.querySelector("h1").textContent = ("Player 1 Wins!");
  }
  else if (rdmNumber2 > rdmNumber1){
    document.querySelector("h1").textContent = ("Player 2 Wins!");
  }
  else {
    document.querySelector("h1").textContent = ("Draw...");
  }
}
