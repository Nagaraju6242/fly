const main_body = document.querySelector(".main-body");
var i = 0;

main_body.onmousemove = function (e) {
  i++;
  if (i % 2 == 0) {
    var d = document.createElement("img");
    ran_img = parseInt(Math.random() * 4);
    d.src = ran_img + ".png";
    if (ran_img == 0 || ran_img == 2) {
      d.className = "image down";
    } else {
      d.className = "image up";
    }
    d.style.top = e.clientY + "px";
    d.style.left = e.clientX + "px";
    len = Math.random() * 75;
    d.style.width = len + "px";
    d.style.height = len + "px";
    main_body.appendChild(d);

    setTimeout(function () {
      d.remove();
    }, 3500);
  }
};
