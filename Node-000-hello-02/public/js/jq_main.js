// 지금부터 여기는 DOM HTML JS 영역이다

document.addEventListener("DOMContentLoaded", () => {});

// 지금부터 여기는 JQuery Script 영역이다.
// 위 코드랑 같은거임
$(document).ready(function () {});
$(function () {});
$(() => {
  $("div.home").html("헬로우");
  $("div.bbs").css("color", "blue");

  //   const divs1 = document.querySelectorAll("div.main");
  //   const onClickHandler = (e) => {
  //     const text = e.currentTarget.innerText;
  //     alert(text);
  //   };

  //   for (let i = 0; i < divs1.length; i++) {
  //     divs1[i].addEventListener(onClickHandler);
  //   }
  const divs = $("div.main");
  divs.on("click", function (e) {
    const text = this.innerText;
    alert(text);
  });
});
