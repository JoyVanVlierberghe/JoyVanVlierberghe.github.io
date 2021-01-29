this.mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction(): void {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction(): void{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}