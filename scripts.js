// line

let w = window.innerWidth,
    customD = "M0 0 L" + w + " 0 Z",
    counterLine = document.getElementById("counter-line");

counterLine.setAttribute("d", customD);

let lineLength = counterLine.getTotalLength();

counterLine.style.strokeDasharray = lineLength;
counterLine.style.strokeDashoffset = lineLength;

window.addEventListener("scroll", function(e){
  let scrollPage = (document.body.scrollTop + document.documentElement.scrollTop) / ((document.documentElement.scrollHeight - document.documentElement.clientHeight) * 2);
  let drawLine = lineLength * scrollPage;
  counterLine.style.strokeDashoffset = lineLength - drawLine;
});
