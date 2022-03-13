
function imgchange() {
  let imghumor = document.querySelector("#dio-gif");
  let humor = document.querySelector("#alt-button");
  let text = document.querySelector("p");
  let audio = document.querySelector("audio")
  if (humor.value == "1") {
      imghumor.src =
      "https://uploads.spiritfanfiction.com/historias/capas/202109/this-happened-one-two-three-times-too-much-23015573-210920212244.gif";
      humor.value = "2";
      text.textContent = "Dio está triste :c"
  }
  else if (humor.value == "2") {
      imghumor.src =
      "https://i.pinimg.com/originals/24/6f/fc/246ffc974075d1fd2de527fe63f9c087.gif";
      humor.value = "3";
      text.textContent = "ZA WAAAARDO "
      audio.play();
      

  }
  else if (humor.value == "3") {
      imghumor.src =
      "https://i.pinimg.com/originals/ac/c1/5d/acc15de6a166ba5c20bde5f569cbe465.gif";
      humor.value = "1";
      text.textContent = "Dio está feliz c: "
  }
}
